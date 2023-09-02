import "dotenv/config";
import { Pool } from "pg";

const createbdayTable = async (pool: Pool) => {
  await pool.query(
    `CREATE TABLE IF NOT EXISTS bday(
        name TEXT NOT NULL, 
        username TEXT NOT NULL, 
        date INTEGER NOT NULL, 
        month INTEGER NOT NULL, 
        year INTEGER, 
        place TEXT NOT NULL,
        number TEXT PRIMARY KEY
      );`
  );
};

const createMetaTable = async (pool: Pool) => {
  await pool.query(
    `CREATE TABLE IF NOT EXISTS meta(
        variable text PRIMARY KEY,
        value boolean NOT NULL,
        last_updated Date NOT NULL
      );`
  );
};

const createGroupsTable = async (pool: Pool) => {
  await pool.query(
    `CREATE TABLE IF NOT EXISTS groups(
        groupjid TEXT PRIMARY KEY, 
        gname TEXT NOT NULL, 
        link TEXT, 
        commands_disabled TEXT[] NOT NULL 
      );`
  );
};

const createMembersTable = async (pool: Pool) => {
  await pool.query(
    `CREATE TABLE IF NOT EXISTS members(
          memberjid TEXT PRIMARY KEY, 
          name TEXT NOT NULL, 
          donation INTEGER DEFAULT 0,
          milestones TEXT[] NOT NULL
      );`
  );
};

const createCountMemberTable = async (pool: Pool) => {
  await pool.query(
    `CREATE TABLE IF NOT EXISTS countmember(
        memberjid TEXT NOT NULL, 
        groupjid TEXT NOT NULL, 
        message_count INTEGER NOT NULL DEFAULT 0, 
        warning_count INTEGER NOT NULL DEFAULT 0, 
        video_count INTEGER NOT NULL DEFAULT 0, 
        PRIMARY KEY (memberjid, groupjid), 
        CHECK(warning_count BETWEEN 0 and 3),
  
        CONSTRAINT countmember_groupjid_fkey FOREIGN KEY (groupjid) REFERENCES groups (groupjid),
        CONSTRAINT countmember_memberjid_fkey FOREIGN KEY (memberjid) REFERENCES members (memberjid)
      );`
  );
};

const migrate = async () => {
  if (!process.env.PG_URL) {
    console.error("ERROR: PG_URL is not found in environment");
    return;
  }

  const proConfig = {
    connectionString: process.env.PG_URL,
    ssl: false,
  };

  const pool = new Pool(proConfig);

  console.log("Creating all tables.");
  await createbdayTable(pool);
  await createMetaTable(pool);
  await createGroupsTable(pool);
  await createMembersTable(pool);
  await createCountMemberTable(pool);
  console.log("Created all tables.");

  pool.end();
};

migrate();
