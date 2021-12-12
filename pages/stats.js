import Stats from "../components/stats/Stats";
import Head from "next/head";
// import axios from "axios";

// StatsPage.getInitialProps = async () => {
export const getServerSideProps = async (ctx) => {
  //runs in server side
  // const url = "https://pvx-api-vercel.vercel.app/api/gcount";
  // let { data } = await axios.get(url);
  // return { gcount: data.data };

  const { Pool } = require("pg");

  const proConfig = {
    connectionString: process.env.HEROKU_PG,
    ssl: {
      rejectUnauthorized: false,
    },
  };

  const pool = new Pool(proConfig);

  let result = await pool.query(
    "SELECT groupname.gname,SUM(countmember.count) as count from countmember INNER JOIN groupname ON countmember.groupjid = groupname.groupjid GROUP BY groupname.gname ORDER BY count DESC;"
  );
  let resultObj = {};
  if (result.rowCount) {
    resultObj.data = result.rows;
  } else {
    resultObj.data = [];
  }
  return { props: { gcount: resultObj.data } };
};

export default function StatsPage({ gcount }) {
  let key = process.env.SOMEKEY;
  console.log("KEY", key);
  return (
    <>
      <Head>
        <title>PVX | STATS</title>
      </Head>
      <Stats gcount={gcount} />
    </>
  );
}
