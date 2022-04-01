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
  let dataPVXG, dataPVXT;

  let resultPVXG = await pool.query(
    "SELECT groupname.gname,SUM(countmember.count) as count from countmember INNER JOIN groupname ON countmember.groupjid = groupname.groupjid GROUP BY groupname.gname ORDER BY count DESC;"
  );

  if (resultPVXG.rowCount) {
    dataPVXG = resultPVXG.rows;
  } else {
    dataPVXG = [];
  }

  let resultPVXT = await pool.query(
    "SELECT countmembername.name,countmember.memberJid,sum(countmember.count) as count FROM countmember,countmembername  WHERE countmember.memberjid=countmembername.memberjid GROUP BY countmember.memberjid,countmembername.name ORDER BY count DESC LIMIT 20;"
  );

  if (resultPVXT.rowCount) {
    dataPVXT = resultPVXT.rows;
  } else {
    dataPVXT = [];
  }

  return { props: { dataPVXG, dataPVXT } };
};

export default function StatsPage({ dataPVXG, dataPVXT }) {
  return (
    <>
      <Head>
        <title>PVX | STATS</title>
      </Head>
      <Stats dataPVXG={dataPVXG} dataPVXT={dataPVXT} />
    </>
  );
}
