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

export const revalidate = 600; // 10 min

export const metadata: Metadata = {
  title: "PVX | B'DAYS",
  openGraph: {
    title: "PVX | B'DAYS",
    description:
      "PVX is an active community of friends and easy going people enthusiastically engaged in mutual transaction of ideas spanning over a spectrum of headers ranging from your typical Bakchodi to some serious Crypto and Technology...",
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
