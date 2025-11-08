import React from "react";
import Image from "next/image";

const events = [
  {
    title: "Chess Tournament",
    date: "(12/08/21)",
    winners: [
      { name: "Ash", place: 1 },
      { name: "NJV", place: 2 },
      { name: "Sweeton", place: 3 },
    ],
  },
  {
    title: "Snake Game Contest",
    date: "(23/06/22)",
    winners: [
      { name: "Sakshat", place: 1 },
      { name: "Cheems", place: 2 },
      { name: "Tejash", place: 3 },
    ],
  },
  {
    title: "Meme Logo Competition",
    date: "(12/07/22)",
    image: "/static/group/meme.jpg",
    winners: [{ name: "Harsh", place: 1 }],
  },
  {
    title: "Sticker Logo Competition",
    date: "(25/07/22)",
    image: "/static/group/sticker1.jpg",
    winners: [{ name: "Doku Doku Noooo", place: 1 }],
  },
  {
    title: "Anime Logo Competition",
    date: "(26/09/22)",
    image: "/static/group/anime.jpg",
    winners: [{ name: "Satya", place: 1 }],
  },
  {
    title: "Tech Logo Competition",
    date: "(18/11/22)",
    image: "/static/group/tech.jpg",
    winners: [{ name: "Spandan Ghosh", place: 1 }],
  },
  {
    title: "Programmers Logo Competition",
    date: "(07/02/23)",
    image: "/static/group/prog.jpg",
    winners: [{ name: "Satya", place: 1 }],
  },
  {
    title: "Bot Logo Competition",
    date: "(02/05/23)",
    image: "/static/group/bot.jpg",
    winners: [{ name: "Ikshwaku", place: 1 }],
  },
  {
    title: "Sports Logo Competition",
    date: "(20/10/24)",
    image: "/static/group/sports.jpg",
    winners: [{ name: "Satya", place: 1 }],
  },
];

export default function Competition() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white font-Inter">
      <h2 className="text-3xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-cyan-400 text-center mb-10">
        Competition Results 🏆
      </h2>
      {/* Responsive Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
        {events.map((event) => (
          <div
            key={event.title}
            className="flex flex-col items-center bg-gray-800/30 backdrop-blur-md border border-gray-700/60 rounded-2xl p-5 hover:bg-gray-800/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-500"
          >
            {/* Logo image (only for single-winner events) */}
            {event.image && (
              <div className="relative w-[70%] md:w-[60%] overflow-hidden rounded-xl shadow-md mb-4">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={220}
                  height={220}
                  className="object-cover w-28 h-28 rounded-xl hover:scale-105 m-auto transition-transform duration-700"
                />
              </div>
            )}

            {/* Event Title & Date */}
            <h3 className="text-xl font-semibold text-gray-100 tracking-wide text-center">
              {event.title}
            </h3>
            <p className="text-xs text-gray-400 mb-4 mt-1 text-center">
              {event.date}
            </p>

            {/* Multi-winner events */}
            {event.winners.length > 1 ? (
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                {event.winners.map((winner) => {
                  let winnerStyle = "bg-gray-800/60 text-gray-400"; // default

                  if (winner.place === 1) {
                    winnerStyle =
                      "bg-gradient-to-r from-yellow-400/20 to-yellow-300/10 text-yellow-300";
                  } else if (winner.place === 2) {
                    winnerStyle = "bg-gray-700/50 text-gray-200";
                  }

                  return (
                    <div
                      key={winner.name}
                      className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${winnerStyle}`}
                    >
                      <Image
                        src={`/static/icons/medal ${winner.place}.png`}
                        alt={`medal-${winner.place}`}
                        width={20}
                        height={20}
                      />
                      <span>{winner.name}</span>
                    </div>
                  );
                })}
              </div>
            ) : (
              // Single-winner layout
              <div className="mt-3 flex justify-center">
                <div className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-400/20 to-cyan-300/10 text-cyan-300 flex items-center gap-2">
                  <Image
                    src="/static/icons/medal 1.png"
                    alt="1st"
                    width={20}
                    height={20}
                  />
                  <span>{event.winners[0].name}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
