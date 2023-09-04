import React from "react";
import GroupCard from "./GroupCard";
import { telegramGroupsState } from "./GroupsState";
import useGroup from "./hook/useGroup";

export default function Telegram() {
  const telegramGroups = telegramGroupsState();
  const { groups, checkCopied } = useGroup(telegramGroups);

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
