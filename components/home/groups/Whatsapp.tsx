import React, { useState } from "react";
import { GroupsProps } from "../../../pages";
import GroupCard from "./GroupCard";
import { whatsappGroupsState } from "./GroupsState";

export default function WhatsappGroups(props: GroupsProps) {
  const { groupsDB, isEnabled } = props;

  const whatsappGroups = whatsappGroupsState();
  const [groups, setGroups] = useState(whatsappGroups);

  // TODO: RUNS EVERYTIME, USE USEEFFECT
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
    <div className="wa groups">
      {!isEnabled && (
        <div id="err" className="err">
          NOTE: Whatsapp Group Links are currently blocked ! Contact PVX admins.
        </div>
      )}
      <h3 className="app-heading">WHATSAPP</h3>
      <div className="group-container">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} checkCopied={checkCopied} />
        ))}
      </div>
    </div>
  );
}
