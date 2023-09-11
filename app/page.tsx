import React from "react";
import { Metadata } from "next";
import { Client } from "pg";

import Header from "./components/home/Header";
import Admin from "./components/home/Admin";
import Groups from "./components/home/groups/Groups";

export interface GroupDB {
  groupjid: string;
  gname: string;
  link: string;
}

export const getGroupData = async () => {
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
        "SELECT gname, groupjid, link from groups;"
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
};

export interface GroupsProps {
  groupsDB: GroupDB[];
  isEnabled: boolean;
}

export const metadata: Metadata = {
  title: "PVX | HOME",
};

export default async function HomePage() {
  const { groupsDB, isEnabled } = await getGroupData();

  return (
    <>
      <Header />
      <Groups groupsDB={groupsDB} isEnabled={isEnabled} />
      <Admin />
    </>
  );
}
