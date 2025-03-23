import React from "react";
import { Metadata } from "next";
import Birthdays from "./Birthdays";
import { getBirthdayData } from "./getBirthdayData";

export interface Bday {
  name: string;
  username: string;
  date: number;
  month: number;
  place: string;
}

export const revalidate = 60; // 1 min

export const metadata: Metadata = {
  title: "Birthdays",
  description:
    "Our community values members' birthdays to make their day special. We collect birthday data voluntarily from members, ensuring everyone's comfort. When birthdays arrive, we celebrate together by sending warm wishes and making their day brighter.",
  openGraph: {
    title: "PVX | BIRTHDAYS",
    description:
      "Our PVX community values members' birthdays to make their day special. We collect birthday data voluntarily from members, ensuring everyone's comfort. When birthdays arrive, we celebrate together by sending warm wishes and making their day brighter.",
    url: "https://pvxcommunity.com/birthdays",
    images:
      "https://github.com/Shubhamrawat5/PVX_webpage/blob/main/src/asserts/images/main.jpg?raw=true",
    type: "website",
  },
};

export default async function BirthdaysPage() {
  const { bdays } = await getBirthdayData();

  return <Birthdays bdays={bdays} />;
}
