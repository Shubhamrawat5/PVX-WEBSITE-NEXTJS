import React from "react";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";

//TODO: WILL USE THIS CARD COMPONENT FOR ALL THE GROUPS
export default function GroupCard(props) {
  const { group, index } = props;
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
              <Image src="/static/tick.png" alt="copy" layout="fill"></Image>
            ) : (
              <Image src="/static/copy.png" alt="copy" layout="fill"></Image>
            )}
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}
