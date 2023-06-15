import React from "react";
import Head from "next/head";
import mongoose from "mongoose";
import PropTypes from "prop-types";

import Donate from "../components/donate/Donate";

// import axios from "axios";

// DonatePage.getInitialProps = async () => {
export const getServerSideProps = async () => {
  // runs in server side
  // const url = "https://pvx-api-vercel.vercel.app/api/donation";
  // let { data } = await axios.get(url);
  // return { donators: data.data };

  const { URI } = process.env;

  // DB connect
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

  // Collection schema
  const donationSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    numb: Number,
  });

  const Donation =
    mongoose.models.donations || mongoose.model("donations", donationSchema);

  const obj = {};
  const data = await Donation.find().sort({ amount: -1 });

  const arr = [];
  data.forEach((document) => {
    const { name, amount } = document;
    arr.push({
      name,
      amount,
    });

    // {"data":[{},{},{},{},{}]}
    obj.data = arr;
  });
  return { props: { donators: obj.data } };
};

export default function DonatePage({ donators }) {
  return (
    <>
      <Head>
        <title>PVX | DONATE</title>
      </Head>
      <Donate donators={donators} />
    </>
  );
}

DonatePage.propTypes = {
  donators: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
