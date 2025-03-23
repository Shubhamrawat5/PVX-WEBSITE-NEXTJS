import React from "react";
import { Metadata } from "next";

import Admin from "./Admin";
import Groups from "./groups/Groups";
import Header from "./Header";
import { getGroupData } from "./groups/getGroupData";
import Counter from "./Counter";
import Quote from "./quote/Quote";
import getQuote from "./quote/getQuote";

export interface GroupDB {
  groupjid: string;
  gname: string;
  link: string;
}

// WORKING HERE ONLY INSIDE PAGES
export const revalidate = 60; // 1 min

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const { groupsDB, isEnabled } = await getGroupData();
  const quote = await getQuote();

  return (
    <>
      <Header />
      <Counter />
      <Quote quote={quote} />
      <Groups groupsDB={groupsDB} isEnabled={isEnabled} />
      <Admin />
    </>
  );
}
