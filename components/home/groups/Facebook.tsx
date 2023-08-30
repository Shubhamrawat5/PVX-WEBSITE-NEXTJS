import React, { useState } from "react";
import GroupCard from "./GroupCard";

export default function Facebook() {
  const [groups, setGroups] = useState([
    {
      name: "COMMUNITY",
      id: "1",
      desc: "Posting group",
      alt: "pvx community facebook",
      img: "/static/group/fb.jpg",
      link: "https://facebook.com/groups/pvxgaming/",
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
    <div className="fb groups">
      <h3 className="app-heading">FACEBOOK</h3>
      <div className="group-container">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} checkCopied={checkCopied} />
        ))}
      </div>
    </div>
  );
}
