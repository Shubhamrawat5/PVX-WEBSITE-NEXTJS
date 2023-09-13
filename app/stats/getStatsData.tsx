import { Client } from "pg";
import { cache } from "react";
import { DataPVXG, DataPVXT } from "./page";

export const revalidate = 600; // 10 min

export const getStatsData = cache(async () => {
  // console.log("FETCHING STATS");

  let dataPVXG: DataPVXG[] = [];
  let dataPVXT: DataPVXT[] = [];

  if (process.env.PG_URL) {
    const proConfig = {
      connectionString: process.env.PG_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    };
    const client = new Client(proConfig);
    await client.connect();

    const resultPVXG = await client.query(
      "SELECT groups.gname, groups.groupjid, SUM(countmember.message_count) as count from countmember INNER JOIN groups ON countmember.groupjid = groups.groupjid GROUP BY groups.gname,groups.groupjid ORDER BY count DESC;"
    );

    if (resultPVXG.rowCount) {
      dataPVXG = resultPVXG.rows;
    }

    const resultPVXT = await client.query(
      "SELECT members.name, sum(countmember.message_count) as count FROM countmember LEFT JOIN members ON countmember.memberjid=members.memberjid GROUP BY countmember.memberjid,members.name ORDER BY count DESC LIMIT 50;"
    );

    if (resultPVXT.rowCount) {
      dataPVXT = resultPVXT.rows;
    }

    await client.end();
  } else {
    console.error("ERROR: PG_URL is not found in environment");
  }
  return { dataPVXG, dataPVXT };
});
