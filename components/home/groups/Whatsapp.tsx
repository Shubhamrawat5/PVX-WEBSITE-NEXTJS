import React, { useState } from "react";
import { GroupsProps } from "../../../pages";
import WhatsappGroupState from "./WhatsappGroupState";
import GroupCard from "./GroupCard";

export default function WhatsappGroups(props: GroupsProps) {
  const { groups, isEnabled } = props;

  const whatsappGroups = WhatsappGroupState();

  // check if group links are enabled
  if (isEnabled) {
    // groupFromDB = data coming from outside - api
    // groupFromState = data present inside already - wagroups
    whatsappGroups.forEach((groupFromState, index) => {
      groups.forEach((groupFromDB) => {
        if (groupFromDB.groupjid === groupFromState.id) {
          whatsappGroups[index].link = groupFromDB.link;
        }
      });
    });
  }

  const [copied, setCopied] = useState(
    new Array(whatsappGroups.length).fill(false)
  );

  const checkCopied = (text: string, result: boolean, index: number) => {
    if (result) {
      const copiedNew = new Array(whatsappGroups.length).fill(false);
      copiedNew[index] = true;
      setCopied(copiedNew);
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
        {whatsappGroups.map((group, index) => (
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
