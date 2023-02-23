import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";

export default function OtherGroups() {
  const discordGroups = [
    {
      name: "COMMUNITY",
      desc: "Channel",
      alt: "pvx community discord",
      img: "/static/group/discord.jpg",
      url: "https://discord.gg/zMktzNzx9U",
    },
  ];

  const [copiedDiscord, setCopiedDiscord] = useState(
    new Array(discordGroups.length).fill(false)
  );

  const checkCopiedDiscord = (text, result, index) => {
    // console.log(text, result, index);
    if (result) {
      let copiedNew = new Array(discordGroups.length).fill(false);
      copiedNew[index] = true;
      setCopiedDiscord(copiedNew);
    }
  };

  const fbGroups = [
    {
      name: "COMMUNITY",
      desc: "Posting group",
      alt: "pvx community facebook",
      img: "/static/group/fb.jpg",
      url: "https://facebook.com/groups/pvxgaming/",
    },
  ];

  const [copiedFb, setCopiedFb] = useState(
    new Array(discordGroups.length).fill(false)
  );

  const checkCopiedFb = (text, result, index) => {
    // console.log(text, result, index);
    if (result) {
      let copiedNew = new Array(discordGroups.length).fill(false);
      copiedNew[index] = true;
      setCopiedFb(copiedNew);
    }
  };

  return (
    <>
      <div className="discord groups">
        <h3 className="app-heading">DISCORD</h3>
        <div className="group-container">
          {discordGroups.map((group, index) => {
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
                      checkCopiedDiscord(text, result, index);
                    }}
                  >
                    <div className="copy-link">
                      {copiedDiscord[index] ? (
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

      <div className="fb groups">
        <h3 className="app-heading">FACEBOOK</h3>
        <div className="group-container">
          {fbGroups.map((group, index) => {
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
                      checkCopiedFb(text, result, index);
                    }}
                  >
                    <div className="copy-link">
                      {copiedFb[index] ? (
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
                layout="fill"
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
                    layout="fill"
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
