import React from "react";
import { Metadata } from "next";
import Others from "./Others";

export const metadata: Metadata = {
  title: "Events & Bot",
  description:
    "We hold events periodically providing members with opportunities and ample fun. These events foster engagement and strengthen our community bonds. Over time we have held many events, raked some achievements, collected funds for donations, etc.",
  openGraph: {
    title: "PVX | EVENTS",
    description:
      "We hold events periodically providing members with opportunities and ample fun. These events foster engagement and strengthen our community bonds. Over time we have held many events, raked some achievements, collected funds for donations, etc.",
    url: "https://pvxcommunity.com/others",
    images:
      "https://github.com/Shubhamrawat5/PVX_webpage/blob/main/src/asserts/images/main.jpg?raw=true",
    type: "website",
  },
};

export default function OthersPage() {
  return <Others />;
}
