import React, { useState } from "react";
import GroupCard from "./GroupCard";
import { GroupData } from "./WhatsappGroupState";

export default function Facebook() {
  const fbGroups: GroupData[] = [
    {
      name: "COMMUNITY",
      id: 1,
      desc: "Posting group",
      alt: "pvx community facebook",
      img: "/static/group/fb.jpg",
      link: "https://facebook.com/groups/pvxgaming/",
    },
  ];

  const [copied, setCopied] = useState(new Array(fbGroups.length).fill(false));

  const checkCopied = (text: string, result: boolean, id: number) => {
    if (result) {
      const copiedNew = new Array(fbGroups.length).fill(false);
      copiedNew[id] = true;
      setCopied(copiedNew);
    }
  };

  return (
    <div className="fb groups">
      <h3 className="app-heading">FACEBOOK</h3>
      <div className="group-container">
        {fbGroups.map((group, index) => (
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
