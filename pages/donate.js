import { useState } from "react";
import Donate from "../components/donate/Donate";
import Head from "next/head";

export default function DonatePage() {
  const [donators, setdonators] = useState([]);
  const [totalDonation, setTotalDonation] = useState(0);

  return (
    <>
      <Head>
        <title>PVX | DONATE</title>
      </Head>
      <Donate
        donators={donators}
        setdonators={setdonators}
        totalDonation={totalDonation}
        setTotalDonation={setTotalDonation}
      />
    </>
  );
}
