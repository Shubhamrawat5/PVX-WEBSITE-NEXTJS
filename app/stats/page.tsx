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
};

export default async function StatsPage() {
  const { dataPVXG, dataPVXT } = await getStatsData();

  return <Stats dataPVXG={dataPVXG} dataPVXT={dataPVXT} />;
}
