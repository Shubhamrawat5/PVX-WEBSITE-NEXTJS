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
const communityDiscordImg = "/static/group/discord.jpg";
const communityFbImg = "/static/group/fb.jpg";
const communityTgImg = "/static/group/tg-pvx.jpg";

// TODO: check all interface locations
export interface GroupData {
  name: string;
  id: string;
  desc: string;
  alt: string;
  img: string;
  link: string;
  isCopied: boolean;
}

export function telegramGroupsState() {
  const telegramGroups: GroupData[] = [
    {
      name: "COMMUNITY",
      id: "1",
      desc: "Group Chat",
      alt: "pvx-community-telegram",
      img: communityTgImg,
      link: "https://t.me/PVX_Community_Group",
      isCopied: false,
    },
    {
      name: "TECH NEWS",
      id: "2",
      desc: "Channel",
      alt: "pvx-tech-news-telegram",
      img: techImg,
      link: "https://t.me/pvxtechnews",
      isCopied: false,
    },
    {
      name: "MOVIES",
      id: "3",
      desc: "Discussion",
      alt: "pvx-movies-series-telegram",
      img: moviesImg,
      link: "https://t.me/joinchat/J7FzKB1uYt0xNDVl",
      isCopied: false,
    },
  ];
  return telegramGroups;
}

export function facebookGroupsState() {
  const facebookGroups: GroupData[] = [
    {
      name: "COMMUNITY",
      id: "1",
      desc: "Posting group",
      alt: "pvx-community-facebook",
      img: communityFbImg,
      link: "https://facebook.com/groups/pvxgaming/",
      isCopied: false,
    },
  ];
  return facebookGroups;
}

export function discordGroupsState() {
  const discordGroups: GroupData[] = [
    {
      name: "COMMUNITY",
      id: "1",
      desc: "Channel",
      alt: "pvx-community-discord",
      img: communityDiscordImg,
      link: "https://discord.gg/zMktzNzx9U",
      isCopied: false,
    },
  ];
  return discordGroups;
}

export function whatsappGroupsState() {
  const whatsappGroups: GroupData[] = [
    {
      name: "COMMUNITY",
      desc: "Main Group",
      alt: "pvx-community",
      img: communityImg,
      link: "",
      id: "919557666582-1467533860@g.us",
      isCopied: false,
    },
    {
      name: "TECH DISCUSS",
      desc: "Discussion",
      alt: "pvx-tech-discussion",
      img: techImg,
      link: "",
      id: "919557666582-1551290369@g.us",
      isCopied: false,
    },
    {
      name: "TECH NEWS",
      desc: "Admin Only",
      alt: "pvx-tech-news",
      img: tech2Img,
      link: "",
      id: "919557666582-1548337792@g.us",
      isCopied: false,
    },
    {
      name: "PROGRAMMERS",
      desc: "Discussion",
      alt: "pvx-programmers",
      img: progImg,
      link: "",
      id: "919557666582-1584193120@g.us",
      isCopied: false,
    },
    {
      name: "MOVIES",
      desc: "Discussion",
      alt: "pvx-movies-series",
      img: moviesImg,
      link: "",
      id: "919557666582-1506690003@g.us",
      isCopied: false,
    },
    {
      name: "SPORTS",
      desc: "Discussion",
      alt: "pvx-sports",
      img: sportsImg,
      link: "",
      id: "919557666582-1559476348@g.us",
      isCopied: false,
    },

    {
      name: "MEMES",
      desc: "Memes Sharing",
      alt: "pvx-memes",
      img: memeImg,
      link: "",
      id: "919557666582-1551346051@g.us",
      isCopied: false,
    },
    {
      name: "STICKER",
      desc: "Sticker Sharing",
      alt: "pvx-sticker-chat",
      img: sticker1Img,
      link: "",
      id: "919557666582-1580308963@g.us",
      isCopied: false,
    },
    {
      name: "STICKER ONLY 1.0",
      desc: "Admin Only",
      alt: "pvx-sticker-only-1.0",
      img: stickerOnlyImg,
      link: "",
      id: "919557666582-1628610549@g.us",
      isCopied: false,
    },
    {
      name: "STICKER ONLY 2.0",
      desc: "Admin Only",
      alt: "pvx-sticker-only-2.0",
      img: stickerOnlyImg,
      link: "",
      id: "919557666582-1586018947@g.us",
      isCopied: false,
    },
    {
      name: "ANIME",
      desc: "Discussion",
      alt: "pvx-anime",
      img: animeImg,
      link: "",
      id: "919557666582-1556821647@g.us",
      isCopied: false,
    },
    {
      name: "CRYPTO",
      desc: "Discussion",
      alt: "pvx-crypto-discussion",
      img: cryptoImg,
      link: "",
      id: "918329198682-1614096949@g.us",
      isCopied: false,
    },
    {
      name: "GAMING",
      desc: "Discussion",
      alt: "pvx-gaming",
      img: gamingImg,
      link: "",
      id: "17028054150-1608057174@g.us",
      isCopied: false,
    },
    {
      name: "BOT",
      desc: "Whatsapp Bot",
      alt: "pvx-whatsapp-bot",
      img: botImg,
      link: "",
      id: "919675642959-1606755119@g.us",
      isCopied: false,
    },
    {
      name: "STUDIES",
      desc: "Discussion",
      alt: "pvx-studies",
      img: studiesImg,
      link: "",
      id: "919557666582-1617595892@g.us",
      isCopied: false,
    },
    {
      name: "FOOD",
      desc: "Discussion",
      alt: "pvx-food",
      img: foodImg,
      link: "",
      id: "120363039452453480@g.us",
      isCopied: false,
    },
    {
      name: "STATUS",
      desc: "Whatsapp Status",
      alt: "pvx-whatsapp-status",
      img: statusImg,
      link: "",
      id: "919557666582-1627834788@g.us",
      isCopied: false,
    },
  ];
  return whatsappGroups;
}