import Donate from "../components/donate/Donate";
import Head from "next/head";

// import axios from "axios";

// DonatePage.getInitialProps = async () => {
export const getServerSideProps = async (ctx) => {
  //runs in server side
  // const url = "https://pvx-api-vercel.vercel.app/api/donation";
  // let { data } = await axios.get(url);
  // return { donators: data.data };

  const mongoose = require("mongoose");
  const URI = process.env.URI;

  // DB connect
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

  // Collection schema
  const donation_schema = new mongoose.Schema({
    name: String,
    amount: Number,
    numb: Number,
  });

  const Donation =
    mongoose.models.donations || mongoose.model("donations", donation_schema);

  let obj = {};
  const data = await Donation.find().sort({ amount: -1 });

  let arr = [];
  data.forEach((document) => {
    let { name, amount } = document;
    arr.push({
      name,
      amount,
    });

    // {"data":[{},{},{},{},{}]}
    obj["data"] = arr;
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
