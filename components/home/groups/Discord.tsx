import React, { useState } from "react";
import GroupCard from "./GroupCard";

export default function Discord() {
  const [groups, setGroups] = useState([
    {
      name: "COMMUNITY",
      id: "1",
      desc: "Channel",
      alt: "pvx community discord",
      img: "/static/group/discord.jpg",
      link: "https://discord.gg/zMktzNzx9U",
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
    <div className="discord groups">
      <h3 className="app-heading">DISCORD</h3>
      <div className="group-container">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} checkCopied={checkCopied} />
        ))}
      </div>
    </div>
  );
}
