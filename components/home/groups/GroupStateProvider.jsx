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
const foodImg = "/static/group/food.jpg";

export default function GroupStateProvider() {
  const wagroups = [
    {
      name: "COMMUNITY",
      desc: "Main Group",
      img: communityImg,
      url: "https://",
    },
    {
      name: "TECH DISCUSS",
      desc: "Discussion",
      img: techImg,
      url: "https://",
    },
    {
      name: "TECH NEWS",
      desc: "Admin Only",
      img: techImg,
      url: "https://",
    },
    {
      name: "PROGRAMMERS",
      desc: "Discussion",
      img: progImg,
      url: "https://",
    },
    {
      name: "MOVIES",
      desc: "Discussion",
      img: moviesImg,
      url: "https://",
    },
    {
      name: "STATUS",
      desc: "Whatsapp Status",
      img: statusImg,
      url: "https://",
    },
    {
      name: "MEMES",
      desc: "Memes Sharing",
      img: memeImg,
      url: "https://",
    },
    {
      name: "STICKER ONLY 1.0",
      desc: "Admin Only",
      img: stickerOnlyImg,
      url: "https://",
    },
    {
      name: "STICKER ONLY 2.0",
      desc: "Admin Only",
      img: stickerOnlyImg,
      url: "https://",
    },
    {
      name: "STICKER 1.0",
      desc: "Sticker Sharing",
      img: sticker1Img,
      url: "https://",
    },
    {
      name: "STICKER 2.0",
      desc: "Sticker Sharing",
      img: sticker2Img,
      url: "https://",
    },
    {
      name: "ANIME",
      desc: "Discussion",
      img: animeImg,
      url: "https://",
    },
    {
      name: "CRYPTO",
      desc: "Discussion",
      img: cryptoImg,
      url: "https://",
    },
    {
      name: "BOT",
      desc: "Whatsapp Bot",
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
      desc: "Discussion",
      img: gamingImg,
      url: "https://",
    },
    {
      name: "STUDIES",
      desc: "Discussion",
      img: studiesImg,
      url: "https://",
    },
    {
      name: "SPORTS",
      desc: "Discussion",
      img: sportsImg,
      url: "https://",
    },
    {
      name: "FOOD",
      desc: "Discussion",
      img: foodImg,
      url: "https://",
    },
    {
      name: "AUTOMOBILE",
      desc: "Discussion",
      img: autoImg,
      url: "https://",
    },
  ];
  return wagroups;
}
