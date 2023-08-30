import React from "react";
import Whatsapp from "./Whatsapp";
import Telegram from "./Telegram";
import Discord from "./Discord";
import Facebook from "./Facebook";
import { GroupsProps } from "../../../pages";

export default function Groups(props: GroupsProps) {
  const { groups, isEnabled } = props;

  return (
    <section id="group-section" className="section">
      <h2 className="section-heading">PVX FAMILY GROUPS</h2>
      <Whatsapp groups={groups} isEnabled={isEnabled} />
      <Telegram />
      <Discord />
      <Facebook />
    </section>
  );
}
