import React from "react";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Whatsapp(props) {
  const { wagroups, isBlocked } = props;
  function showAtag(url) {
    if (url === "" || url === "https://") return false;
    return true;
  }

  return (
    <div className="wa groups">
      <h3 className="app-heading">WHATSAPP</h3>
      <div className="group-container">
        {wagroups.map((group, index) => {
          //won't add a tag when url are not set or blocked
          return showAtag(group.url) ? (
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
                  className={group.name}
                >
                  <p className="join-grp">JOIN GROUP</p>
                </a>
                <CopyToClipboard text={group.url}>
                  <div className="copy-link">
                    <Image
                      src="/static/copy.png"
                      alt="copy"
                      layout="fill"
                    ></Image>
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          ) : (
            <div className="card" key={index}>
              <h4 className="group-name">{group.name}</h4>
              <p className="group-info">&#40;{group.desc}&#41;</p>
              <div className="group-dp">
                <Image src={group.img} alt={group.alt} layout="fill" priority />
              </div>
              <p className={isBlocked ? "join-grp join-block" : "join-grp"}>
                NONE
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
