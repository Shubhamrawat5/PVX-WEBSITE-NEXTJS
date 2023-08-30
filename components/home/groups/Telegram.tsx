import React, { useState } from "react";
import GroupCard from "./GroupCard";
import { GroupData } from "./WhatsappGroupState";

export default function Telegram() {
  const tgGroups: GroupData[] = [
    {
      name: "COMMUNITY",
      id: 1,
      desc: "Group Chat",
      alt: "pvx community telegram",
      img: "/static/group/tg-pvx.jpg",
      link: "https://t.me/PVX_Community_Group",
    },
    {
      name: "TECH NEWS",
      id: 2,
      desc: "Channel",
      alt: "pvx tech news telegram",
      img: "/static/group/tech.jpg",
      link: "https://t.me/pvxtechnews",
    },
    {
      name: "MOVIES",
      id: 3,
      desc: "Discussion",
      alt: "pvx movies series telegram",
      img: "/static/group/movies.jpg",
      link: "https://t.me/joinchat/J7FzKB1uYt0xNDVl",
    },
    // {
    //   name: "MIRROR",
    //   id: 4,
    //   desc: "Gdrive Uploader",
    //   alt: "pvx mirror drive telegram",
    //   img: "/static/group/mirror.jpg",
    //   link: "https://t.me/PVXMIRROR",
    // },
  ];

  const [copied, setCopied] = useState(new Array(tgGroups.length).fill(false));

  const checkCopied = (text: string, result: boolean, id: number) => {
    if (result) {
      const copiedNew = new Array(tgGroups.length).fill(false);
      copiedNew[id] = true;
      setCopied(copiedNew);
    }
  };

  return (
    <div className="tg groups">
      <h3 className="app-heading">TELEGRAM</h3>

      <div className="group-container">
        {tgGroups.map((group, index) => (
          <GroupCard
            key={group.id}
            group={group}
            isCopied={copied[index]}
            index={index}
            checkCopied={checkCopied}
          />
        ))}
      </div>
    </div>
  );
}
