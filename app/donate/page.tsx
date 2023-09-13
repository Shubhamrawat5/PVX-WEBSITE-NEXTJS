import React, { cache } from "react";
import { Metadata } from "next";
import { Client } from "pg";

import Donate from "./Donate";

export interface Members {
  name: string;
  memberjid: string;
  donation: number;
}

export const revalidate = 60 * 30; // 30 min

export const getMembersData = cache(async () => {
  let members: Members[] = [];

  if (process.env.PG_URL) {
    const proConfig = {
      connectionString: process.env.PG_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    };
    const client = new Client(proConfig);

    await client.connect();
    const resultDonation = await client.query(
      "SELECT name, donation FROM members WHERE donation > 0 ORDER BY donation DESC;"
    );
    await client.end();

    if (resultDonation.rowCount) {
      members = resultDonation.rows;
    }
  } else {
    console.error("ERROR: PG_URL is not found in environment");
  }

  return { members };
});

export interface DonateProps {
  members: Members[];
}

export const metadata: Metadata = {
  title: "PVX | DONATE",
};

export default async function DonatePage() {
  const { members } = await getMembersData();

  return <Donate members={members} />;
}
