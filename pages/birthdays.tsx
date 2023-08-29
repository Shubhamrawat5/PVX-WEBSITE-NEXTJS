import React from "react";
import PropTypes from "prop-types";
import { Client } from "pg";
import Head from "next/head";
import Birthdays from "../components/birthdays/Birthdays";
import BdayStateProvider from "../components/birthdays/BirhdayState";

export interface Bday {
  name: string;
  username: string;
  date: number;
  month: number;
  place: string;
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

  let bdays: Bday[] = [];

  const resultBdays = await client.query("select * from bday;");
  await client.end();

  if (resultBdays.rowCount) {
    bdays = resultBdays.rows;
  }

  return { props: { bdays } };
};

export default function BirthdaysPage(props: { bdays: Bday[] }) {
  const { bdays } = props;

  const months = BdayStateProvider();
  let todayBday = "";

  const dateNew = new Date();
  const todayDate = dateNew.getDate();
  const todayMonth = dateNew.getMonth() + 1; // getMonth return 0 to 11

  bdays.forEach((bday) => {
    const { name, username, date, month, place } = bday;

    if (todayDate === date && todayMonth === month) {
      console.log(`TODAY IS ${name} Birthday`);
      todayBday += todayBday === "" ? name : ` & ${name}`;
    }

    months[month - 1].bdays.push({ date, month, name, username, place });
  });

  return (
    <>
      <Head>
        <title>PVX | BDAYS</title>
      </Head>
      <Birthdays months={months} todayBday={todayBday} />
    </>
  );
}

BirthdaysPage.propTypes = {
  bdays: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
      place: PropTypes.string.isRequired,
    })
  ).isRequired,
};
