import React from "react";
import { GroupsProps } from "../../../pages";
import GroupCard from "./GroupCard";
import { whatsappGroupsState } from "./GroupsState";
import useGroup from "./hook/useGroup";

export default function WhatsappGroups(props: GroupsProps) {
  const { groupsDB, isEnabled } = props;

  const whatsappGroups = whatsappGroupsState();
  const { groups, checkCopied } = useGroup(whatsappGroups);

  // check if group links are enabled
  if (isEnabled) {
    // groupFromDB = data coming from outside - api
    // groupFromState = data present inside already - wagroups
    whatsappGroups.forEach((groupFromState, index) => {
      groupsDB.forEach((groupFromDB) => {
        if (groupFromDB.groupjid === groupFromState.id) {
          whatsappGroups[index].link = groupFromDB.link;
        }
      });
    });
  }

  return (
    <div className="inline-block">
      {!isEnabled && (
        <div className="border mb-4 px-2 py-1 text-sm w-ful">
          NOTE: Whatsapp Group Links are currently blocked ! Contact PVX admins.
        </div>
      )}
      <h3 className="text-black bg-white rounded text-lg w-11/12 m-auto">
        WHATSAPP
      </h3>
      <div className="flex justify-center items-center flex-wrap">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} checkCopied={checkCopied} />
        ))}
      </div>
    </div>
  );
}
