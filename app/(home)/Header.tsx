import React from "react";
// import Image from "next/image";
// import Game from "../../components/home/Game";

export default function Header() {
  // const [showGame, setShowGame] = useState(false);

  // const showGameHandler = (value: boolean) => {
  //   setShowGame(value);
  // };

  /* {showGame ? (
        <Game showGameHandler={showGameHandler} />
      ) : (
        <>
          <Header showGameHandler={showGameHandler} />
          <Groups groupsDB={groupsDB} isEnabled={isEnabled} />
          <Admin />
        </>
      )} */

  return (
    // eslint-disable-next-line max-len
    // <section className="min-h-screen flex items-center justify-center flex-col bg-space bg-center bg-cover gap-2">
    <section className="pt-32 pb-10 bg-gradient-to-r from-gray-950 to-gray-900">
      {/* <div className="rounded-full">
        <Image
          className="m-auto shadow-lg shadow-gray-600 rounded-full w-52 h-52 sm:w-64 sm:h-64"
          src="/static/group/main.jpg"
          alt="logo"
          height="256"
          width="256"
          priority
          // onClick={() => showGameHandler(true)}
        />
      </div> */}
      {/* <Image
        className="m-auto hidden"
        src="/static/group3.png"
        alt="logo"
        height="450"
        width="450"
        priority
        quality={100}
      /> */}
      <h1 className="text-2xl sm:text-4xl mt-6 mb-2">
        &lt;&#123;PVX&#125;&gt; COMMUNITY ❤️
      </h1>
      <p className="text-base sm:text-lg text-gray-400">
        Created by You, 03/07/16
      </p>
    </section>
  );
}
