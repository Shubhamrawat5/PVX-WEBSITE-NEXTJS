import React, { useState } from "react";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";

export default function OtherGroups() {
  const discordGroups = [
    {
      name: "COMMUNITY",
      id: 1,
      desc: "Channel",
      alt: "pvx community discord",
      img: "/static/group/discord.jpg",
      url: "https://discord.gg/zMktzNzx9U",
    },
  ];

  const [copiedDiscord, setCopiedDiscord] = useState(
    new Array(discordGroups.length).fill(false)
  );

  const checkCopiedDiscord = (text: string, result: boolean, id: number) => {
    if (result) {
      const copiedNew = new Array(discordGroups.length).fill(false);
      copiedNew[id] = true;
      setCopiedDiscord(copiedNew);
    }
  };

  const fbGroups = [
    {
      name: "COMMUNITY",
      id: 1,
      desc: "Posting group",
      alt: "pvx community facebook",
      img: "/static/group/fb.jpg",
      url: "https://facebook.com/groups/pvxgaming/",
    },
  ];

  const [copiedFb, setCopiedFb] = useState(
    new Array(discordGroups.length).fill(false)
  );

  const checkCopiedFb = (text: string, result: boolean, id: number) => {
    if (result) {
      const copiedNew = new Array(discordGroups.length).fill(false);
      copiedNew[id] = true;
      setCopiedFb(copiedNew);
    }
  };

  return (
    <>
      <div className="discord groups">
        <h3 className="app-heading">DISCORD</h3>
        <div className="group-container">
          {discordGroups.map((group) => (
            <div className="card" key={group.id}>
              <h4 className="group-name">{group.name}</h4>
              <p className="group-info">&#40;{group.desc}&#41;</p>
              <div className="group-dp">
                <Image src={group.img} alt={group.alt} fill />
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
                    checkCopiedDiscord(text, result, group.id);
                  }}
                >
                  <div className="copy-link">
                    {copiedDiscord[group.id] ? (
                      <Image src="/static/tick.png" alt="copy" fill />
                    ) : (
                      <Image src="/static/copy.png" alt="copy" fill />
                    )}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fb groups">
        <h3 className="app-heading">FACEBOOK</h3>
        <div className="group-container">
          {fbGroups.map((group) => (
            <div className="card" key={group.id}>
              <h4 className="group-name">{group.name}</h4>
              <p className="group-info">&#40;{group.desc}&#41;</p>
              <div className="group-dp">
                <Image src={group.img} alt={group.alt} fill />
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
                    checkCopiedFb(text, result, group.id);
                  }}
                >
                  <div className="copy-link">
                    {copiedFb[group.id] ? (
                      <Image src="/static/tick.png" alt="copy" fill />
                    ) : (
                      <Image src="/static/copy.png" alt="copy" fill />
                    )}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="signal groups">
        <h3 className="app-heading">SIGNAL</h3>
        <div className="group-container">
          <div className="card">
            <h4 className="group-name">COMMUNITY</h4>
            <p className="group-info">(Group Chat)</p>
            <div className="group-dp">
              <Image
                src="/static/group/main.jpg"
                alt="pvx community signal"
                fill
              />
            </div>
            <div className="join-copy-wrapper">
              <a
                href="https://signal.group/#CjQKIFt19XJr-7owvEs8F0otjk5TujIroVnPsqQB-QV8dQXCEhDbIbTkPzfIpDek1Xhoxk53"
                target="_blank"
                rel="noopener noreferrer"
                className="signal-community"
              >
                <p className="join-grp">JOIN GROUP</p>
              </a>
              <CopyToClipboard text="https://signal.group/#CjQKIFt19XJr-7owvEs8F0otjk5TujIroVnPsqQB-QV8dQXCEhDbIbTkPzfIpDek1Xhoxk53">
                <div className="copy-link">
                  <Image
                    src="/static/copy.png"
                    alt="copy"
                    fill
                  ></Image>
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
