import React, { useState } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { Client } from "pg";

import Game from "../components/home/Game";
import Header from "../components/home/Header";
import Admin from "../components/home/Admin";
import Groups from "../components/home/groups/Groups";

import GroupState from "../components/home/groups/GroupState";

export interface Group {
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

  let groups: Group[] = [];
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

export default function HomePage(props: {
  groups: Group[];
  isEnabled: boolean;
}) {
  const { groups, isEnabled } = props;

  const [showGame, setShowGame] = useState(false);

  const wagroups = GroupState();

  // check if group links are enabled
  if (isEnabled) {
    // groupFromDB = data coming from outside - api
    // groupFromState = data present inside already - wagroups
    wagroups.forEach((groupFromState, index) => {
      groups.forEach((groupFromDB) => {
        if (groupFromDB.groupjid === groupFromState.groupjid) {
          wagroups[index].link = groupFromDB.link;
        }
      });
    });
  }

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
          <Groups wagroups={wagroups} isEnabled={isEnabled} />
          <Admin />
        </>
      )}
    </>
  );
}

HomePage.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      gname: PropTypes.string.isRequired,
      groupjid: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
  isEnabled: PropTypes.bool.isRequired,
};
