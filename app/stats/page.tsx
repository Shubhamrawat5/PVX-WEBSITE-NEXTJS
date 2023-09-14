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

export const revalidate = 600; // 10 min

export const metadata: Metadata = {
  title: "PVX | STATS",
  openGraph: {
    title: "PVX | STATS",
    description:
      "PVX is an active community of friends and easy going people enthusiastically engaged in mutual transaction of ideas spanning over a spectrum of headers ranging from your typical Bakchodi to some serious Crypto and Technology...",
    url: "https://pvxcommunity.com/stats",
    images:
      "https://github.com/Shubhamrawat5/PVX_webpage/blob/main/src/asserts/images/main.jpg?raw=true",
    type: "website",
  },
};

export default async function StatsPage() {
  const { dataPVXG, dataPVXT } = await getStatsData();

  return <Stats dataPVXG={dataPVXG} dataPVXT={dataPVXT} />;
}
