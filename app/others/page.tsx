import React from "react";
import { Metadata } from "next";
import Others from "./Others";

export const metadata: Metadata = {
  title: "PVX | OTHERS",
  openGraph: {
    title: "PVX | OTHERS",
    description:
      "PVX is an active community of friends and easy going people enthusiastically engaged in mutual transaction of ideas spanning over a spectrum of headers ranging from your typical Bakchodi to some serious Crypto and Technology...",
    url: "https://pvxcommunity.com/others",
    images:
      "https://github.com/Shubhamrawat5/PVX_webpage/blob/main/src/asserts/images/main.jpg?raw=true",
    type: "website",
  },
};

export default function OthersPage() {
  return <Others />;
}
