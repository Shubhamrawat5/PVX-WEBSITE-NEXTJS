import React from "react";
import PropTypes from "prop-types";
import mongoose from "mongoose";
import Head from "next/head";
import Bdays from "../components/bday/Bdays";
import BdayStateProvider from "../components/bday/BdayStateProvider";

// import axios from "axios";

// BdaysPage.getInitialProps = async () => {
export const getServerSideProps = async () => {
  // runs in server side
  // const url = "https://pvx-api-vercel.vercel.app/api/bday";
  // let { data } = await axios.get(url);
  // return { data: data.data };

  const { URI } = process.env;
  // TODO: use elephant sql
  // DB connect
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

  // Collection schema
  const bdaySchema = new mongoose.Schema({
    name: String,
    username: String,
    date: Number,
    month: Number,
    year: Number,
    numb: Number,
    place: String,
  });

  const Birthday =
    mongoose.models.birthdays || mongoose.model("birthdays", bdaySchema);

  const obj = {};
  const data = await Birthday.find().sort({ date: 1 }); // sort by date

  const arr = [];
  data.forEach((document) => {
    const { name, username, date, month, place } = document;
    arr.push({
      name,
      username,
      date,
      month,
      place,
    });

    // {"data":[{},{},{},{},{}]}
    obj.data = arr;
  });

  return { props: { data: obj.data } };
};

export default function BdaysPage({ data }) {
  const months = BdayStateProvider();
  let todayBday = "";

  const dateNew = new Date();
  const todayDate = dateNew.getDate();
  const todayMonth = dateNew.getMonth() + 1; // getMonth return 0 to 11

  data.forEach((member) => {
    const { name, username, date, month, place } = member;

    if (todayDate === date && todayMonth === month) {
      // console.log(`TODAY IS ${name} Birthday`);
      todayBday += todayBday === "" ? name : ` & ${name}`;
    }

    months[month - 1].members.push({ date, name, username, place });
  });

  return (
    <>
      <Head>
        <title>PVX | BDAYS</title>
      </Head>
      <Bdays months={months} todayBday={todayBday} />
    </>
  );
}

BdaysPage.propTypes = {
  data: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
      place: PropTypes.string.isRequired,
    })
  ).isRequired,
};
