import React, { useState } from "react";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Telegram() {
  const tgGroups = [
    {
      name: "COMMUNITY",
      id: 1,
      desc: "Group Chat",
      alt: "pvx community telegram",
      img: "/static/group/tg-pvx.jpg",
      url: "https://t.me/PVX_Community_Group",
    },
    {
      name: "TECH NEWS",
      id: 2,
      desc: "Channel",
      alt: "pvx tech news telegram",
      img: "/static/group/tech.jpg",
      url: "https://t.me/pvxtechnews",
    },
    {
      name: "MOVIES",
      id: 3,
      desc: "Discussion",
      alt: "pvx movies series telegram",
      img: "/static/group/movies.jpg",
      url: "https://t.me/joinchat/J7FzKB1uYt0xNDVl",
    },
    // {
    //   name: "MIRROR",
    //   id: 4,
    //   desc: "Gdrive Uploader",
    //   alt: "pvx mirror drive telegram",
    //   img: "/static/group/mirror.jpg",
    //   url: "https://t.me/PVXMIRROR",
    // },
  ];

  const [copied, setCopied] = useState(new Array(tgGroups.length).fill(false));

  const checkCopied = (text, result, id) => {
    // console.log(text, result, id);
    if (result) {
      const copiedNew = new Array(tgGroups.length).fill(false);
      copiedNew[id] = true;
      setCopied(copiedNew);
    }
  };

  return (
    <div className="tg groups">
      <h3 className="app-heading">TELEGRAM</h3>

      <div className="group-container">
        {tgGroups.map((group) => (
          <div className="card" key={group.id}>
            <h4 className="group-name">{group.name}</h4>
            <p className="group-info">&#40;{group.desc}&#41;</p>
            <div className="group-dp">
              <Image src={group.img} alt={group.alt} layout="fill" />
            </div>
            <div className="join-copy-wrapper">
              <a
                href={group.url}
                key={group.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="join-grp">JOIN GROUP</p>
              </a>
              <CopyToClipboard
                text={group.url}
                onCopy={(text, result) => {
                  checkCopied(text, result, group.id);
                }}
              >
                <div className="copy-link">
                  {copied[group.id] ? (
                    <Image src="/static/tick.png" alt="copy" layout="fill" />
                  ) : (
                    <Image src="/static/copy.png" alt="copy" layout="fill" />
                  )}
                </div>
              </CopyToClipboard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
