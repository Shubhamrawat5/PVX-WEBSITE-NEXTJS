import { useState } from "react";
import Head from "next/head";
import Community from "../components/bday/Community";
import BdayStateProvider from "../components/bday/BdayStateProvider";

// import axios from "axios";

// BdaysPage.getInitialProps = async () => {
export const getServerSideProps = async (ctx) => {
  //runs in server side
  // const url = "https://pvx-api-vercel.vercel.app/api/bday";
  // let { data } = await axios.get(url);
  // return { data: data.data };

  const mongoose = require("mongoose");
  const URI = process.env.URI;

  // DB connect
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

  // Collection schema
  const bday_schema = new mongoose.Schema({
    name: String,
    username: String,
    date: Number,
    month: Number,
    year: Number,
    numb: Number,
    place: String,
  });

  const Birthday =
    mongoose.models.birthdays || mongoose.model("birthdays", bday_schema);

  let obj = {};
  const data = await Birthday.find().sort({ date: 1 }); //sort by date

  let arr = [];
  data.forEach((document) => {
    let { name, username, date, month, place } = document;
    arr.push({
      name,
      username,
      date,
      month,
      place,
    });

    // {"data":[{},{},{},{},{}]}
    obj["data"] = arr;
  });

  return { props: { data: obj.data } };
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
