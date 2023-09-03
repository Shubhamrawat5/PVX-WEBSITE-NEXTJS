import "dotenv/config";
import { Pool } from "pg";
import { faker } from "@faker-js/faker";
import { whatsappGroupsState } from "../components/home/groups/GroupsState";

/* -------------------------------- Birthday -------------------------------- */
interface Bday {
  name: string;
  username: string;
  date: number;
  month: number;
  year: number | null;
  place: string;
  number: string;
}

function createRandomBday(): Bday {
  return {
    name: faker.internet.displayName(),
    username: faker.internet.userName(),
    date: faker.number.int({ min: 1, max: 30 }),
    month: faker.number.int({ min: 1, max: 12 }),
    year: faker.number.int({ min: 1990, max: 2000 }),
    place: faker.location.city(),
    number: String(faker.number.int({ min: 11111111, max: 22222222 })),
  };
}

const addBirthdays = async (pool: Pool): Promise<boolean> => {
  const dataCount = 50;
  console.log(`\nSeeding birthdays, Count: ${dataCount}`);

  const bdaysAll = [];

  for (let i = 0; i < dataCount; i++) {
    const bday = createRandomBday();
    bdaysAll.push(bday);
  }

  const res = await pool.query(
    `
       INSERT INTO bday (name, username, date, month, year, place, number)
       SELECT *
       FROM json_to_recordset($1)
       AS x("name" text, "username" text, "date" int, "month" int, "year" int, "place" text, "number" text);
    `,
    [JSON.stringify(bdaysAll)]
  );

  console.log(`Seeding birthdays completed. Count: ${res.rowCount}`);
  return true;
};

/* ---------------------------------- Group --------------------------------- */
const addGroups = async (pool: Pool): Promise<boolean> => {
  const whatsappGroups = whatsappGroupsState();
  console.log(`\nSeeding groups, Count: ${whatsappGroups.length}`);

  const groupsAll = [];

  for (let i = 0; i < whatsappGroups.length; i++) {
    groupsAll.push({
      groupjid: whatsappGroups[i].id,
      gname: whatsappGroups[i].name,
      link: "https://",
      commands_disabled: [],
    });
  }

  const res = await pool.query(
    `
       INSERT INTO groups (groupjid, gname, link, commands_disabled)
       SELECT *
       FROM json_to_recordset($1)
       AS x("groupjid" text, "gname" text, "link" text, "commands_disabled" text[]);
    `,
    [JSON.stringify(groupsAll)]
  );

  console.log(`Seeding groups completed. Count: ${res.rowCount}`);
  return true;
};

/* --------------------------------- Member --------------------------------- */
interface Member {
  memberjid: string;
  name: string;
  donation: number;
  milestones: string[];
}

function createRandomMember(): Member {
  return {
    memberjid: faker.string.uuid(),
    name: faker.internet.userName(),
    donation: faker.number.int({ max: 100 }),
    milestones: [],
  };
}

const addMembers = async (pool: Pool): Promise<boolean> => {
  const dataCount = 50;
  console.log(`\nSeeding members, Count: ${dataCount}`);

  const membersAll = [];

  for (let i = 0; i < dataCount; i++) {
    const member = createRandomMember();
    membersAll.push(member);
  }

  const res = await pool.query(
    `
       INSERT INTO members (memberjid, name, donation, milestones)
       SELECT *
       FROM json_to_recordset($1)
       AS x("memberjid" text, "name" text, "donation" int, "milestones" text[]);
    `,
    [JSON.stringify(membersAll)]
  );

  console.log(`Seeding members completed. Count: ${res.rowCount}`);
  return true;
};

/* ---------------------------------- Meta ---------------------------------- */
const addMeta = async (pool: Pool): Promise<boolean> => {
  const dataCount = 1;

  console.log(`\nSeeding meta, Count: ${dataCount}`);

  const res = await pool.query("INSERT INTO meta VALUES($1,$2,$3);", [
    "groups_link_enabled",
    true,
    "2023-09-01",
  ]);

  console.log(`Seeding meta completed. Count: ${res.rowCount}`);
  return true;
};

/* --------------------------------- Seeding -------------------------------- */
const seeding = async () => {
  if (!process.env.PG_URL) {
    console.error("ERROR: PG_URL is not found in environment");
    return;
  }

  const proConfig = {
    connectionString: process.env.PG_URL,
    ssl: false,
  };

  const pool = new Pool(proConfig);

  console.log("[Starting seeding with dummy data]");
  await addBirthdays(pool);
  await addMembers(pool);
  await addGroups(pool);
  await addMeta(pool);
  console.log("\n[Seeding completed]");

  pool.end();
};

seeding();
