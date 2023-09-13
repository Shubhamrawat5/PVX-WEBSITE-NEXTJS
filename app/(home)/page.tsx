import React from "react";
import { Metadata } from "next";

import Admin from "./Admin";
import Groups from "./groups/Groups";
import Header from "./Header";
import { getGroupData } from "./groups/getGroupData";

export interface GroupDB {
  groupjid: string;
  gname: string;
  link: string;
}

export const metadata: Metadata = {
  title: "PVX | HOME",
};

export default async function HomePage() {
  const { groupsDB, isEnabled } = await getGroupData();

  return (
    <>
      <Header />
      <Groups groupsDB={groupsDB} isEnabled={isEnabled} />
      <Admin />
    </>
  );
}
