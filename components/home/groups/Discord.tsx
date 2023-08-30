import React, { useState } from "react";
import GroupCard from "./GroupCard";
import { GroupData } from "./WhatsappGroupState";

export default function Discord() {
  const discordGroups: GroupData[] = [
    {
      name: "COMMUNITY",
      id: 1,
      desc: "Channel",
      alt: "pvx community discord",
      img: "/static/group/discord.jpg",
      link: "https://discord.gg/zMktzNzx9U",
    },
  ];

  const [copied, setCopied] = useState(
    new Array(discordGroups.length).fill(false)
  );

  const checkCopied = (text: string, result: boolean, id: number) => {
    if (result) {
      const copiedNew = new Array(discordGroups.length).fill(false);
      copiedNew[id] = true;
      setCopied(copiedNew);
    }
  };

  return (
    <div className="discord groups">
      <h3 className="app-heading">DISCORD</h3>
      <div className="group-container">
        {discordGroups.map((group, index) => (
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
