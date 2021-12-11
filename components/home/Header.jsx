import Image from "next/image";

export default function Header() {
  return (
    <header id="header" className="section">
      <div id="header-section">
        <div id="logo">
          <Image
            src="/static/group/main.jpg"
            alt="logo"
            layout="fill"
            priority
          />
        </div>
        <h1 className="heading">&lt;&#123;PVX&#125;&gt; COMMUNITY ❤️</h1>
        <p className="subheading">Created by You, 03/07/16</p>
        {/* <img id="edit-icon" src="./static/edit.jpg" alt="edit" /> */}
      </div>
    </header>
  );
}
