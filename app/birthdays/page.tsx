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
};

export default async function BirthdaysPage() {
  const { bdays } = await getBirthdayData();

  return <Birthdays bdays={bdays} />;
}
