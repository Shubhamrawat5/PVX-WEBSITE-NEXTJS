import React from "react";
import Head from "next/head";
import { Client } from "pg";

import Donate from "../components/donate/Donate";

export interface Members {
  name: string;
  memberjid: string;
  donation: number;
}

export const getServerSideProps = async () => {
  const proConfig = {
    connectionString: process.env.PG_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
  const client = new Client(proConfig);

  let members: Members[] = [];

  await client.connect();
  const resultDonation = await client.query(
    "SELECT name, memberjid, donation FROM members WHERE donation > 0 ORDER BY donation DESC;"
  );
  await client.end();

  if (resultDonation.rowCount) {
    members = resultDonation.rows;
  }

  return { props: { members } };
};

export default function DonatePage(props: { members: Members[] }) {
  const { members } = props;
  return (
    <>
      <Head>
        <title>PVX | DONATE</title>
      </Head>
      <Donate members={members} />
    </>
  );
}
