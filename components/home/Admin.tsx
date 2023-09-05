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
    <section className="bg-neutral-950">
      <h2 className="text-2xl text-red-600 border-red-600 border-2 inline-block rounded px-4 py-2 mb-8 font-bold">
        PVX MAIN ADMINS
      </h2>

      <div className="flex justify-center items-center flex-wrap  font-Inter">
        {admins.map((admin) => (
          <div
            className="bg-gray-950 m-2 px-4 py-3 rounded-lg flex justify-center items-center flex-col"
            key={admin.id}
          >
            <div className="relative overflow-hidden rounded-full h-20 w-20">
              <Image src={admin.img} alt="admin" fill />
            </div>
            <h4 className="mt-3">{admin.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
