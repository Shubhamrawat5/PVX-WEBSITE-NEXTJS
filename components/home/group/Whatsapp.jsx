import React from "react";
import Image from "next/image";

export default function Whatsapp(props) {
  const { wagroups } = props;
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
            <a
              href={group.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className={group.name}
            >
              <div className="card">
                <h4 className="group-name">{group.name}</h4>
                <div className="group-dp">
                  <Image src={group.img} alt="dp" layout="fill" />
                </div>
                <p className="group-info">&#40;{group.desc}&#41;</p>
              </div>
            </a>
          ) : (
            <div className="card" key={index}>
              <h4 className="group-name">{group.name}</h4>
              <div className="group-dp">
                <Image src={group.img} alt="dp" layout="fill" />
              </div>
              <p className="group-info">&#40;{group.desc}&#41;</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
