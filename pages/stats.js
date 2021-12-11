import Stats from "../components/stats/Stats";
import Head from "next/head";
import axios from "axios";

StatsPage.getInitialProps = async () => {
  //runs in server side
  const url = "https://pvx-api-vercel.vercel.app/api/gcount";
  let { data } = await axios.get(url);

  return { gcount: data.data };
};

export default function StatsPage({ gcount }) {
  return (
    <>
      <Head>
        <title>PVX | STATS</title>
      </Head>
      <Stats gcount={gcount} />
    </>
  );
}
