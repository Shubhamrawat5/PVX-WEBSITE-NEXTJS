import React from "react";
import Image from "next/image";

const memeImg = "/static/group/meme.jpg";
const animeImg = "/static/group/anime.jpg";
const sticker1Img = "/static/group/sticker1.jpg";
const techImg = "/static/group/tech.jpg";
const progImg = "/static/group/prog.jpg";
const botImg = "/static/group/bot.jpg";

export default function Events() {
  const threeWinnerEvents = [
    {
      first: "Ash",
      second: "NJV",
      third: "Sweeton",
      description: "CHESS TOURNAMENT (12/08/21)",
    },
    {
      first: "Sakshat",
      second: "Cheems",
      third: "Tejash",
      description: "SNAKE GAME CONTEST (23/06/22)",
    },
  ];

  const singleWinnerEvents = [
    {
      first: "Harsh",
      image: memeImg,
      imageAlt: "pvx-memes",
      description: "PVX MEME LOGO COMPETITION (12/07/22)",
    },
    {
      first: "Doku Doku Noooo",
      image: sticker1Img,
      imageAlt: "pvx-sticker",
      description: "PVX STICKER LOGO COMPETITION (25/07/22)",
    },
    {
      first: "Satya",
      image: animeImg,
      imageAlt: "pvx-anime",
      description: "PVX ANIME LOGO COMPETITION (26/09/22)",
    },
    {
      first: "Spandan Ghosh",
      image: techImg,
      imageAlt: "pvx-tech",
      description: "PVX TECH LOGO COMPETITION (18/11/22)",
    },
    {
      first: "Satya",
      image: progImg,
      imageAlt: "pvx-programmers",
      description: "PVX PROGRAMMERS LOGO COMPETITION (07/02/23)",
    },
    {
      first: "Ikshwaku",
      image: botImg,
      imageAlt: "pvx-bot",
      description: "PVX BOT LOGO COMPETITION (02/05/23)",
    },
  ];

  return (
    <section className="pt-20 bg-gradient-to-r from-gray-950 to-gray-900">
      <h2 className="text-2xl text-red-600 border-red-600 border-2 inline-block rounded px-4 py-2 mb-8 font-bold">
        EVENTS
      </h2>
      {/* TODO: REFACTOR NEEDED!!! */}
      <div className="flex items-center justify-center flex-wrap gap-6">
        {threeWinnerEvents.map((event) => (
          <div
            className="bg-gray-800 rounded-lg py-5 px-10"
            key={event.description}
          >
            <div className="mt-4 mb-20 flex justify-center font-Inter">
              <div className="translate-y-10">
                <Image
                  className="m-auto"
                  src="/static/medal 2.png"
                  alt="2"
                  height="55"
                  width="55"
                />
                <p className="mt-2">{event.second}</p>
              </div>
              <div>
                <Image
                  className="m-auto mx-10"
                  src="/static/medal 1.png"
                  alt="1"
                  height="55"
                  width="55"
                />
                <p className="mt-2">{event.first}</p>
              </div>
              <div className="translate-y-12">
                <Image
                  className="m-auto"
                  src="/static/medal 3.png"
                  alt="3"
                  height="55"
                  width="55"
                />
                <p className="mt-2">{event.third}</p>
              </div>
            </div>
            <p className="mt-4 mb-2 font-Inter border-b border-b-gray-600 pb-2  text-indigo-400 ">
              Winners
            </p>
            <p className="text-sm text-gray-400 ">{event.description}</p>
          </div>
        ))}

        {singleWinnerEvents.map((event) => (
          <div
            className="bg-gray-800 rounded-lg py-5 px-10"
            key={event.description}
          >
            <Image
              className="m-auto"
              src={event.image}
              alt={event.imageAlt}
              height="160"
              width="170"
            />
            <p className="mt-4 mb-2 font-Inter border-b border-b-gray-600 pb-2  text-indigo-400">
              Winner: {event.first}
            </p>
            <p className="text-sm text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
