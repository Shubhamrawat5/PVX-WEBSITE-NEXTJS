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

import axios from "axios";

HomePage.getInitialProps = async () => {
  //runs in server side
  const url = "https://pvx-api-vercel.vercel.app/api/links";
  let { data } = await axios.get(url);

  return { data: data };
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
