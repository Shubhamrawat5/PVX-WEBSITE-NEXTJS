import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
/* ------------------------------------ - ----------------------------------- */
import Header from "../components/home/Header";
import Drive from "../components/home/Drive";
import Admin from "../components/home/Admin";
import Others from "../components/home/Others";
import Groups from "../components/home/groups/Groups";

import GroupStateProvider from "../components/home/groups/GroupStateProvider";

// import axios from "axios";

// HomePage.getInitialProps = async () => {
export const getServerSideProps = async (ctx) => {
  //runs in server side
  // const url = "https://pvx-api-vercel.vercel.app/api/links";
  // let { data } = await axios.get(url);
  // return { data: data };
  const mongoose = require("mongoose");
  const URI = process.env.URI;

  // DB connect
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

  // Collection schema
  const groupLink_schema = new mongoose.Schema({
    name: String,
    link: String,
  });

  const GroupLink =
    mongoose.models.grouplinks ||
    mongoose.model("grouplinks", groupLink_schema);

  const data = await GroupLink.find().sort({ name: 1 });

  let index = data.findIndex((d) => d.name === "website");
  if (data[index]["link"] === "0") {
    //close all links
    for (let i = 0; i < data.length; ++i) data[i]["link"] = "";
  }

  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};

export default function HomePage({ data }) {
  let wagroups = GroupStateProvider();

  let isBlocked = false;
  //check if links are blocked
  data.forEach((grp) => {
    if (grp.name === "website" && grp.link === "") isBlocked = true;
  });

  //if not blocked the attach links
  if (!isBlocked) {
    //grpExt = data coming from outside - api
    //grpIn = data present inside already
    wagroups.forEach((grpIn, index) => {
      data.forEach((grpOut) => {
        if (grpOut.name.toLowerCase() === grpIn.name.toLowerCase()) {
          wagroups[index].url = grpOut.link;
        }
      });
    });
  }

  return (
    <>
      <Head>
        <title>PVX | HOME</title>
      </Head>
      <Header />
      <Groups wagroups={wagroups} isBlocked={isBlocked} />
      <Drive />
      <Others />
      <Admin />
    </>
  );
}
