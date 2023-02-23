import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
export default function OtherGroups() {
  return (
    <>
      <div className="discord groups">
        <h3 className="app-heading">DISCORD</h3>
        <div className="group-container">
          <div className="card">
            <h4 className="group-name">COMMUNITY</h4>
            <p className="group-info">(Channel)</p>
            <div className="group-dp">
              <Image
                src="/static/group/discord.jpg"
                alt="pvz community discord"
                layout="fill"
              />
            </div>
            <div className="join-copy-wrapper">
              <a
                href="https://discord.gg/zMktzNzx9U"
                target="_blank"
                rel="noopener noreferrer"
                className="discord-community"
              >
                <p className="join-grp">JOIN GROUP</p>
              </a>
              <CopyToClipboard text="https://discord.gg/zMktzNzx9U">
                <div className="copy-link">
                  <Image
                    src="/static/copy.png"
                    alt="copy"
                    layout="fill"
                  ></Image>
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>

      <div className="fb groups">
        <h3 className="app-heading">FACEBOOK</h3>
        <div className="group-container">
          <div className="card">
            <h4 className="group-name">COMMUNITY</h4>
            <p className="group-info">(Posting group)</p>
            <div className="group-dp">
              <Image
                src="/static/group/fb.jpg"
                alt="pvx community facebook"
                layout="fill"
              />
            </div>
            <div className="join-copy-wrapper">
              <a
                href="https://facebook.com/groups/pvxgaming/"
                target="_blank"
                rel="noopener noreferrer"
                className="fb-community"
              >
                <p className="join-grp">JOIN GROUP</p>
              </a>
              <CopyToClipboard text="https://facebook.com/groups/pvxgaming/">
                <div className="copy-link">
                  <Image
                    src="/static/copy.png"
                    alt="copy"
                    layout="fill"
                  ></Image>
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>

      <div className="signal groups">
        <h3 className="app-heading">SIGNAL</h3>
        <div className="group-container">
          <div className="card">
            <h4 className="group-name">COMMUNITY</h4>
            <p className="group-info">(Group Chat)</p>
            <div className="group-dp">
              <Image
                src="/static/group/main.jpg"
                alt="pvx community signal"
                layout="fill"
              />
            </div>
            <div className="join-copy-wrapper">
              <a
                href="https://signal.group/#CjQKIFt19XJr-7owvEs8F0otjk5TujIroVnPsqQB-QV8dQXCEhDbIbTkPzfIpDek1Xhoxk53"
                target="_blank"
                rel="noopener noreferrer"
                className="signal-community"
              >
                <p className="join-grp">JOIN GROUP</p>
              </a>
              <CopyToClipboard text="https://signal.group/#CjQKIFt19XJr-7owvEs8F0otjk5TujIroVnPsqQB-QV8dQXCEhDbIbTkPzfIpDek1Xhoxk53">
                <div className="copy-link">
                  <Image
                    src="/static/copy.png"
                    alt="copy"
                    layout="fill"
                  ></Image>
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
