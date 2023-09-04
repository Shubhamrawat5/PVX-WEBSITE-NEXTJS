import React from "react";
import GroupCard from "./GroupCard";
import { discordGroupsState } from "./GroupsState";
import useGroup from "./hook/useGroup";

export default function Discord() {
  const discordGroups = discordGroupsState();

  const { groups, checkCopied } = useGroup(discordGroups);

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
