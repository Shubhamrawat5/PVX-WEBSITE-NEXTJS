import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Game from "../components/home/Game";
import { useState } from "react";

/* ------------------------------------ - ----------------------------------- */
import Header from "../components/home/Header";
import Admin from "../components/home/Admin";
import Groups from "../components/home/groups/Groups";

import GroupStateProvider from "../components/home/groups/GroupStateProvider";

// import axios from "axios";

// HomePage.getInitialProps = async () => {
export const getServerSideProps = async (ctx) => {
  //runs in server side
  // const url = "https://pvx-api-vercel.vercel.app/api/links";
  // let { data } = await axios.get(url);
  // return { data: data };
  const { Client } = require("pg");

  const proConfig = {
    connectionString: process.env.HEROKU_PG,
    ssl: {
      rejectUnauthorized: false,
    },
  };
  const client = new Client(proConfig);
  await client.connect();

  let enabled = true;
  let resultEnabled = await client.query("SELECT * from grouplinksenabled;");

  if (resultEnabled.rowCount) {
    enabled = resultEnabled.rows[0].enabled;
  }

  let groupLinks = [];
  if (enabled) {
    //get all links
    let resultGroupLinks = await client.query(
      "SELECT gl.groupjid,gl.link,gn.gname FROM grouplinks gl LEFT JOIN groupname gn ON gl.groupjid=gn.groupjid;"
    );

    if (resultGroupLinks.rowCount) {
      groupLinks = resultGroupLinks.rows;
    }
  }

  await client.end();

  return {
    props: {
      data: JSON.parse(JSON.stringify(groupLinks)),
      enabled: enabled,
    },
  };
};

export default function HomePage(props) {
  const { data, enabled } = props;
  const [showGame, setShowGame] = useState(false);
  const [gameEventAdded, setGameEventAdded] = useState(false);

  let wagroups = GroupStateProvider();

  //if not blocked then attach links
  if (enabled) {
    //grpOut = data coming from outside - api
    //grpIn = data present inside already - wagroups
    wagroups.forEach((grpIn, index) => {
      data.forEach((grpOut) => {
        if (grpOut.groupjid === grpIn.jid) {
          wagroups[index].url = grpOut.link;
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
