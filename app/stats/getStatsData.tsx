import { Client } from "pg";
import { cache } from "react";
import { DataPVXG, DataPVXT } from "./page";

export const revalidate = 60; // 1 min

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
      "SELECT pvx_group.gname, pvx_group.groupjid, SUM(count_member.message_count) as count from count_member INNER JOIN pvx_group ON count_member.groupjid = pvx_group.groupjid GROUP BY pvx_group.gname,pvx_group.groupjid ORDER BY count DESC;"
    );

    if (resultPVXG.rowCount) {
      dataPVXG = resultPVXG.rows;
    }

    const resultPVXT = await client.query(
      "SELECT member.name, sum(count_member.message_count) as count FROM count_member LEFT JOIN member ON count_member.memberjid=member.memberjid GROUP BY count_member.memberjid,member.name ORDER BY count DESC LIMIT 50;"
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
