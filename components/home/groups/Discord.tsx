import React, { useState } from "react";
import GroupCard from "./GroupCard";
import { discordGroupsState } from "./GroupsState";

export default function Discord() {
  const discordGroups = discordGroupsState();
  const [groups, setGroups] = useState(discordGroups);

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
