import { useState } from "react";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Whatsapp(props) {
  const { wagroups, enabled } = props;

  const [copied, setCopied] = useState(new Array(wagroups.length).fill(false));

  const checkCopied = (text, result, index) => {
    // console.log(text, result, index);
    if (result) {
      let copiedNew = new Array(wagroups.length).fill(false);
      copiedNew[index] = true;
      setCopied(copiedNew);
    }
  };

  return (
    <div className="wa groups">
      <h3 className="app-heading">WHATSAPP</h3>
      <div className="group-container">
        {wagroups.map((group, index) => {
          return (
            <div className="card" key={index}>
              <h4 className="group-name">{group.name}</h4>
              <p className="group-info">&#40;{group.desc}&#41;</p>
              <div className="group-dp">
                <Image src={group.img} alt={group.alt} layout="fill" />
              </div>
              {group.url ? (
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
              ) : (
                <p className="join-grp join-block">NONE</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
