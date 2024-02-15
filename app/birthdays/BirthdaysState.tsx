import { Bday } from "./page";

const janImg = "/static/month/jan.png";
const febImg = "/static/month/feb.png";
const marchImg = "/static/month/march.png";
const aprilImg = "/static/month/april.png";
const mayImg = "/static/month/may.png";
const juneImg = "/static/month/june.png";
const julyImg = "/static/month/july.png";
const augImg = "/static/month/aug.png";
const sepImg = "/static/month/sep.png";
const octImg = "/static/month/oct.png";
const novImg = "/static/month/nov.png";
const decImg = "/static/month/dec.png";

export interface Month {
  name: string;
  id: number;
  bdays: Bday[];
  img: string;
  headerColor: string;
  translateY: string;
}

export default function BirhdayState() {
  const months: Month[] = [
    {
      name: "January",
      id: 1,
      bdays: [],
      img: janImg,
      headerColor: "#0086ca",
      translateY: "translate-y-6",
    },
    {
      name: "February",
      id: 2,
      bdays: [],
      img: febImg,
      headerColor: "#01b7da",
      translateY: "translate-y-7",
    },
    {
      name: "March",
      id: 3,
      bdays: [],
      img: marchImg,
      headerColor: "#fea8c5",
      translateY: "translate-y-5",
    },
    {
      name: "April",
      id: 4,
      bdays: [],
      img: aprilImg,
      headerColor: "#01c4a0",
      translateY: "translate-y-7",
    },
    {
      name: "May",
      id: 5,
      bdays: [],
      img: mayImg,
      headerColor: "#cbda00",
      translateY: "translate-y-7",
    },
    {
      name: "June",
      id: 6,
      bdays: [],
      img: juneImg,
      headerColor: "#01a923",
      translateY: "translate-y-6",
    },
    {
      name: "July",
      id: 7,
      bdays: [],
      img: julyImg,
      headerColor: "#00a965",
      translateY: "translate-y-7",
    },
    {
      name: "August",
      id: 8,
      bdays: [],
      img: augImg,
      headerColor: "#007a7f",
      translateY: "translate-y-6",
    },
    {
      name: "September",
      id: 9,
      bdays: [],
      img: sepImg,
      headerColor: "#fec200",
      translateY: "translate-y-10",
    },
    {
      name: "October",
      id: 10,
      bdays: [],
      img: octImg,
      headerColor: "#fd9e01",
      translateY: "translate-y-11",
    },
    {
      name: "November",
      id: 11,
      bdays: [],
      img: novImg,
      headerColor: "#fe7437",
      translateY: "translate-y-8",
    },
    {
      name: "December",
      id: 12,
      bdays: [],
      img: decImg,
      headerColor: "#01408a",
      translateY: "translate-y-4",
    },
  ];
  return months;
}
