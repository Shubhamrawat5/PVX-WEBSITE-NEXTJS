import React, { useState } from "react";
import Head from "next/head";
import { Client } from "pg";

import Game from "../components/home/Game";
import Header from "../components/home/Header";
import Admin from "../components/home/Admin";
import Groups from "../components/home/groups/Groups";

export interface GroupDB {
  groupjid: string;
  gname: string;
  link: string;
}

export const getServerSideProps = async () => {
  const proConfig = {
    connectionString: process.env.PG_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
  const client = new Client(proConfig);
  await client.connect();

  let isEnabled = true;
  const resultEnabled = await client.query(
    "SELECT * from meta where variable='groups_link_enabled';"
  );

  if (resultEnabled.rowCount) {
    isEnabled = resultEnabled.rows[0].value;
  }

  // TODO: GET TELEGRAM DISCORD LINK FROM DB
  let groups: GroupDB[] = [];
  if (isEnabled) {
    const resultGroupLinks = await client.query("SELECT * from groups;");

    if (resultGroupLinks.rowCount) {
      groups = resultGroupLinks.rows;
    }
  }

  await client.end();

  return {
    props: {
      groups,
      isEnabled,
    },
  };
};

export interface GroupsProps {
  groups: GroupDB[];
  isEnabled: boolean;
}
export default function HomePage(props: GroupsProps) {
  const { groups, isEnabled } = props;

  const [showGame, setShowGame] = useState(false);

  const showGameHandler = (value: boolean) => {
    setShowGame(value);
  };

  return (
    <>
      <Head>
        <title>PVX | HOME</title>
      </Head>
      {showGame ? (
        <Game showGameHandler={showGameHandler} />
      ) : (
        <>
          <Header showGameHandler={showGameHandler} />
          <Groups groups={groups} isEnabled={isEnabled} />
          <Admin />
        </>
      )}
    </>
  );
}
