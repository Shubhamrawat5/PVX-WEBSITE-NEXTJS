import React from "react";
import { Metadata } from "next";

import Donate from "./Donate";
import { getMembersData } from "./getMembersData";

export interface Members {
  name: string;
  memberjid: string;
  donation: number;
}

export const revalidate = 600; // 10 min

export const metadata: Metadata = {
  title: "PVX | DONATE",
  openGraph: {
    title: "PVX | DONATE",
    description:
      "PVX is an active community of friends and easy going people enthusiastically engaged in mutual transaction of ideas spanning over a spectrum of headers ranging from your typical Bakchodi to some serious Crypto and Technology...",
    url: "https://pvxcommunity.com/donate",
    images:
      "https://github.com/Shubhamrawat5/PVX_webpage/blob/main/src/asserts/images/main.jpg?raw=true",
    type: "website",
  },
};

export default async function DonatePage() {
  const { members } = await getMembersData();

  return <Donate members={members} />;
}
