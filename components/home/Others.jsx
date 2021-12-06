export default function Others() {
  return (
    <section id="achieve-section" className="section">
      <h2 className="section-heading">OTHERS</h2>
      <div className="achieve-container">
        <div className="achieve-box unread">
          <img src="./static/pvx/unread.jpg" alt="unread" />
          <p className="subheading-p">
            Yes it is real! Unread message over some years. <br /> Credits:
            Hritik Jain
          </p>
        </div>

        {/* <div  className="achieve-box donation">
          <img  src={certiImg} alt="certificate" />
          <p>Donations collected by PVX in Feb 2020</p>
        </div> */}

        <div className="achieve-box tournament">
          <div className="winners">
            <div className="winners-2">
              <img src="./static/medal 2.png" alt="2" className="medal-img" />
              <p>Nikunj NJV</p>
            </div>
            <div className="winners-1">
              <img src="./static/medal 1.png" alt="1" className="medal-img" />
              <p>Ash</p>
            </div>
            <div className="winners-3">
              <img src="./static/medal 3.png" alt="3" className="medal-img" />
              <p>Sweeton</p>
            </div>
          </div>
          <p className="subheading-p">PVX CHESS TOURNAMENT (12/08/21)</p>
        </div>
      </div>
    </section>
  );
}
