import { cache } from "react";
import { Client } from "pg";
import { GroupDB } from "../page";

export const revalidate = 60; // 1 min

export const getGroupData = cache(async () => {
  // console.log("FETCHING HOME");

  let isEnabled = false;
  let groupsDB: GroupDB[] = [];

  if (process.env.PG_URL) {
    const proConfig = {
      connectionString: process.env.PG_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    };
    const client = new Client(proConfig);
    await client.connect();

    const resultEnabled = await client.query(
      "SELECT * from meta where variable='groups_link_enabled';"
    );

    if (resultEnabled.rowCount) {
      isEnabled = resultEnabled.rows[0].value;
    }

    // TODO: GET TELEGRAM DISCORD LINK FROM DB
    if (isEnabled) {
      const resultGroupLinks = await client.query(
        "SELECT gname, groupjid, link from pvx_group;"
      );

      if (resultGroupLinks.rowCount) {
        groupsDB = resultGroupLinks.rows;
      }
    }

    await client.end();
  } else {
    console.error("ERROR: PG_URL is not found in environment");
  }

  return {
    groupsDB,
    isEnabled,
  };
});
