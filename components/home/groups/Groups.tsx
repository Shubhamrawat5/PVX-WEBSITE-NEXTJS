import React from "react";
import Whatsapp from "./Whatsapp";
import Telegram from "./Telegram";
import OtherGroups from "./OtherGroups";
import { Group } from "../../../pages";

export default function Groups(props: { groups: Group[]; isEnabled: boolean }) {
  const { groups, isEnabled } = props;

  return (
    <section id="group-section" className="section">
      <h2 className="section-heading">PVX FAMILY GROUPS</h2>
      <Whatsapp groups={groups} isEnabled={isEnabled} />
      <Telegram />
      <OtherGroups />
    </section>
  );
}
