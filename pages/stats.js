import { useState } from "react";
import Stats from "../components/stats/Stats";
import Head from "next/head";

export default function StatsPage() {
  const [gcount, setGcount] = useState([]);
  const [totalMessages, setTotalMessages] = useState(0);

  return (
    <>
      <Head>
        <title>PVX | STATS</title>
      </Head>
      <Stats
        gcount={gcount}
        setGcount={setGcount}
        totalMessages={totalMessages}
        setTotalMessages={setTotalMessages}
      />
    </>
  );
}
