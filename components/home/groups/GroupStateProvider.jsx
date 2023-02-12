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
      url: "https://",
    },
    {
      name: "TECH DISCUSS",
      desc: "Discussion",
      alt: "pvx tech discussion",
      img: techImg,
      url: "https://",
    },
    {
      name: "TECH NEWS",
      desc: "Admin Only",
      alt: "pvx tech news",
      img: tech2Img,
      url: "https://",
    },
    {
      name: "PROGRAMMERS",
      desc: "Discussion",
      alt: "pvx programmers",
      img: progImg,
      url: "https://",
    },
    {
      name: "MOVIES",
      desc: "Discussion",
      alt: "pvx movies series",
      img: moviesImg,
      url: "https://",
    },
    {
      name: "STATUS",
      desc: "Whatsapp Status",
      alt: "pvx whatsapp status",
      img: statusImg,
      url: "https://",
    },
    {
      name: "MEMES",
      desc: "Memes Sharing",
      alt: "pvx memes",
      img: memeImg,
      url: "https://",
    },
    {
      name: "STICKER ONLY 1.0",
      desc: "Admin Only",
      alt: "pvx sticker only 1.0",
      img: stickerOnlyImg,
      url: "https://",
    },
    {
      name: "STICKER ONLY 2.0",
      desc: "Admin Only",
      alt: "pvx sticker only 2.0",
      img: stickerOnlyImg,
      url: "https://",
    },
    {
      name: "STICKER 1.0",
      desc: "Sticker Sharing",
      alt: "pvx sticker 1.0",
      img: sticker1Img,
      url: "https://",
    },
    {
      name: "ANIME",
      desc: "Discussion",
      alt: "pvx anime",
      img: animeImg,
      url: "https://",
    },
    {
      name: "CRYPTO",
      desc: "Discussion",
      alt: "pvx crypto discussion",
      img: cryptoImg,
      url: "https://",
    },
    {
      name: "BOT",
      desc: "Whatsapp Bot",
      alt: "pvx whatsapp bot",
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
      alt: "pvx gaming",
      img: gamingImg,
      url: "https://",
    },
    {
      name: "STUDIES",
      desc: "Discussion",
      alt: "pvx studies",
      img: studiesImg,
      url: "https://",
    },
    {
      name: "SPORTS",
      desc: "Discussion",
      alt: "pvx sports",
      img: sportsImg,
      url: "https://",
    },
    {
      name: "FOOD",
      desc: "Discussion",
      alt: "pvx food",
      img: foodImg,
      url: "https://",
    },
    {
      name: "AUTOMOBILE",
      desc: "Discussion",
      alt: "pvx automobile",
      img: autoImg,
      url: "https://",
    },
  ];
  return wagroups;
}
