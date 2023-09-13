import { cache } from "react";
import { Client } from "pg";
import { Bday } from "./page";

export const revalidate = 600; // 10 min

export const getBirthdayData = cache(async () => {
  // console.log("FETCHING BDAYS");

  let bdays: Bday[] = [];

  if (process.env.PG_URL) {
    const proConfig = {
      connectionString: process.env.PG_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    };
    const client = new Client(proConfig);
    await client.connect();

    const resultBdays = await client.query(
      "select name, username, date, month, place from bday order by date;"
    );
    await client.end();

    if (resultBdays.rowCount) {
      bdays = resultBdays.rows;
    }
  } else {
    console.error("ERROR: PG_URL is not found in environment");
  }

  return { bdays };
});
