import React, { useState } from "react";
import GroupCard from "./GroupCard";

export default function Telegram() {
  const [groups, setGroups] = useState([
    {
      name: "COMMUNITY",
      id: "1",
      desc: "Group Chat",
      alt: "pvx community telegram",
      img: "/static/group/tg-pvx.jpg",
      link: "https://t.me/PVX_Community_Group",
      isCopied: false,
    },
    {
      name: "TECH NEWS",
      id: "2",
      desc: "Channel",
      alt: "pvx tech news telegram",
      img: "/static/group/tech.jpg",
      link: "https://t.me/pvxtechnews",
      isCopied: false,
    },
    {
      name: "MOVIES",
      id: "3",
      desc: "Discussion",
      alt: "pvx movies series telegram",
      img: "/static/group/movies.jpg",
      link: "https://t.me/joinchat/J7FzKB1uYt0xNDVl",
      isCopied: false,
    },
  ]);

  const checkCopied = (text: string, result: boolean, id: string) => {
    if (result) {
      const groupsNew = groups.map((group) => {
        if (group.id === id) {
          group.isCopied = true;
        } else {
          group.isCopied = false;
        }

        return group;
      });

      setGroups(groupsNew);
    }
  };

  return (
    <div className="tg groups">
      <h3 className="app-heading">TELEGRAM</h3>

      <div className="group-container">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} checkCopied={checkCopied} />
        ))}
      </div>
    </div>
  );
}
