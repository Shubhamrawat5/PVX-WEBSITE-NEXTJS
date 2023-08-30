import React from "react";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import { GroupData } from "./WhatsappGroupState";

interface GroupCardProps {
  group: GroupData;
  isCopied: boolean;
  index: number;
  checkCopied: any;
}

export default function GroupCard(props: GroupCardProps) {
  const { group, isCopied, index, checkCopied } = props;
  return (
    <div className="card" key={group.id}>
      <h4 className="group-name">{group.name}</h4>
      <p className="group-info">&#40;{group.desc}&#41;</p>
      <div className="group-dp">
        <Image src={group.img} alt={group.alt} fill />
      </div>
      {group.link ? (
        <div className="join-copy-wrapper">
          <a
            href={group.link}
            key={group.id}
            target="_blank"
            rel="noopener noreferrer"
            className={group.name}
          >
            <p className="join-grp">JOIN GROUP</p>
          </a>
          <CopyToClipboard
            text={group.link}
            onCopy={(text, result) => {
              checkCopied(text, result, index);
            }}
          >
            <div className="copy-link">
              {isCopied ? (
                <Image src="/static/tick.png" alt="copy" fill />
              ) : (
                <Image src="/static/copy.png" alt="copy" fill />
              )}
            </div>
          </CopyToClipboard>
        </div>
      ) : (
        <p className="join-grp join-block">Blocked</p>
      )}
    </div>
  );
}
