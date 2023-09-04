import React from "react";
import GroupCard from "./GroupCard";
import { facebookGroupsState } from "./GroupsState";
import useGroup from "./hook/useGroup";

export default function Facebook() {
  const facebookGroups = facebookGroupsState();

  const { groups, checkCopied } = useGroup(facebookGroups);

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
