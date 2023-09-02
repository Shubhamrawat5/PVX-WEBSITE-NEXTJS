import React from "react";
import { Client } from "pg";
import Head from "next/head";
import Birthdays from "../components/birthdays/Birthdays";

export interface Bday {
  name: string;
  username: string;
  date: number;
  month: number;
  place: string;
}

export const getServerSideProps = async () => {
  let bdays: Bday[] = [];

  if (process.env.PG_URL) {
    const proConfig = {
      connectionString: process.env.PG_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    };
    const client = new Client(proConfig);
    await client.connect();

    const resultBdays = await client.query(
      "select name, username, date, month, place from bday order by date;"
    );
    await client.end();

    if (resultBdays.rowCount) {
      bdays = resultBdays.rows;
    }
  } else {
    console.error("ERROR: PG_URL is not found in environment");
  }

  return { props: { bdays } };
};

export interface BirthdaysProps {
  bdays: Bday[];
}

export default function BirthdaysPage(props: BirthdaysProps) {
  const { bdays } = props;

  return (
    <>
      <Head>
        <title>PVX | BDAYS</title>
      </Head>
      <Birthdays bdays={bdays} />
    </>
  );
}
