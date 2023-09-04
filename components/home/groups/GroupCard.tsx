import React from "react";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import { GroupData } from "./GroupsState";

interface GroupCardProps {
  group: GroupData;
  // eslint-disable-next-line no-unused-vars
  checkCopied: (text: string, result: boolean, id: string) => void;
}

export default function GroupCard(props: GroupCardProps) {
  const { group, checkCopied } = props;
  return (
    <div
      className="bg-gray-800 border-gray-700 flex flex-col items-center justify-between m-5 p-2 w-56 h-64 rounded-lg overflow-hidden"
      key={group.id}
    >
      <h4 className="border-b w-full pb-1 font-mediumtext-white">
        {group.name}
      </h4>
      <p className="text-sm text-gray-400">&#40;{group.desc}&#41;</p>
      <div className="relative overflow-hidden h-36 w-36 rounded-full">
        <Image src={group.img} alt={group.alt} fill />
      </div>
      {group.link ? (
        <div className="flex items-center justify-between w-full">
          <a
            href={group.link}
            key={group.id}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <p className="px-3 py-1 w-full text-sm text-white bg-indigo-700 rounded-lg hover:bg-blue-800">
              JOIN GROUP
            </p>
          </a>
          <CopyToClipboard
            text={group.link}
            onCopy={(text, result) => {
              checkCopied(text, result, group.id);
            }}
          >
            <div className="w-5 h-5 invert mx-2 cursor-pointer">
              {group.isCopied ? (
                <Image src="/static/tick.png" alt="copy" fill />
              ) : (
                <Image src="/static/copy.png" alt="copy" fill />
              )}
            </div>
          </CopyToClipboard>
        </div>
      ) : (
        <p className="border-gray-500 border-2 text-sm w-full px-2 py-0.5 rounded opacity-70">
          Blocked
        </p>
      )}
    </div>
  );
}
