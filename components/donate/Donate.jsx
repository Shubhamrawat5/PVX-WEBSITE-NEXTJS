import React from "react";
import { useEffect, useState, useRef } from "react";
// import axios from "axios";
import Image from "next/image";

export default function Donate(props) {
  const isUnmounted = useRef(false);
  const { donators, setdonators, totalDonation, setTotalDonation } = props;
  const [donatorsInfo, setdonatorsInfo] = useState("");

  // useEffect(() => {
  //   if (isUnmounted.current) return;
  //   if (donators.length !== 0) return; //to avoid reattaching donators

  //   setdonatorsInfo("Adding donator data... please wait.");
  //   const url = "https://pvxgroup.herokuapp.com/api/donation";
  //   const urlBackup = "https://pvxgroupbackup.herokuapp.com/api/donation";

  //   function setDonatorsList({ data }) {
  //     if (isUnmounted.current) return;
  //     let total = 0;
  //     data.sort((x, y) => y.amount - x.amount);
  //     setdonators(data);
  //     data.forEach((ele) => {
  //       total += ele.amount;
  //     });
  //     setTotalDonation(total);
  //   }

  //   async function tryWithUrl(url) {
  //     // try {
  //     let { data } = await axios.get(url);
  //     setDonatorsList(data);

  //     setdonatorsInfo("Donators data added!");
  //     setTimeout(() => {
  //       setdonatorsInfo("");
  //       return true;
  //     }, 2000);
  //   }

  //   async function start() {
  //     let response = await tryWithUrl(url);
  //     if (response === false) {
  //       //error in main url, now trying backup url
  //       console.log("Error in main url.. trying backup url.");
  //       setdonatorsInfo("Problem with main url.. trying backup url.");
  //       let response = await tryWithUrl(urlBackup);
  //       if (response === false) {
  //         setdonatorsInfo(
  //           "NOTE: There is a problem with attaching the donators data ! Contact PVX admins."
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
      <h2 className="section-heading">DONATE</h2>

      <p className="subheading-p">
        Help PVX COMMUNITY to grow and provide good stuff for all members.
      </p>

      <p>
        <em>Any amount is appreciated</em>
      </p>

      <div className="drive-container">
        <p className="donation-text subheading-p">
          <span className="step">
            1) Scan the given qr code or donate at
            &quot;shubhamraw123@okhdfcbank&quot; this VPA using your favourite
            payments app.
            <br />
          </span>
          <span className="step">
            2) Take a screenshot and send it to us&nbsp;
            <a
              href="https://wa.me/919557666582"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            &nbsp;with your name.
            <br />
          </span>
          <span className="step">
            3) You&apos;ll be listed on community bot, website and other apps as
            donor 💰
          </span>
          <br />
        </p>

        <Image
          className="qr-img"
          src="/static/pvx_qr.png"
          alt="pvx-qr"
          height="250"
          width="250"
        />
      </div>

      <br />

      <p className="subheading-p">
        Donations are ✅ transparently used to build tools, 🌐 buy domain, 🤖
        bots and much more ❤️
      </p>

      {donatorsInfo ? (
        <div id="err" className="err">
          {donatorsInfo}
        </div>
      ) : null}

      {donators.length !== 0 ? (
        <>
          <h2 className="donators-subheading">
            <span>TOTAL DONATIONS:</span>
            <span>{"₹ " + totalDonation.toLocaleString("en-IN")}</span>
          </h2>
          <table className="donators-table">
            <tbody>
              {donators.map((mem, index) => (
                <tr key={index}>
                  <td className="donator-name">{mem.name}</td>
                  <td className="donator-amount">{"₹ " + mem.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}

      <div className="achieve-box donation">
        <Image
          src="/static/pvx/certi.jpg"
          alt="certificate"
          height="400"
          width="570"
        />
        <p className="subheading-p">Donations collected by PVX in Feb 2020</p>
      </div>
    </section>
  );
}
