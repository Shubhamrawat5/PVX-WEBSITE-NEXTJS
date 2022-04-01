import Others from "../components/others/Others";
import Head from "next/head";

export default function StatsPage({ dataPVXG, dataPVXT }) {
  return (
    <>
      <Head>
        <title>PVX | OTHERS</title>
      </Head>
      <Others />
    </>
  );
}
