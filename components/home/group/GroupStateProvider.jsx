const stickerOnlyImg = "/static/group/stickeronly.jpg";
const communityImg = "/static/group/main.jpg";
const techImg = "/static/group/tech.jpg";
const progImg = "/static/group/prog.jpg";
const moviesImg = "/static/group/movies.jpg";
const statusImg = "/static/group/status.jpg";
const memeImg = "/static/group/meme.jpg";
const sticker1Img = "/static/group/sticker1.jpg";
const sticker2Img = "/static/group/sticker2.jpg";
const sticker3Img = "/static/group/sticker3.jpg";
const animeImg = "/static/group/anime.jpg";
const botImg = "/static/group/bot.jpg";
// const haveliImg = "/static/group/haveli.jpg";
const gamingImg = "/static/group/gaming.jpg";
const studiesImg = "/static/group/study.jpg";
const sportsImg = "/static/group/sports.jpg";
const cryptoImg = "/static/group/crypto.jpg";
const autoImg = "/static/group/auto.jpg";
const dealsImg = "/static/group/deals.jpg";
const pubgmImg = "/static/group/pubgm.jpg";

export default function GroupStateProvider() {
  const wagroups = [
    {
      name: "COMMUNITY",
      desc: "Main Group, For all Discussion",
      img: communityImg,
      url: "https://",
    },
    {
      name: "TECH DISCUSS",
      desc: "For Tech related Discussion",
      img: techImg,
      url: "https://",
    },
    {
      name: "TECH NEWS",
      desc: "For Latest Tech News",
      img: techImg,
      url: "https://",
    },
    {
      name: "PROGRAMMERS",
      desc: "For Programming Discussion",
      img: progImg,
      url: "https://",
    },
    {
      name: "MOVIES",
      desc: "For Series, Movies Discussion",
      img: moviesImg,
      url: "https://",
    },
    {
      name: "STATUS",
      desc: "For Sharing Whatsapp Status",
      img: statusImg,
      url: "https://",
    },
    {
      name: "MEMES",
      desc: "For latest Memes Sharing",
      img: memeImg,
      url: "https://",
    },
    {
      name: "STICKER ONLY",
      desc: "Sticker all time, closed chat",
      img: stickerOnlyImg,
      url: "https://",
    },
    {
      name: "STICKER 1.0",
      desc: "For new Sticker Sharing",
      img: sticker1Img,
      url: "https://",
    },
    {
      name: "STICKER 2.0",
      desc: "For new Sticker Sharing",
      img: sticker2Img,
      url: "https://",
    },
    {
      name: "STICKER 3.0",
      desc: "For new Sticker Sharing",
      img: sticker3Img,
      url: "https://",
    },
    {
      name: "ANIME",
      desc: "For Anime Related Discussion",
      img: animeImg,
      url: "https://",
    },
    {
      name: "CRYPTO",
      desc: "For Crypto Related Discussion",
      img: cryptoImg,
      url: "https://",
    },
    {
      name: "BOT",
      desc: "For Whatsapp Bot Testing",
      img: botImg,
      url: "https://",
    },
    // {
    //   name: "HAVELI",
    //   desc: "For Spam and all",
    //   img: haveliImg,
    //   url: "https://",
    // },
    {
      name: "GAMING",
      desc: "For Gaming Discussion",
      img: gamingImg,
      url: "https://",
    },
    {
      name: "STUDIES",
      desc: "For Study Related Discussion",
      img: studiesImg,
      url: "https://",
    },
    {
      name: "SPORTS",
      desc: "For Different Sports Discussion",
      img: sportsImg,
      url: "https://",
    },
    {
      name: "AUTOMOBILE",
      desc: "For Cars Bikes Discussion",
      img: autoImg,
      url: "https://",
    },
    {
      name: "BGMI",
      desc: "For BGMI Mobile Discussion",
      img: pubgmImg,
      url: "https://",
    },
    {
      name: "DEALS",
      desc: "For Loots & Deals Info",
      img: dealsImg,
      url: "https://",
    },
  ];
  return wagroups;
}
