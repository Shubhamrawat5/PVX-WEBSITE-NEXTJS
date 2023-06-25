import React from "react";
import PropTypes from "prop-types";
import { Client } from "pg";
import Head from "next/head";
import Bdays from "../components/bday/Bdays";
import BdayStateProvider from "../components/bday/BdayStateProvider";

// import axios from "axios";

// BdaysPage.getInitialProps = async () => {
export const getServerSideProps = async () => {
  // runs in server side
  // const url = "https://pvx-api-vercel.vercel.app/api/bday";
  // let { data } = await axios.get(url);
  // return { data: data.data };

  const proConfig = {
    connectionString: process.env.HEROKU_PG,
    ssl: {
      rejectUnauthorized: false,
    },
  };
  const client = new Client(proConfig);
  await client.connect();

  let dataBdays;

  const resultBdays = await client.query("select * from bday;");
  await client.end();

  if (resultBdays.rowCount) {
    dataBdays = resultBdays.rows;
  } else {
    dataBdays = [];
  }

  return { props: { dataBdays } };
};

export default function BdaysPage({ dataBdays }) {
  const months = BdayStateProvider();
  let todayBday = "";

  const dateNew = new Date();
  const todayDate = dateNew.getDate();
  const todayMonth = dateNew.getMonth() + 1; // getMonth return 0 to 11

  dataBdays.forEach((member) => {
    const { name, username, date, month, place } = member;

    if (todayDate === date && todayMonth === month) {
      // console.log(`TODAY IS ${name} Birthday`);
      todayBday += todayBday === "" ? name : ` & ${name}`;
    }

    months[month - 1].members.push({ date, name, username, place });
  });

  return (
    <>
      <Head>
        <title>PVX | BDAYS</title>
      </Head>
      <Bdays months={months} todayBday={todayBday} />
    </>
  );
}

BdaysPage.propTypes = {
  dataBdays: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
      place: PropTypes.string.isRequired,
    })
  ).isRequired,
};
