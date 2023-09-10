import React from "react";
import GroupCard from "./GroupCard";
import { telegramGroupsState } from "./GroupsState";
import useGroup from "./hook/useGroup";

export default function Telegram() {
  const telegramGroups = telegramGroupsState();
  const { groups, checkCopied } = useGroup(telegramGroups);

  return (
    <div className="inline-block">
      <h3 className="text-black bg-white rounded text-lg mx-3 py-1 mt-4  font-Inter font-medium">
        TELEGRAM
      </h3>
      <div className="flex justify-center items-center flex-wrap">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} checkCopied={checkCopied} />
        ))}
      </div>
    </div>
  );
}
