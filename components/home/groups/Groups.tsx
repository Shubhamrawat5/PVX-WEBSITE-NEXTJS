import React from "react";
import Whatsapp from "./Whatsapp";
import Telegram from "./Telegram";
import Discord from "./Discord";
import Facebook from "./Facebook";
import { GroupsProps } from "../../../pages";

export default function Groups(props: GroupsProps) {
  const { groupsDB, isEnabled } = props;

  return (
    <section>
      <h2 className="text-2xl text-blue-600 border-blue-600 border-2 inline-block rounded px-4 py-2 mb-8">
        PVX FAMILY GROUPS
      </h2>
      <Whatsapp groupsDB={groupsDB} isEnabled={isEnabled} />
      <Telegram />
      <Discord />
      <Facebook />
    </section>
  );
}
