import { useState } from "react";
import Head from "next/head";
import Community from "../components/bday/Community";
import BdayStateProvider from "../components/bday/BdayStateProvider";

import axios from "axios";

BdaysPage.getInitialProps = async () => {
  //runs in server side
  const url = "https://pvx-api-vercel.vercel.app/api/bday";
  let { data } = await axios.get(url);

  return { data: data.data };
};

export default function BdaysPage({ data }) {
  const months = BdayStateProvider();
  let todayBday = "";

  const date = new Date();
  const todayDate = date.getDate();
  const todayMonth = date.getMonth() + 1; //getMonth return 0 to 11

  data.forEach((member) => {
    const { name, username, date, month, place } = member;

    if (todayDate === date && todayMonth === month) {
      console.log(`TODAY IS ${name} Birthday`);
      todayBday += todayBday === "" ? name : " & " + name;
    }

    months[month - 1].members.push({ date, name, username, place });
  });

  return (
    <>
      <Head>
        <title>PVX | BDAYS</title>
      </Head>
      <Community months={months} todayBday={todayBday} />
    </>
  );
}
