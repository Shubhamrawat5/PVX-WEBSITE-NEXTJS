import React from "react";
import Image from "next/image";

export default function Header(props: {
  // eslint-disable-next-line no-unused-vars
  showGameHandler: (value: boolean) => void;
}) {
  const { showGameHandler } = props;

  return (
    <section className="min-h-screen flex items-center justify-center flex-col bg-space bg-center bg-cover gap-2">
      <div className="rounded-full overflow-hidden">
        <Image
          className="border-4 rounded-full w-52 h-52 sm:w-64 sm:h-64"
          src="/static/group/main.jpg"
          alt="logo"
          height="256"
          width="256"
          priority
          onClick={() => showGameHandler(true)}
        />
      </div>
      <h1 className="text-2xl sm:text-4xl mt-2">
        &lt;&#123;PVX&#125;&gt; COMMUNITY ❤️
      </h1>
      <p className="text-base sm:text-lg text-gray-400">
        Created by You, 03/07/16
      </p>
    </section>
  );
}
