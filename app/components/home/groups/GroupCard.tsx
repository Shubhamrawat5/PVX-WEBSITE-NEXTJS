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
      className="bg-gray-800 border-gray-700 flex flex-col sm:flex-row items-center mx-2 mt-4 md:m-4 p-2 md:h-36 rounded-lg overflow-hidden"
      key={group.id}
    >
      <div className="overflow-hidden rounded-full">
        <Image
          className="hover:scale-105 transition-all w-24 h-24 md:w-32 md:h-32"
          src={group.img}
          alt={group.alt}
          height="128"
          width="128"
        />
      </div>
      <div className="h-full md:ml-4 flex justify-between items-center flex-col">
        <h3 className="border-b pb-1 text-white my-1 text-sm md:text-base">
          {group.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-400 mb-2 sm:mb-9 font-Inter">
          &#40;{group.desc}&#41;
        </p>
        {group.link ? (
          <div className="flex items-center justify-between">
            <a
              href={group.link}
              key={group.id}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <p className="px-3 py-1 text-xs text-white bg-indigo-700 rounded-lg hover:bg-blue-800 font-Inter">
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
                  <Image
                    src="/static/icons/tick.png"
                    alt="copy"
                    height="20"
                    width="20"
                  />
                ) : (
                  <Image
                    src="/static/icons/copy.png"
                    alt="copy"
                    height="20"
                    width="20"
                  />
                )}
              </div>
            </CopyToClipboard>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <p className="px-3 py-1 text-xs border-gray-600 border-2 rounded-lg opacity-70 font-Inter">
              Link Blocked
            </p>
            <div className="invert mx-2">
              <Image
                src="/static/icons/copy.png"
                alt="copy"
                height="20"
                width="20"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
