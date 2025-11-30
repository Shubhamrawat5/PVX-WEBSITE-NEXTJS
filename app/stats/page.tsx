import React from "react";
import { Metadata } from "next";
import Stats from "./Stats";
import { getStatsData } from "./getStatsData";

export interface DataPVXG {
  gname: string;
  groupjid: string;
  count: number;
}

export interface DataPVXT {
  name: string;
  memberjid: string;
  count: number;
}

export interface Donation {
  name: string;
  memberjid: string;
  donation: number;
}

export const revalidate = 60; // 1 min

export const metadata: Metadata = {
  title: "Stats",
  description:
    "PVX Bot is a whatsapp bot that counts all the messages of every PVX group and individual members. This lets us know about the most active group and members. Also members are ranked according to the total number of messages they've sent in every PVX group.",
  openGraph: {
    title: "PVX | STATS",
    description:
      "PVX Bot is a whatsapp bot that counts all the messages of every PVX group and individual members. This lets us know about the most active group and members. Also members are ranked according to the total number of messages they've sent in every PVX group.",
    url: "https://pvxcommunity.com/stats",
    images:
      "https://github.com/Shubhamrawat5/PVX_webpage/blob/main/src/asserts/images/main.jpg?raw=true",
    type: "website",
  },
};

export default async function StatsPage() {
  const { dataPVXG, dataPVXT, donations } = await getStatsData();

  return (
    <Stats dataPVXG={dataPVXG} dataPVXT={dataPVXT} donations={donations} />
  );
}
