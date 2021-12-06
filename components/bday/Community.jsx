// import "../asserts/css/community.css";
import { useEffect, useState, useRef } from "react";
// import axios from "axios";
import Month from "./Month";

export default function Community(props) {
  const { months, setMonths } = props;
  const { todayBday, setTodayBday } = props;
  const isUnmounted = useRef(false);

  // const [didUnMount, setDidUnMount] = useState(false); //to check if component is unmounted or not!
  const [linksInfo, setlinksInfo] = useState("");

  // useEffect(() => {
  //   if (isUnmounted.current) return;
  //   //TODO: FIX THIS IF
  //   if (months[0].members.length !== 0) return; //already attached bdays!

  //   setlinksInfo("Adding Bday data... please wait.");
  //   const url = "https://pvxgroup.herokuapp.com/api/bday";
  //   const urlBackup = "https://pvxgroupbackup.herokuapp.com/api/bday";

  //   function setBdays({ data }) {
  //     //get today date & month
  //     const d = new Date();
  //     const todayDate = d.getDate();
  //     const todayMonth = d.getMonth() + 1; //0 to 11

  //     let newState = months;
  //     let todayBdayTemp = "";

  //     data.forEach((member) => {
  //       const { name, username, date, month, place } = member;

  //       //TODO: TESTING TODAY BDAY
  //       if (todayDate === date && todayMonth === month) {
  //         console.log(`TODAY IS ${name} Birthday`);
  //         todayBdayTemp += todayBdayTemp === "" ? name : " & " + name;
  //       }

  //       newState[month - 1].members.push({ date, name, username, place });
  //     });

  //     if (isUnmounted.current) return;
  //     setTodayBday(todayBdayTemp);
  //     setMonths(newState);
  //   }

  //   async function tryWithUrl(url) {
  //     // try {
  //     let { data } = await axios.get(url);
  //     setBdays(data);

  //     setlinksInfo("Bday data added!");
  //     setTimeout(() => {
  //       setlinksInfo("");
  //       return true;
  //     }, 2000);
  //   }

  //   async function start() {
  //     let response = await tryWithUrl(url);
  //     if (response === false) {
  //       //error in main url, now trying backup url
  //       console.log("Error in main url.. trying backup url.");
  //       setlinksInfo("Problem with main url.. trying backup url.");
  //       let response = await tryWithUrl(urlBackup);
  //       if (response === false) {
  //         setlinksInfo(
  //           "NOTE: There is a problem with attaching the bday data ! Contact PVX admins."
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
    <section id="birthday_b">
      <h2 className="bday-header_b">
        &lt;&#123;PVX&#125;&gt; COMMUNITY
        <br />
        <u> Birthday List</u>
      </h2>
      {todayBday !== "" ? (
        <div className="wish_b">
          <div className="gif_b"></div>
          <div className="today-bday-text_b">
            <h6 className="happy-birthday_b">Happy Birthday</h6>
            <h6 className="bdy-boy_b">{todayBday}</h6>
          </div>
          <img
            src="./static/balloon.png"
            className="balloon_b"
            alt="balloon"
          ></img>
          <img
            src="./static/balloon.png"
            className="balloon_b balloon2_b"
            alt="balloon"
          ></img>
        </div>
      ) : null}
      <div className="months-container_b">
        {linksInfo ? (
          <div id="err" className="err" style={{ border: "1px solid black" }}>
            {linksInfo}
          </div>
        ) : null}

        {months.map((month, index) => {
          return <Month month={month} index={index} key={index} />;
        })}
      </div>
    </section>
  );
}
