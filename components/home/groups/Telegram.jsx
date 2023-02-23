import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";

export default function Telegram() {
  let tgGroups = [
    {
      name: "COMMUNITY",
      desc: "Group Chat",
      alt: "pvx community telegram",
      img: "/static/group/tg-pvx.jpg",
      url: "https://t.me/PVX_Community_Group",
    },
    {
      name: "TECH NEWS",
      desc: "Channel",
      alt: "pvx tech news telegram",
      img: "/static/group/tech.jpg",
      url: "https://t.me/pvxtechnews",
    },
    {
      name: "MOVIES",
      desc: "Discussion",
      alt: "pvx movies series telegram",
      img: "/static/group/movies.jpg",
      url: "https://t.me/joinchat/J7FzKB1uYt0xNDVl",
    },
    {
      name: "MIRROR",
      desc: "Gdrive Uploader",
      alt: "pvx mirror drive telegram",
      img: "/static/group/mirror.jpg",
      url: "https://t.me/PVXMIRROR",
    },
  ];

  const [copied, setCopied] = useState(new Array(tgGroups.length).fill(false));

  const checkCopied = (text, result, index) => {
    // console.log(text, result, index);
    if (result) {
      let copiedNew = new Array(tgGroups.length).fill(false);
      copiedNew[index] = true;
      setCopied(copiedNew);
    }
  };

  return (
    <div className="tg groups">
      <h3 className="app-heading">TELEGRAM</h3>

      <div className="group-container">
        {tgGroups.map((group, index) => {
          return (
            <div className="card" key={index}>
              <h4 className="group-name">{group.name}</h4>
              <p className="group-info">&#40;{group.desc}&#41;</p>
              <div className="group-dp">
                <Image src={group.img} alt={group.alt} layout="fill" />
              </div>
              <div className="join-copy-wrapper">
                <a
                  href={group.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="join-grp">JOIN GROUP</p>
                </a>
                <CopyToClipboard
                  text={group.url}
                  onCopy={(text, result) => {
                    checkCopied(text, result, index);
                  }}
                >
                  <div className="copy-link">
                    {copied[index] ? (
                      <Image
                        src="/static/tick.png"
                        alt="copy"
                        layout="fill"
                      ></Image>
                    ) : (
                      <Image
                        src="/static/copy.png"
                        alt="copy"
                        layout="fill"
                      ></Image>
                    )}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
