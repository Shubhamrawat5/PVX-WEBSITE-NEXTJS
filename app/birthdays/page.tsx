import React from "react";
import { Metadata } from "next";
import { Client } from "pg";
import Birthdays from "./Birthdays";

export interface Bday {
  name: string;
  username: string;
  date: number;
  month: number;
  place: string;
}

const getBirthdayData = async () => {
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

  return { bdays };
};

export interface BirthdaysProps {
  bdays: Bday[];
}

export const metadata: Metadata = {
  title: "PVX | B'DAYS",
};

export default async function BirthdaysPage() {
  const { bdays } = await getBirthdayData();

  return <Birthdays bdays={bdays} />;
}
