import Image from "next/image";
const memeImg = "/static/group/meme.jpg";
const animeImg = "/static/group/anime.jpg";
const sticker1Img = "/static/group/sticker1.jpg";
const techImg = "/static/group/tech.jpg";

export default function Extra() {
  return (
    <>
      <section
        id="achieve-section"
        className="section"
        style={{
          paddingTop: "80px",
        }}
      >
        <h2 className="section-heading">CONTESTS</h2>
        <div className="achieve-container">
          {/* <div  className="achieve-box donation">
          <img  src={certiImg} alt="certificate" />
          <p>Donations collected by PVX in Feb 2020</p>
        </div> */}
          <div className="achieve-box tournament">
            <div className="winners">
              <div className="winners-2">
                <Image
                  src="/static/medal 2.png"
                  alt="2"
                  className="medal-img"
                  height="55"
                  width="55"
                />
                <p>Nikunj NJV</p>
              </div>
              <div className="winners-1">
                <Image
                  src="/static/medal 1.png"
                  alt="1"
                  className="medal-img"
                  height="55"
                  width="55"
                />
                <p>Ash</p>
              </div>
              <div className="winners-3">
                <Image
                  src="/static/medal 3.png"
                  alt="3"
                  className="medal-img"
                  height="55"
                  width="55"
                />
                <p>Sweeton</p>
              </div>
            </div>
            <p className="subheading-p">CHESS TOURNAMENT (12/08/21)</p>
          </div>

          <div className="achieve-box tournament">
            <div className="winners">
              <div className="winners-2">
                <Image
                  src="/static/medal 2.png"
                  alt="2"
                  className="medal-img"
                  height="55"
                  width="55"
                />
                <p>Cheems</p>
              </div>
              <div className="winners-1">
                <Image
                  src="/static/medal 1.png"
                  alt="1"
                  className="medal-img"
                  height="55"
                  width="55"
                />
                <p>Sakshat</p>
              </div>
              <div className="winners-3">
                <Image
                  src="/static/medal 3.png"
                  alt="3"
                  className="medal-img"
                  height="55"
                  width="55"
                />
                <p>Tejash</p>
              </div>
            </div>
            <p className="subheading-p">SNAKE GAME CONTEST (23/06/22)</p>
          </div>

          <div className="achieve-box tournament">
            <Image src={memeImg} alt="pvx memes" height="160" width="170" />
            <p className="subheading-p">Winner: Harsh</p>
            <p className="subheading-p">PVX MEME LOGO COMPETITION (12/07/22)</p>
          </div>

          <div className="achieve-box tournament">
            <Image
              src={sticker1Img}
              alt="pvx sticker"
              height="160"
              width="170"
            />
            <p className="subheading-p">Winner: Doku Doku Noooo</p>
            <p className="subheading-p">
              PVX STICKER LOGO COMPETITION (25/07/22)
            </p>
          </div>

          <div className="achieve-box tournament">
            <Image src={animeImg} alt="pvx anime" height="160" width="170" />
            <p className="subheading-p">Winner: Satya</p>
            <p className="subheading-p">
              PVX ANIME LOGO COMPETITION (26/09/22)
            </p>
          </div>

          <div className="achieve-box tournament">
            <Image src={techImg} alt="pvx tech" height="160" width="170" />
            <p className="subheading-p">Winner: Spandan Ghosh</p>
            <p className="subheading-p">PVX TECH LOGO COMPETITION (18/11/22)</p>
          </div>
        </div>
      </section>
      <section id="achieve-section" className="section">
        <h2 className="section-heading">SCREENSHOTS</h2>
        <div className="achieve-container">
          <div className="achieve-box unread">
            <Image
              src="/static/pvx/unread.jpg"
              alt="unread"
              height="280"
              width="600"
            />
            <p className="subheading-p">
              Yes it is real! Unread message over some years. <br /> Credits:
              Hritik Jain
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
