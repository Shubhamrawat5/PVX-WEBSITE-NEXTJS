const stickerOnlyImg = "/static/group/stickeronly.jpg";
const communityImg = "/static/group/main.jpg";
const techImg = "/static/group/tech.jpg";
const tech2Img = "/static/group/tech2.jpg";
const progImg = "/static/group/prog.jpg";
const moviesImg = "/static/group/movies.jpg";
const statusImg = "/static/group/status.jpg";
const memeImg = "/static/group/meme.jpg";
const sticker1Img = "/static/group/sticker1.jpg";
// const sticker2Img = "/static/group/sticker2.jpg";
// const sticker3Img = "/static/group/sticker3.jpg";
const animeImg = "/static/group/anime2.jpg";
const botImg = "/static/group/bot2.jpg";
// const haveliImg = "/static/group/haveli.jpg";
const gamingImg = "/static/group/gaming.jpg";
const studiesImg = "/static/group/study.jpg";
const sportsImg = "/static/group/sports.jpg";
const cryptoImg = "/static/group/crypto.jpg";
const foodImg = "/static/group/food.jpg";
// const autoImg = "/static/group/auto.jpg";
// const dealsImg = "/static/group/deals.jpg";
// const pubgmImg = "/static/group/pubgm.jpg";

export interface WhatsapGroup {
  gname: string;
  desc: string;
  alt: string;
  img: string;
  link: string;
  groupjid: string;
}

export default function WhatsappGroupState() {
  const whatsappGroups: WhatsapGroup[] = [
    {
      gname: "COMMUNITY",
      desc: "Main Group",
      alt: "pvx community",
      img: communityImg,
      link: "",
      groupjid: "919557666582-1467533860@g.us",
    },
    {
      gname: "TECH DISCUSS",
      desc: "Discussion",
      alt: "pvx tech discussion",
      img: techImg,
      link: "",
      groupjid: "919557666582-1551290369@g.us",
    },
    {
      gname: "TECH NEWS",
      desc: "Admin Only",
      alt: "pvx tech news",
      img: tech2Img,
      link: "",
      groupjid: "919557666582-1548337792@g.us",
    },
    {
      gname: "PROGRAMMERS",
      desc: "Discussion",
      alt: "pvx programmers",
      img: progImg,
      link: "",
      groupjid: "919557666582-1584193120@g.us",
    },
    {
      gname: "MOVIES",
      desc: "Discussion",
      alt: "pvx movies series",
      img: moviesImg,
      link: "",
      groupjid: "919557666582-1506690003@g.us",
    },
    {
      gname: "SPORTS",
      desc: "Discussion",
      alt: "pvx sports",
      img: sportsImg,
      link: "",
      groupjid: "919557666582-1559476348@g.us",
    },

    {
      gname: "MEMES",
      desc: "Memes Sharing",
      alt: "pvx memes",
      img: memeImg,
      link: "",
      groupjid: "919557666582-1551346051@g.us",
    },
    {
      gname: "STICKER",
      desc: "Sticker Sharing",
      alt: "pvx sticker chat",
      img: sticker1Img,
      link: "",
      groupjid: "919557666582-1580308963@g.us",
    },
    {
      gname: "STICKER ONLY 1.0",
      desc: "Admin Only",
      alt: "pvx sticker only 1.0",
      img: stickerOnlyImg,
      link: "",
      groupjid: "919557666582-1628610549@g.us",
    },
    {
      gname: "STICKER ONLY 2.0",
      desc: "Admin Only",
      alt: "pvx sticker only 2.0",
      img: stickerOnlyImg,
      link: "",
      groupjid: "919557666582-1586018947@g.us",
    },
    {
      gname: "ANIME",
      desc: "Discussion",
      alt: "pvx anime",
      img: animeImg,
      link: "",
      groupjid: "919557666582-1556821647@g.us",
    },
    {
      gname: "CRYPTO",
      desc: "Discussion",
      alt: "pvx crypto discussion",
      img: cryptoImg,
      link: "",
      groupjid: "918329198682-1614096949@g.us",
    },
    {
      gname: "GAMING",
      desc: "Discussion",
      alt: "pvx gaming",
      img: gamingImg,
      link: "",
      groupjid: "17028054150-1608057174@g.us",
    },
    {
      gname: "BOT",
      desc: "Whatsapp Bot",
      alt: "pvx whatsapp bot",
      img: botImg,
      link: "",
      groupjid: "919675642959-1606755119@g.us",
    },
    // {
    //   gname: "HAVELI",
    //   desc: "For Spam and all",
    //   img: haveliImg,
    //   link: "",
    // },
    {
      gname: "STUDIES",
      desc: "Discussion",
      alt: "pvx studies",
      img: studiesImg,
      link: "",
      groupjid: "919557666582-1617595892@g.us",
    },
    {
      gname: "FOOD",
      desc: "Discussion",
      alt: "pvx food",
      img: foodImg,
      link: "",
      groupjid: "120363039452453480@g.us",
    },
    {
      gname: "STATUS",
      desc: "Whatsapp Status",
      alt: "pvx whatsapp status",
      img: statusImg,
      link: "",
      groupjid: "919557666582-1627834788@g.us",
    },
    // {
    //   gname: "AUTOMOBILE",
    //   desc: "Discussion",
    //   alt: "pvx automobile",
    //   img: autoImg,
    //   link: "",
    //   groupjid: "917506703222-1595354899@g.us",
    // },
  ];
  return whatsappGroups;
}
