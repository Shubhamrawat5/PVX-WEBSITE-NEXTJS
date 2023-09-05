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
      className="bg-gray-800 border-gray-700 flex  items-center  m-5 p-2 h-36 rounded-lg overflow-hidden"
      key={group.id}
    >
      <div className="overflow-hidden rounded-full">
        <Image
          className="hover:scale-105 transition-all"
          src={group.img}
          alt={group.alt}
          height="128"
          width="128"
        />
      </div>
      <div className="h-full ml-4 flex justify-between items-center flex-col">
        <h3 className="border-b pb-1 text-white my-1">{group.name}</h3>
        <p className="text-sm text-gray-400 mb-9  font-Inter">&#40;{group.desc}&#41;</p>
        {group.link ? (
          <div className="flex items-center justify-between">
            <a
              href={group.link}
              key={group.id}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <p className="px-3 py-1 text-xs text-white bg-indigo-700 rounded-lg hover:bg-blue-800  font-Inter">
                JOIN GROUP
              </p>
            </a>
            <CopyToClipboard
              text={group.link}
              onCopy={(text, result) => {
                checkCopied(text, result, group.id);
              }}
            >
              <div className="invert mx-2 cursor-pointer">
                {group.isCopied ? (
                  <Image src="/static/tick.png" alt="copy" height="20" width="20" />
                ) : (
                  <Image src="/static/copy.png" alt="copy" height="20" width="20" />
                )}
              </div>
            </CopyToClipboard>
          </div>
        ) : (
          <p className="border-gray-500 border-2 text-xs w-full px-2 py-0.5 rounded opacity-70 font-Inter">
            Blocked
          </p>
        )}
      </div>
    </div>
  );
}
