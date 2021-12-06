import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
/* ------------------------------------ - ----------------------------------- */
import Header from "../components/home/Header";
import Drive from "../components/home/Drive";
import Admin from "../components/home/Admin";
import Others from "../components/home/Others";
import Group from "../components/home/group/Group";

import GroupStateProvider from "../components/home/group/GroupStateProvider";
import { useState } from "react";

export default function HomePage() {
  const [wagroups, setWagroups] = useState(GroupStateProvider());
  return (
    <>
      <Head>
        <title>PVX | HOME</title>
      </Head>
      <Header />
      <Group wagroups={wagroups} setWagroups={setWagroups} />
      <Drive />
      <Others />
      <Admin />
    </>
  );
}
