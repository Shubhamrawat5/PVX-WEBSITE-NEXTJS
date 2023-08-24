import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

export default function Header(props: {
  // eslint-disable-next-line no-unused-vars
  showGameHandler: (value: boolean) => void;
}) {
  const { showGameHandler } = props;

  return (
    <header id="header" className="section">
      <div id="header-section">
        <div id="logo">
          <Image
            src="/static/group/main.jpg"
            alt="logo"
            fill
            priority
            onClick={() => showGameHandler(true)}
          />
        </div>
        <h1 className="heading">&lt;&#123;PVX&#125;&gt; COMMUNITY ❤️</h1>
        <p className="subheading">Created by You, 03/07/16</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  showGameHandler: PropTypes.func.isRequired,
};
