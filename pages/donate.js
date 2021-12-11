import Donate from "../components/donate/Donate";
import Head from "next/head";

import axios from "axios";

DonatePage.getInitialProps = async () => {
  //runs in server side
  const url = "https://pvx-api-vercel.vercel.app/api/donation";
  let { data } = await axios.get(url);

  return { donators: data.data };
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
