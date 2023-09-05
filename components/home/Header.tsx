import React from "react";
import Image from "next/image";

export default function Header(props: {
  // eslint-disable-next-line no-unused-vars
  showGameHandler: (value: boolean) => void;
}) {
  const { showGameHandler } = props;

  return (
    <header className="h-screen flex items-center justify-center flex-col ">
      <div className="w-64 h-64 relative rounded-full overflow-hidden">
        <Image
          className=" border-4 rounded-full"
          src="/static/group/main.jpg"
          alt="logo"
          fill
          priority
          onClick={() => showGameHandler(true)}
        />
      </div>
      <h1 className="text-4xl mt-6 mb-4">
        &lt;&#123;PVX&#125;&gt; COMMUNITY ❤️
      </h1>
      <p className="text-lg text-gray-400">Created by You, 03/07/16</p>
    </header>
  );
}
