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
import Image from "next/image";

export default function Admin() {
  let admins = [
    {
      name: "KRYPTON",
      img: kryptonImg,
    },
    {
      name: "ADI",
      img: adiImg,
    },
    {
      name: "ROLLY",
      img: rollyImg,
    },
    {
      name: "MUNDAL",
      img: mundalImg,
    },
    {
      name: "BHANU",
      img: bhanuImg,
    },
    {
      name: "JIGNESH",
      img: jigneshImg,
    },
    {
      name: "CHIEF",
      img: masterImg,
    },
    {
      name: "Añøn¥móú$",
      img: anmolImg,
    },
    {
      name: "KIRA",
      img: kiraImg,
    },
    {
      name: "ANKIT",
      img: ankitImg,
    },
    {
      name: "K Λ Я M Λ",
      img: karmaImg,
    },
    {
      name: "MYSTIXXZ",
      img: mysImg,
    },
    {
      name: "VIVEK",
      img: vivekImg,
    },
    {
      name: "LOKENDRA",
      img: lokendraImg,
    },
  ];
  return (
    <section id="admin-section" className="section">
      <h2 className="section-heading">PVX MAIN ADMINS</h2>

      <div className="group-container">
        {admins.map((admin, index) => {
          return (
            <div className="admin-box" key={index}>
              <div className="admin-dp">
                <Image src={admin.img} alt="admin" layout="fill" />
              </div>
              <h4 className="admin-name">{admin.name}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
