import React, { useState } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { Client } from "pg";

import Game from "../components/home/Game";
import Header from "../components/home/Header";
import Admin from "../components/home/Admin";
import Groups from "../components/home/groups/Groups";

import GroupStateProvider from "../components/home/groups/GroupStateProvider";

// HomePage.getInitialProps = async () => {
export const getServerSideProps = async () => {
  // runs in server side
  // const url = "https://pvx-api-vercel.vercel.app/api/links";
  // let { data } = await axios.get(url);
  // return { data: data };

  const proConfig = {
    connectionString: process.env.HEROKU_PG,
    ssl: {
      rejectUnauthorized: false,
    },
  };
  const client = new Client(proConfig);
  await client.connect();

  let enabled = true;
  const resultEnabled = await client.query("SELECT * from grouplinksenabled;");

  if (resultEnabled.rowCount) {
    enabled = resultEnabled.rows[0].enabled;
  }

  let groupLinks = [];
  if (enabled) {
    // Get all links
    const resultGroupLinks = await client.query(
      "SELECT gl.groupjid,gl.link,gn.gname FROM grouplinks gl LEFT JOIN groupname gn ON gl.groupjid=gn.groupjid;"
    );

    if (resultGroupLinks.rowCount) {
      groupLinks = resultGroupLinks.rows;
    }
  }

  await client.end();

  // CHECK THIS PARSE
  return {
    props: {
      data: JSON.parse(JSON.stringify(groupLinks)),
      enabled,
    },
  };
};

export default function HomePage({ data, enabled }) {
  const [showGame, setShowGame] = useState(false);
  const [gameEventAdded, setGameEventAdded] = useState(false);

  const wagroups = GroupStateProvider();

  // if not blocked then attach links
  if (enabled) {
    // grpOut = data coming from outside - api
    // grpIn = data present inside already - wagroups
    wagroups.forEach((grpIn, index) => {
      data.forEach((grpOut) => {
        if (grpOut.groupjid === grpIn.groupjid) {
          wagroups[index].link = grpOut.link;
        }
      });
    });
  }

  return (
    <>
      <Head>
        <title>PVX | HOME</title>
      </Head>
      {showGame ? (
        <Game
          setShowGame={setShowGame}
          gameEventAdded={gameEventAdded}
          setGameEventAdded={setGameEventAdded}
        />
      ) : (
        <>
          <Header setShowGame={setShowGame} />
          <Groups wagroups={wagroups} enabled={enabled} />
          <Admin />
        </>
      )}
    </>
  );
}

HomePage.propTypes = {
  data: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      gname: PropTypes.string.isRequired,
      groupjid: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  enabled: PropTypes.number.isRequired,
};
