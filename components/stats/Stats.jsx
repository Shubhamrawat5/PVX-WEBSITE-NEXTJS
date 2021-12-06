import { useEffect, useState, useRef } from "react";
// import axios from "axios";

export default function Stats(props) {
  const isUnmounted = useRef(false);
  const { gcount, setGcount, totalMessages, setTotalMessages } = props;
  const [gcountInfo, setGcountInfo] = useState("");

  // useEffect(() => {
  //   if (isUnmounted.current) return;
  //   if (gcount.length !== 0) return; //to avoid reattaching gcount

  //   setGcountInfo("Adding count data... please wait.");
  //   const url = "https://pvxgroup.herokuapp.com/api/gcount";
  //   const urlBackup = "https://pvxgroupbackup.herokuapp.com/api/gcount";

  //   function setGcountList({ data }) {
  //     if (isUnmounted.current) return;
  //     let total = 0;
  //     setGcount(data);
  //     data.forEach((ele) => {
  //       total += Number(ele.count);
  //     });
  //     setTotalMessages(total);
  //   }

  //   async function tryWithUrl(url) {
  //     // try {
  //     let { data } = await axios.get(url);
  //     setGcountList(data);

  //     setGcountInfo("Count data added!");
  //     setTimeout(() => {
  //       setGcountInfo("");
  //       return true;
  //     }, 2000);
  //   }

  //   async function start() {
  //     let response = await tryWithUrl(url);
  //     if (response === false) {
  //       //error in main url, now trying backup url
  //       console.log("Error in main url.. trying backup url.");
  //       setGcountInfo("Problem with main url.. trying backup url.");
  //       let response = await tryWithUrl(urlBackup);
  //       if (response === false) {
  //         setGcountInfo(
  //           "NOTE: There is a problem with attaching the gcount data ! Contact PVX admins."
  //         );
  //       }
  //     }
  //   }

  //   start();
  //   return () => {
  //     isUnmounted.current = true;
  //   };
  //   //TODO: fix this eslint warning
  //   // eslint-disable-next-line
  // }, []);

  return (
    <section id="achieve-section" className="section donation-section">
      <h2 className="section-heading">PVX GROUPS STATS</h2>

      <p className="subheading-p">ALL WHATSAPP PVX GROUPS MESSAGES STATS</p>
      <p className="subheading-p">FROM 24 NOV 2021</p>
      <p className="subheading-p">
        Stats are not 100% correct as pvx bot in whatsapp collect the message
        count and sometimes the bot is down then all the messsages during bot
        down time gets ignored and are not counted.
      </p>

      {gcountInfo ? (
        <div id="err" className="err">
          {gcountInfo}
        </div>
      ) : null}

      {gcount.length !== 0 ? (
        <>
          <h2 className="donators-subheading">
            <span>TOTAL MESSAGES: </span>
            <span>{totalMessages.toLocaleString("en-IN")}</span>
          </h2>
          <table className="donators-table">
            <tbody>
              {gcount.map((grp, index) => (
                <tr key={index}>
                  <td className="donator-name">{grp.gname.slice(8)}</td>
                  <td className="donator-amount">{grp.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
    </section>
  );
}
