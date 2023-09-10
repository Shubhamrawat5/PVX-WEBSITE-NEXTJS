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
    <section className="bg-gradient-to-r from-gray-950 to-gray-900">
      <h2 className="section-heading">PVX MAIN ADMINS</h2>

      <div className="flex justify-center items-center flex-wrap font-Inter gap-4 ">
        {admins.map((admin) => (
          <div
            className="bg-gray-800 px-4 py-3 rounded-lg flex justify-center items-center flex-col gap-3 basis-28"
            key={admin.id}
          >
            <div className="overflow-hidden rounded-full">
              <Image
                className="w-16 h-16 sm:w-20 sm:h-20"
                src={admin.img}
                alt="admin"
                height="80"
                width="80"
              />
            </div>
            <h3 className="text-sm sm:text-base">{admin.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
