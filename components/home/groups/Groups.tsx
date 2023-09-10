import React from "react";
import Whatsapp from "./Whatsapp";
import Telegram from "./Telegram";
import Discord from "./Discord";
import Facebook from "./Facebook";
import { GroupsProps } from "../../../pages";

export default function Groups(props: GroupsProps) {
  const { groupsDB, isEnabled } = props;

  return (
    <section className=" bg-gradient-to-r from-neutral-950 to-neutral-900">
      <h2 className="section-heading">PVX FAMILY GROUPS</h2>
      <Whatsapp groupsDB={groupsDB} isEnabled={isEnabled} />
      <Telegram />
      <Discord />
      <Facebook />
    </section>
  );
}
