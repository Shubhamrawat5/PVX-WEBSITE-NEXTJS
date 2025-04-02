const stickerOnlyImg = "/static/group/stickeronly.jpg";
const communityImg = "/static/group/main.jpg";
const techImg = "/static/group/tech.jpg";
const tech2Img = "/static/group/tech2.jpg";
const progImg = "/static/group/prog.jpg";
const moviesImg = "/static/group/movies.jpg";
const memeImg = "/static/group/meme.jpg";
const fitnessImg = "/static/group/fitness.jpg";
const sticker1Img = "/static/group/sticker1.jpg";
// const sticker2Img = "/static/group/sticker2.jpg";
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
      alt: "community telegram",
      img: communityTgImg,
      link: "https://t.me/PVX_Community_Group",
      isCopied: false,
    },
    {
      name: "TECH NEWS",
      id: "2",
      desc: "Channel",
      alt: "tech news telegram",
      img: techImg,
      link: "https://t.me/pvxtechnews",
      isCopied: false,
    },
    {
      name: "MOVIES",
      id: "3",
      desc: "Discussion",
      alt: "movies series telegram",
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
      alt: "community facebook",
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
      alt: "community discord",
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
      alt: "community whatsapp",
      img: communityImg,
      link: "",
      id: "919557666582-1467533860@g.us",
      isCopied: false,
    },
    {
      name: "TECH DISCUSS",
      desc: "Discussion",
      alt: "tech discussion",
      img: techImg,
      link: "",
      id: "919557666582-1551290369@g.us",
      isCopied: false,
    },
    {
      name: "TECH NEWS",
      desc: "Admin Only",
      alt: "tech news",
      img: tech2Img,
      link: "",
      id: "919557666582-1548337792@g.us",
      isCopied: false,
    },
    {
      name: "PROGRAMMERS",
      desc: "Discussion",
      alt: "programmers",
      img: progImg,
      link: "",
      id: "919557666582-1584193120@g.us",
      isCopied: false,
    },
    {
      name: "MOVIES",
      desc: "Discussion",
      alt: "movies series",
      img: moviesImg,
      link: "",
      id: "919557666582-1506690003@g.us",
      isCopied: false,
    },
    {
      name: "SPORTS",
      desc: "Discussion",
      alt: "sports",
      img: sportsImg,
      link: "",
      id: "919557666582-1559476348@g.us",
      isCopied: false,
    },
    {
      name: "FITNESS",
      desc: "Discussion",
      alt: "fitness",
      img: fitnessImg,
      link: "",
      id: "120363166048344466@g.us",
      isCopied: false,
    },
    {
      name: "MEMES",
      desc: "Memes Sharing",
      alt: "memes",
      img: memeImg,
      link: "",
      id: "919557666582-1551346051@g.us",
      isCopied: false,
    },
    {
      name: "STICKER",
      desc: "Sticker Sharing",
      alt: "sticker chat",
      img: sticker1Img,
      link: "",
      id: "919557666582-1580308963@g.us",
      isCopied: false,
    },
    {
      name: "STICKER ONLY 1.0",
      desc: "Admin Only",
      alt: "sticker only 1.0",
      img: stickerOnlyImg,
      link: "",
      id: "919557666582-1628610549@g.us",
      isCopied: false,
    },
    {
      name: "STICKER ONLY 2.0",
      desc: "Admin Only",
      alt: "sticker only 2.0",
      img: stickerOnlyImg,
      link: "",
      id: "919557666582-1586018947@g.us",
      isCopied: false,
    },
    {
      name: "ANIME",
      desc: "Discussion",
      alt: "anime",
      img: animeImg,
      link: "",
      id: "919557666582-1556821647@g.us",
      isCopied: false,
    },
    {
      name: "CRYPTO",
      desc: "Discussion",
      alt: "crypto discussion",
      img: cryptoImg,
      link: "",
      id: "120363329317457388@g.us",
      isCopied: false,
    },
    {
      name: "GAMING",
      desc: "Discussion",
      alt: "gaming",
      img: gamingImg,
      link: "",
      id: "17028054150-1608057174@g.us",
      isCopied: false,
    },
    {
      name: "BOT",
      desc: "Whatsapp Bot",
      alt: "whatsapp bot",
      img: botImg,
      link: "",
      id: "919675642959-1606755119@g.us",
      isCopied: false,
    },
    {
      name: "STUDIES",
      desc: "Discussion",
      alt: "studies",
      img: studiesImg,
      link: "",
      id: "919557666582-1617595892@g.us",
      isCopied: false,
    },
    {
      name: "FOOD",
      desc: "Discussion",
      alt: "food",
      img: foodImg,
      link: "",
      id: "120363039452453480@g.us",
      isCopied: false,
    },
  ];
  return whatsappGroups;
}
