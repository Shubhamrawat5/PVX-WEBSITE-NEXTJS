import React, { useState } from "react";
import GroupCard from "./GroupCard";
import { telegramGroupsState } from "./GroupsState";

export default function Telegram() {
  const telegramGroups = telegramGroupsState();
  const [groups, setGroups] = useState(telegramGroups);

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
