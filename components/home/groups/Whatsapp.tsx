import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Group } from "../../../pages";
import WhatsappGroupState from "./WhatsappGroupState";

export default function WhatsappGroups(props: {
  groups: Group[];
  isEnabled: boolean;
}) {
  const { groups, isEnabled } = props;

  const whatsappGroups = WhatsappGroupState();

  // check if group links are enabled
  if (isEnabled) {
    // groupFromDB = data coming from outside - api
    // groupFromState = data present inside already - wagroups
    whatsappGroups.forEach((groupFromState, index) => {
      groups.forEach((groupFromDB) => {
        if (groupFromDB.groupjid === groupFromState.groupjid) {
          whatsappGroups[index].link = groupFromDB.link;
        }
      });
    });
  }

  const [copied, setCopied] = useState(
    new Array(whatsappGroups.length).fill(false)
  );

  const checkCopied = (text: string, result: boolean, index: number) => {
    if (result) {
      const copiedNew = new Array(whatsappGroups.length).fill(false);
      copiedNew[index] = true;
      setCopied(copiedNew);
    }
  };

  return (
    <div className="wa groups">
      {!isEnabled && (
        <div id="err" className="err">
          NOTE: Whatsapp Group Links are currently blocked ! Contact PVX admins.
        </div>
      )}
      <h3 className="app-heading">WHATSAPP</h3>
      <div className="group-container">
        {whatsappGroups.map((group, index) => (
          <div className="card" key={group.groupjid}>
            <h4 className="group-name">{group.gname}</h4>
            <p className="group-info">&#40;{group.desc}&#41;</p>
            <div className="group-dp">
              <Image src={group.img} alt={group.alt} fill />
            </div>
            {group.link ? (
              <div className="join-copy-wrapper">
                <a
                  href={group.link}
                  key={group.groupjid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={group.gname}
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
                    {copied[index] ? (
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
        ))}
      </div>
    </div>
  );
}

WhatsappGroups.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      gname: PropTypes.string.isRequired,
      groupjid: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
  isEnabled: PropTypes.bool.isRequired,
};

// Whatsapp.propTypes = {
//   wagroups: PropTypes.arrayOf(
//     PropTypes.shape({
//       gname: PropTypes.string.isRequired,
//       desc: PropTypes.string.isRequired,
//       img: PropTypes.string.isRequired,
//       alt: PropTypes.string.isRequired,
//       groupjid: PropTypes.string.isRequired,
//       link: PropTypes.string,
//     })
//   ).isRequired,
// };
