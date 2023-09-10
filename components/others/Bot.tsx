import React from "react";
import Image from "next/image";

const botImg = "/static/group/bot.jpg";

export default function Bot() {
  const botFeatures = [
    "Commands with admin access include adding & removing members, giving warnings, adding in blacklist and also changing the group settings.",
    "Some of the commands that members can access are sticker maker, insta-youtube video downloader, cricket live scores, group voting, etc.",
    "It also keeps track of various stats like the number of messages each member has sent in various PVX groups, the most active group the list of inactive members etc.",
    "It posts daily news in Tech and Study groups and also greets new members with a welcome message whenever they join any of the PVX groups.",
    "It automatically bans any user with a non-Indian number (any number without +91 code).",
    "It also forwards every sticker that is sent to any of the PVX groups to another group i.e. Sticker Only, where members can have access to different different types of stickers.",
  ];

  return (
    <section className="bg-gradient-to-r from-gray-950 to-gray-900">
      <h2 className="section-heading">PVX BOT</h2>
      <div className="font-Inter">
        <h3 className="">
          PVX Bot is a whatsapp bot for all PVX groups that has a variety of
          commands with different functionalies.
        </h3>
        <br />
        <br />
        <Image
          className="m-auto"
          src={botImg}
          alt="pvx bot"
          height="200"
          width="200"
        />
        <div className="my-4">
          <a
            className="text-indigo-400"
            href="https://github.com/Shubhamrawat5/whatsapp-bot-md"
          >
            [ GITHUB SOURCE CODE ]
          </a>
        </div>
        <ol className="text-left m-auto max-w-3xl p-4 pl-6 text-gray-200">
          {botFeatures.map((feature) => (
            <li
              className="list-decimal text-justify text-sm my-2"
              key={feature}
            >
              {feature}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
