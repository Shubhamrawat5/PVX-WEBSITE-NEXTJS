import Image from "next/image";

export default function Telegram() {
  //TODO:CREATE ARRAY
  return (
    <div className="tg groups">
      <h3 className="app-heading">TELEGRAM</h3>

      <div className="group-container">
        <a
          href="https://t.me/PVX_Community_Group"
          target="_blank"
          rel="noopener noreferrer"
          className="tg-community"
        >
          <div className="card">
            <h4 className="group-name">COMMUNITY</h4>
            <div className="group-dp">
              <Image src="/static/group/tg-pvx.jpg" alt="dp" layout="fill" />
            </div>
            <p className="group-info">(Group Chat)</p>
          </div>
        </a>

        <a
          href="https://t.me/pvxtechnews"
          target="_blank"
          rel="noopener noreferrer"
          className="tg-technews"
        >
          <div className="card">
            <h4 className="group-name">TECH NEWS</h4>
            <div className="group-dp">
              <Image src="/static/group/tech.jpg" alt="dp" layout="fill" />
            </div>
            <p className="group-info">(For Daily Tech News)</p>
          </div>
        </a>

        <a
          href="https://t.me/joinchat/J7FzKB1uYt0xNDVl"
          target="_blank"
          rel="noopener noreferrer"
          className="tg-movies"
        >
          <div className="card">
            <h4 className="group-name">MOVIES</h4>
            <div className="group-dp">
              <Image src="/static/group/movies.jpg" alt="dp" layout="fill" />
            </div>
            <p className="group-info">(For any Movies & Series)</p>
          </div>
        </a>

        <a
          href="https://t.me/PVXMIRROR"
          target="_blank"
          rel="noopener noreferrer"
          className="tg-mirror"
        >
          <div className="card">
            <h4 className="group-name">MIRROR</h4>
            <div className="group-dp">
              <Image src="/static/group/mirror.jpg" alt="dp" layout="fill" />
            </div>
            <p className="group-info">(For Copying Files to Gdrive)</p>
          </div>
        </a>
      </div>
    </div>
  );
}
