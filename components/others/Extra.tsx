import React from "react";
import Image from "next/image";

const memeImg = "/static/group/meme.jpg";
const animeImg = "/static/group/anime.jpg";
const sticker1Img = "/static/group/sticker1.jpg";
const techImg = "/static/group/tech.jpg";
const progImg = "/static/group/prog.jpg";
const botImg = "/static/group/bot.jpg";

export default function Extra() {
  return (
    <>
      <section className="pt-20">
        <h2 className="text-2xl text-red-600 border-red-600 border-2 inline-block rounded px-4 py-2 mb-8">
          EVENTS
        </h2>
        {/* TODO: REFACTOR NEEDED!!! */}
        <div className="flex items-center justify-center flex-wrap">
          <div className="bg-gray-800 rounded-lg py-5 px-10 m-4">
            <div className="mt-4 mb-20 flex justify-center">
              <div className="translate-y-10">
                <Image
                  className="m-auto"
                  src="/static/medal 2.png"
                  alt="2"
                  height="55"
                  width="55"
                />
                <p>NJV</p>
              </div>
              <div>
                <Image
                  className="m-auto mx-10"
                  src="/static/medal 1.png"
                  alt="1"
                  height="55"
                  width="55"
                />
                <p>Ash</p>
              </div>
              <div className="translate-y-12">
                <Image
                  className="m-auto"
                  src="/static/medal 3.png"
                  alt="3"
                  height="55"
                  width="55"
                />
                <p>Sweeton</p>
              </div>
            </div>
            <p className="mt-3 mb-2">CHESS TOURNAMENT (12/08/21)</p>
          </div>

          <div className="bg-gray-800 rounded-lg py-5 px-10 m-4">
            <div className="mt-4 mb-20 flex justify-center">
              <div className="translate-y-10">
                <Image
                  className="m-auto"
                  src="/static/medal 2.png"
                  alt="2"
                  height="55"
                  width="55"
                />
                <p>Cheems</p>
              </div>
              <div>
                <Image
                  className="m-auto mx-10"
                  src="/static/medal 1.png"
                  alt="1"
                  height="55"
                  width="55"
                />
                <p>Sakshat</p>
              </div>
              <div className="translate-y-12">
                <Image
                  className="m-auto"
                  src="/static/medal 3.png"
                  alt="3"
                  height="55"
                  width="55"
                />
                <p>Tejash</p>
              </div>
            </div>
            <p className="mt-3 mb-2">SNAKE GAME CONTEST (23/06/22)</p>
          </div>

          <div className="bg-gray-800 rounded-lg py-5 px-10 m-4">
            <Image
              className="m-auto"
              src={memeImg}
              alt="pvx memes"
              height="160"
              width="170"
            />
            <p className="mt-3 mb-2">Winner: Harsh</p>
            <p className="text-sm text-gray-400">
              PVX MEME LOGO COMPETITION (12/07/22)
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg py-5 px-10 m-4">
            <Image
              className="m-auto"
              src={sticker1Img}
              alt="pvx sticker"
              height="160"
              width="170"
            />
            <p className="mt-3 mb-2">Winner: Doku Doku Noooo</p>
            <p className="text-sm text-gray-400">
              PVX STICKER LOGO COMPETITION (25/07/22)
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg py-5 px-10 m-4">
            <Image
              className="m-auto"
              src={animeImg}
              alt="pvx anime"
              height="160"
              width="170"
            />
            <p className="mt-3 mb-2">Winner: Satya</p>
            <p className="text-sm text-gray-400">
              PVX ANIME LOGO COMPETITION (26/09/22)
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg py-5 px-10 m-4">
            <Image
              className="m-auto"
              src={techImg}
              alt="pvx tech"
              height="160"
              width="170"
            />
            <p className="mt-3 mb-2">Winner: Spandan Ghosh</p>
            <p className="text-sm text-gray-400">
              PVX TECH LOGO COMPETITION (18/11/22)
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg py-5 px-10 m-4">
            <Image
              className="m-auto"
              src={progImg}
              alt="pvx tech"
              height="160"
              width="170"
            />
            <p className="mt-3 mb-2">Winner: Satya</p>
            <p className="text-sm text-gray-400">
              PVX PROGRAMMERS LOGO COMPETITION (07/02/23)
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg py-5 px-10 m-4">
            <Image
              className="m-auto"
              src={botImg}
              alt="pvx tech"
              height="160"
              width="170"
            />
            <p className="mt-3 mb-2">Winner: Ikshwaku</p>
            <p className="text-sm text-gray-400">
              PVX BOT LOGO COMPETITION (02/05/23)
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-950">
        <h2 className="text-2xl text-red-600 border-red-600 border-2 inline-block rounded px-4 py-2 mb-8">
          SCREENSHOTS
        </h2>
        <div className="flex items-center justify-center flex-wrap">
          <div className="bg-gray-800 rounded-lg py-5 px-10 m-4">
            <Image
              className="m-auto"
              src="/static/pvx/certificate1.jpg"
              alt="certificate"
              height="350"
              width="500"
            />
            <p className="mt-3 mb-2">Donations collected by PVX in Feb 2020</p>
          </div>
          <div className="bg-gray-800 rounded-lg py-5 px-10 m-4">
            <Image
              className="m-auto"
              src="/static/pvx/certificate2.jpg"
              alt="certificate"
              height="600"
              width="480"
            />
            <p className="mt-3 mb-2">
              Donations collected by PVX in June 2023 (for odisha train
              collision)
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg py-5 px-10 m-4">
            <Image
              className="m-auto"
              src="/static/pvx/unread.jpg"
              alt="unread"
              height="280"
              width="600"
            />
            <p className="mt-3 mb-2">
              Yes it is real! Unread message over some years. <br /> Credits:
              Hritik Jain
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
