import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
import Whatsapp from "./Whatsapp";
import Telegram from "./Telegram";
import OtherGroups from "./OtherGroups";

export default function Group(props) {
  const { wagroups, setWagroups } = props;
  const isUnmounted = useRef(false);

  const [linksInfo, setlinksInfo] = useState("");

  // useEffect(() => {
  //   if (isUnmounted.current) return;

  //   //TODO: fix this if
  //   // "" empty url when url is blocked | "https://" when url is not set
  //   if (wagroups[1].url !== "https://") return; //to avoid reattaching group links when internal page change

  //   setlinksInfo("Adding group links data... please wait.");
  //   const url = "https://pvxgroup.herokuapp.com/api/links";
  //   const urlBackup = "https://pvxgroupbackup.herokuapp.com/api/links";

  //   function setGroupLinks(data) {
  //     let newState = [];

  //     //check if group links are blocked or not
  //     let isBlocked = false;
  //     data.forEach((grp) => {
  //       if (grp.name === "website" && grp.link === "") isBlocked = true;
  //     });
  //     if (isBlocked) return true;

  //     //grpExt = coming from outside - api
  //     //grpIn = present inside already
  //     wagroups.forEach((grpIn) => {
  //       data.forEach((grpOut) => {
  //         if (grpOut.name === grpIn.name.toLowerCase()) {
  //           newState.push({
  //             ...grpIn,
  //             url: grpOut.link,
  //           });
  //         }
  //       });
  //     });
  //     if (!isUnmounted.current) setWagroups(newState);

  //     return false;
  //   }

  //   async function tryWithUrl(url) {
  //     try {
  //       let { data } = await axios.get(url);
  //       let blocked = setGroupLinks(data);
  //       if (blocked) {
  //         setlinksInfo(
  //           "NOTE: Whatsapp Group Links are currently blocked ! Contact PVX admins."
  //         );
  //         return true;
  //       }
  //       setlinksInfo("Group links added!");
  //       setTimeout(() => {
  //         setlinksInfo("");
  //         return true;
  //       }, 2000);
  //     } catch {
  //       return false;
  //     }
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
  //           "NOTE: There is a problem with attaching the group links ! Contact PVX admins."
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

  //TODO: fix https a tag when links are not added

  return (
    <section id="group-section" className="section">
      <h2 className="section-heading">PVX FAMILY GROUPS</h2>
      {linksInfo ? (
        <div id="err" className="err">
          {linksInfo}
        </div>
      ) : null}
      <Whatsapp wagroups={wagroups} />
      <Telegram />
      <OtherGroups />
    </section>
  );
}
