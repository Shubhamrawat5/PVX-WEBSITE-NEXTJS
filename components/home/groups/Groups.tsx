import React from "react";
import Whatsapp from "./Whatsapp";
import Telegram from "./Telegram";
import Discord from "./Discord";
import Facebook from "./Facebook";
import { GroupsProps } from "../../../pages";

export default function Groups(props: GroupsProps) {
  const { groupsDB, isEnabled } = props;

  return (
    <section className="bg-gray-950">
      <h2 className="text-2xl text-red-600 border-red-600 border-2 inline-block rounded px-4 py-2 mb-8 font-bold">
        PVX FAMILY GROUPS
      </h2>
      <Whatsapp groupsDB={groupsDB} isEnabled={isEnabled} />
      <Telegram />
      <Discord />
      <Facebook />
    </section>
  );
}
