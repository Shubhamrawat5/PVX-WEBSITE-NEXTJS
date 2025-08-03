"use client";

import React from "react";
import GroupCard from "./GroupCard";
import { whatsappGroupsState } from "./GroupsState";
import useGroup from "./hook/useGroup";
import { GroupsProps } from "./Groups";

const stickeronlyImg = "/static/group/stickeronly.jpg";
const jobUpdatesImg = "/static/group/jobupdates.jpg";

export default function WhatsappGroups(props: GroupsProps) {
  const { groupsDB, isEnabled } = props;

  const whatsappGroups = whatsappGroupsState();
  const { groups, checkCopied } = useGroup(whatsappGroups);

  // check if group links are enabled
  if (isEnabled) {
    // groupFromDB = data coming from outside - api
    // groupFromState = data present inside already - wagroups
    whatsappGroups.forEach((groupFromState, index) => {
      groupsDB.forEach((groupFromDB) => {
        if (groupFromDB.groupjid === groupFromState.id) {
          whatsappGroups[index].link = groupFromDB.link;
        }
      });
    });
  }

  const channels = [
    {
      name: "STICKER ONLY CHANNEL",
      id: "0029Vb5pZvjGE56pPGa3Ov2i",
      desc: "JOIN NOW",
      alt: "",
      img: stickeronlyImg,
      link: "https://whatsapp.com/channel/0029Vb5pZvjGE56pPGa3Ov2i",
      isCopied: false,
    },
    {
      name: "JOB UPDATES CHANNEL",
      id: "0029Vb5w1aWJkK7GYtoYde2s",
      desc: "JOIN NOW",
      alt: "",
      img: jobUpdatesImg,
      link: "https://whatsapp.com/channel/0029Vb5w1aWJkK7GYtoYde2s",
      isCopied: false,
    },
  ];

  return (
    <div className="inline-block">
      {!isEnabled && (
        <div className="border mb-4 px-2 py-1 text-sm w-full">
          NOTE: Whatsapp Group Links are currently blocked ! Contact PVX admins.
        </div>
      )}
      <div
        className="
      inline-flex justify-center items-center w-full rounded"
      >
        {channels.map((channel) => (
          <GroupCard group={channel} checkCopied={checkCopied} />
        ))}
      </div>
      <h3 className="text-black bg-white rounded text-lg mx-3 py-1 mt-4  font-Inter font-medium">
        WHATSAPP
      </h3>

      <div className="flex justify-center items-center flex-wrap">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} checkCopied={checkCopied} />
        ))}
      </div>
    </div>
  );
}
