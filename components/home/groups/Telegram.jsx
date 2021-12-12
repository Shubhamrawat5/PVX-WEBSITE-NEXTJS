import Image from "next/image";

export default function Telegram() {
  let tgGroups = [
    {
      name: "COMMUNITY",
      desc: "(Group Chat)",
      img: "/static/group/tg-pvx.jpg",
      url: "https://t.me/PVX_Community_Group",
      cn: "tg-community",
    },
    {
      name: "TECH NEWS",
      desc: "(Channel)",
      img: "/static/group/tech.jpg",
      url: "https://t.me/pvxtechnews",
      cn: "tg-technews",
    },
    {
      name: "MOVIES",
      desc: "(Discussion)",
      img: "/static/group/movies.jpg",
      url: "https://t.me/joinchat/J7FzKB1uYt0xNDVl",
      cn: "tg-movies",
    },
    {
      name: "MIRROR",
      desc: "(Gdrive Uploader)",
      img: "/static/group/mirror.jpg",
      url: "https://t.me/PVXMIRROR",
      cn: "tg-mirror",
    },
  ];

  return (
    <div className="tg groups">
      <h3 className="app-heading">TELEGRAM</h3>

      <div className="group-container">
        {tgGroups.map((grp, index) => {
          return (
            <div className="card" key={index}>
              <h4 className="group-name">{grp.name}</h4>
              <p className="group-info">{grp.desc}</p>
              <div className="group-dp">
                <Image src={grp.img} alt="dp" layout="fill" />
              </div>
              <a
                key={index}
                href={grp.url}
                target="_blank"
                rel="noopener noreferrer"
                className={grp.cn}
              >
                <p className="join-grp">JOIN GROUP</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
