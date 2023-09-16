import React from "react";
import { Metadata } from "next";

import Admin from "./Admin";
import Groups from "./groups/Groups";
import Header from "./Header";
import { getGroupData } from "./groups/getGroupData";
import Counter from "./Counter";

export interface GroupDB {
  groupjid: string;
  gname: string;
  link: string;
}

// WORKING HERE ONLY INSIDE PAGES
export const revalidate = 600; // 10 min

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const { groupsDB, isEnabled } = await getGroupData();

  return (
    <>
      <Header />
      <Counter />
      <Groups groupsDB={groupsDB} isEnabled={isEnabled} />
      <Admin />
    </>
  );
}
