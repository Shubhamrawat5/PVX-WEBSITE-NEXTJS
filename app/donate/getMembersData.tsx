import { Client } from "pg";
import { cache } from "react";
import { Members } from "./page";

export const revalidate = 60; // 1 min

export const getMembersData = cache(async () => {
  let members: Members[] = [];

  if (process.env.PG_URL) {
    const proConfig = {
      connectionString: process.env.PG_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    };
    const client = new Client(proConfig);

    await client.connect();
    const resultDonation = await client.query(
      "SELECT name, donation FROM member WHERE donation > 0 ORDER BY donation DESC;"
    );
    await client.end();

    if (resultDonation.rowCount) {
      members = resultDonation.rows;
    }
  } else {
    console.error("ERROR: PG_URL is not found in environment");
  }

  return { members };
});
