import React from "react";
import Image from "next/image";

const kryptonImg = "/static/admin/krypton.jpg";
const adiImg = "/static/admin/adi.jpg";
const rollyImg = "/static/admin/rolly.jpg";
const mundalImg = "/static/admin/mundal.jpg";
const bhanuImg = "/static/admin/bhanu.jpg";
const jigneshImg = "/static/admin/jignesh.jpg";
const anmolImg = "/static/admin/anmol.jpg";
const masterImg = "/static/admin/master.jpg";
const kiraImg = "/static/admin/kira.jpg";
const ankitImg = "/static/admin/toxic.jpg";
const mysImg = "/static/admin/mys.jpg";
const vivekImg = "/static/admin/leo.jpg";
const karmaImg = "/static/admin/karma.jpg";
const lokendraImg = "/static/admin/lokendra.jpg";

export default function Admin() {
  const admins = [
    {
      name: "KRYPTON",
      id: 1,
      img: kryptonImg,
    },
    {
      name: "ADI",
      id: 2,
      img: adiImg,
    },
    {
      name: "ROLLY",
      id: 3,
      img: rollyImg,
    },
    {
      name: "MUNDAL",
      id: 4,
      img: mundalImg,
    },
    {
      name: "BHANU",
      id: 5,
      img: bhanuImg,
    },
    {
      name: "JIGNESH",
      id: 6,
      img: jigneshImg,
    },
    {
      name: "CHIEF",
      id: 7,
      img: masterImg,
    },
    {
      name: "Añøn¥móú$",
      id: 8,
      img: anmolImg,
    },
    {
      name: "KIRA",
      id: 9,
      img: kiraImg,
    },
    {
      name: "ANKIT",
      id: 10,
      img: ankitImg,
    },
    {
      name: "K Λ Я M Λ",
      id: 11,
      img: karmaImg,
    },
    {
      name: "MYSTIXXZ",
      id: 12,
      img: mysImg,
    },
    {
      name: "VIVEK",
      id: 13,
      img: vivekImg,
    },
    {
      name: "LOKENDRA",
      id: 14,
      img: lokendraImg,
    },
  ];
  return (
    <section id="admin-section" className="section">
      <h2 className="section-heading">PVX MAIN ADMINS</h2>

      <div className="group-container">
        {admins.map((admin) => (
          <div className="admin-box" key={admin.id}>
            <div className="admin-dp">
              <Image src={admin.img} alt="admin" layout="fill" />
            </div>
            <h4 className="admin-name">{admin.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
