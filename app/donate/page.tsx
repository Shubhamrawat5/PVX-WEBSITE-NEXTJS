import React from "react";
import { Metadata } from "next";

import Donate from "./Donate";
import { getMembersData } from "./getMembersData";

export interface Members {
  name: string;
  memberjid: string;
  donation: number;
}

export const metadata: Metadata = {
  title: "PVX | DONATE",
};

export default async function DonatePage() {
  const { members } = await getMembersData();

  return <Donate members={members} />;
}
