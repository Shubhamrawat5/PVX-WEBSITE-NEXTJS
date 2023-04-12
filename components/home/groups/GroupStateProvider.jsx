const stickerOnlyImg = "/static/group/stickeronly.jpg";
const communityImg = "/static/group/main.jpg";
const techImg = "/static/group/tech.jpg";
const tech2Img = "/static/group/tech2.jpg";
const progImg = "/static/group/prog.jpg";
const moviesImg = "/static/group/movies.jpg";
const statusImg = "/static/group/status.jpg";
const memeImg = "/static/group/meme.jpg";
const sticker1Img = "/static/group/sticker1.jpg";
const sticker2Img = "/static/group/sticker2.jpg";
const sticker3Img = "/static/group/sticker3.jpg";
const animeImg = "/static/group/anime2.jpg";
const botImg = "/static/group/bot.jpg";
// const haveliImg = "/static/group/haveli.jpg";
const gamingImg = "/static/group/gaming.jpg";
const studiesImg = "/static/group/study.jpg";
const sportsImg = "/static/group/sports.jpg";
const cryptoImg = "/static/group/crypto.jpg";
const autoImg = "/static/group/auto.jpg";
const dealsImg = "/static/group/deals.jpg";
const pubgmImg = "/static/group/pubgm.jpg";
const foodImg = "/static/group/food.jpg";

export default function GroupStateProvider() {
  const wagroups = [
    {
      name: "COMMUNITY",
      desc: "Main Group",
      alt: "pvx community",
      img: communityImg,
      url: "",
      jid: "919557666582-1467533860@g.us",
    },
    {
      name: "TECH DISCUSS",
      desc: "Discussion",
      alt: "pvx tech discussion",
      img: techImg,
      url: "",
      jid: "919557666582-1551290369@g.us",
    },
    {
      name: "TECH NEWS",
      desc: "Admin Only",
      alt: "pvx tech news",
      img: tech2Img,
      url: "",
      jid: "919557666582-1548337792@g.us",
    },
    {
      name: "PROGRAMMERS",
      desc: "Discussion",
      alt: "pvx programmers",
      img: progImg,
      url: "",
      jid: "919557666582-1584193120@g.us",
    },
    {
      name: "MOVIES",
      desc: "Discussion",
      alt: "pvx movies series",
      img: moviesImg,
      url: "",
      jid: "919557666582-1506690003@g.us",
    },
    {
      name: "SPORTS",
      desc: "Discussion",
      alt: "pvx sports",
      img: sportsImg,
      url: "",
      jid: "919557666582-1559476348@g.us",
    },

    {
      name: "MEMES",
      desc: "Memes Sharing",
      alt: "pvx memes",
      img: memeImg,
      url: "",
      jid: "919557666582-1551346051@g.us",
    },
    {
      name: "STICKER",
      desc: "Sticker Sharing",
      alt: "pvx sticker chat",
      img: sticker1Img,
      url: "",
      jid: "919557666582-1580308963@g.us",
    },
    {
      name: "STICKER ONLY 1.0",
      desc: "Admin Only",
      alt: "pvx sticker only 1.0",
      img: stickerOnlyImg,
      url: "",
      jid: "919557666582-1628610549@g.us",
    },
    {
      name: "STICKER ONLY 2.0",
      desc: "Admin Only",
      alt: "pvx sticker only 2.0",
      img: stickerOnlyImg,
      url: "",
      jid: "919557666582-1586018947@g.us",
    },
    {
      name: "ANIME",
      desc: "Discussion",
      alt: "pvx anime",
      img: animeImg,
      url: "",
      jid: "919557666582-1556821647@g.us",
    },
    {
      name: "CRYPTO",
      desc: "Discussion",
      alt: "pvx crypto discussion",
      img: cryptoImg,
      url: "",
      jid: "918329198682-1614096949@g.us",
    },
    {
      name: "GAMING",
      desc: "Discussion",
      alt: "pvx gaming",
      img: gamingImg,
      url: "",
      jid: "17028054150-1608057174@g.us",
    },
    {
      name: "BOT",
      desc: "Whatsapp Bot",
      alt: "pvx whatsapp bot",
      img: botImg,
      url: "",
      jid: "919675642959-1606755119@g.us",
    },
    // {
    //   name: "HAVELI",
    //   desc: "For Spam and all",
    //   img: haveliImg,
    //   url: "",
    // },
    {
      name: "STUDIES",
      desc: "Discussion",
      alt: "pvx studies",
      img: studiesImg,
      url: "",
      jid: "919557666582-1617595892@g.us",
    },
    {
      name: "FOOD",
      desc: "Discussion",
      alt: "pvx food",
      img: foodImg,
      url: "",
      jid: "120363039452453480@g.us",
    },
    {
      name: "STATUS",
      desc: "Whatsapp Status",
      alt: "pvx whatsapp status",
      img: statusImg,
      url: "",
      jid: "919557666582-1627834788@g.us",
    },
    // {
    //   name: "AUTOMOBILE",
    //   desc: "Discussion",
    //   alt: "pvx automobile",
    //   img: autoImg,
    //   url: "",
    //   jid: "917506703222-1595354899@g.us",
    // },
  ];
  return wagroups;
}
