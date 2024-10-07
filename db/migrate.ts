import "dotenv/config";
import { Pool } from "pg";

const createTable = async (pool: Pool, query: string) => {
  try {
    await pool.query(query);
    console.log("Table created successfully.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

const createTables = async (pool: Pool) => {
  await createTable(
    pool,
    `
    CREATE TABLE IF NOT EXISTS groups(
      uuid UUID DEFAULT gen_random_uuid(),
      groupjid TEXT PRIMARY KEY, 
      gname TEXT NOT NULL, 
      link TEXT, 
      commands_disabled TEXT[] NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );`
  );

  await createTable(
    pool,
    `
    CREATE TABLE IF NOT EXISTS members(
      uuid UUID DEFAULT gen_random_uuid(),
      memberjid TEXT PRIMARY KEY, 
      name TEXT NOT NULL, 
      donation INTEGER DEFAULT 0,
      milestones TEXT[] NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );`
  );

  await createTable(
    pool,
    `
    CREATE TABLE IF NOT EXISTS birthday(
      uuid UUID DEFAULT gen_random_uuid(),
      memberjid TEXT PRIMARY KEY,
      name TEXT NOT NULL, 
      username TEXT NOT NULL, 
      date INTEGER NOT NULL, 
      month INTEGER NOT NULL, 
      year INTEGER, 
      place TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW(),
      CONSTRAINT birthdays_memberjid_fkey FOREIGN KEY(memberjid) REFERENCES members(memberjid)
    );`
  );

  await createTable(
    pool,
    `
    CREATE TABLE IF NOT EXISTS blacklist(
      uuid UUID DEFAULT gen_random_uuid(),
      memberjid TEXT PRIMARY KEY, 
      reason TEXT NOT NULL, 
      admin TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW(),
      CONSTRAINT blacklist_memberjid_fkey FOREIGN KEY(memberjid) REFERENCES members(memberjid)
    );`
  );

  await createTable(
    pool,
    `
    CREATE TABLE IF NOT EXISTS meta(
      uuid UUID DEFAULT gen_random_uuid(),
      variable TEXT PRIMARY KEY,
      value BOOLEAN NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );`
  );

  await createTable(
    pool,
    `
    CREATE TABLE IF NOT EXISTS milestonetext(
      uuid UUID DEFAULT gen_random_uuid(),
      sno SERIAL NOT NULL, 
      milestone TEXT PRIMARY KEY,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );`
  );

  await createTable(
    pool,
    `
    CREATE TABLE IF NOT EXISTS countmember(
      uuid UUID DEFAULT gen_random_uuid(),
      memberjid TEXT NOT NULL, 
      groupjid TEXT NOT NULL, 
      message_count INTEGER NOT NULL DEFAULT 0, 
      warning_count INTEGER NOT NULL DEFAULT 0, 
      video_count INTEGER NOT NULL DEFAULT 0, 
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW(),
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

  const pool = new Pool({ connectionString: process.env.PG_URL, ssl: false });

  try {
    console.log("Creating all tables.");
    await createTables(pool);
    console.log("Created all tables.");
  } finally {
    await pool.end();
  }
};

migrate();
