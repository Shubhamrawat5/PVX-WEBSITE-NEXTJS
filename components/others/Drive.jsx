import React from "react";
import Image from "next/image";

export default function Drive() {
  return (
    <section id="drive-section" className="section">
      <h2 className="section-heading">SHARED DRIVE</h2>
      <p className="subheading-p">
        Access all Movies, Series, Anime, Courses, PC Games, Softwares in one
        place!
      </p>
      <div className="drive-container">
        <Image
          className="drive-img"
          src="/static/drive.png"
          alt="drive"
          width="600"
          height="350"
        />
        <p className="drive-text subheading-p">
          Join PVX Shared Drive
          <br />
          <a
            href="https://groups.google.com/g/pvx-movies"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here for link.
          </a>
          <br />
          1) Open in desktop mode
          <br />
          2) Join Group
          <br />
          (an error message can be displayed: &quot;You don&apos;t have
          permission to access this content&quot;, but ignore it!)
          <br />
          3) Open Google drive app
          <br />
          4) Go to &quot;Files&quot;, then &quot;Shared drives&quot; - Adi
          <br />
          Enjoy!
          <br />
          <br />- Managed by Aditya Mukherjee
        </p>
      </div>
    </section>
  );
}
