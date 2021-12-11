import Image from "next/image";
export default function OtherGroups() {
  return (
    <>
      <div className="fb groups">
        <h3 className="app-heading">FACEBOOK</h3>
        <div className="group-container">
          <a
            href="https://facebook.com/groups/pvxgaming/"
            target="_blank"
            rel="noopener noreferrer"
            className="fb-community"
          >
            <div className="card">
              <h4 className="group-name">COMMUNITY</h4>
              <div className="group-dp">
                <Image src="/static/group/fb.jpg" alt="dp" layout="fill" />
              </div>
              <p className="group-info">(Posting group)</p>
            </div>
          </a>
        </div>
      </div>

      <div className="discord groups">
        <h3 className="app-heading">DISCORD</h3>
        <div className="group-container">
          <a
            href="https://discord.gg/zMktzNzx9U"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-community"
          >
            <div className="card">
              <h4 className="group-name">COMMUNITY</h4>
              <div className="group-dp">
                <Image src="/static/group/discord.jpg" alt="dp" layout="fill" />
              </div>
              <p className="group-info">(Discord PVX group)</p>
            </div>
          </a>
        </div>
      </div>

      <div className="signal groups">
        <h3 className="app-heading">SIGNAL</h3>
        <div className="group-container">
          <a
            href="https://signal.group/#CjQKIFt19XJr-7owvEs8F0otjk5TujIroVnPsqQB-QV8dQXCEhDbIbTkPzfIpDek1Xhoxk53"
            target="_blank"
            rel="noopener noreferrer"
            className="signal-community"
          >
            <div className="card">
              <h4 className="group-name">COMMUNITY</h4>
              <div className="group-dp">
                <Image src="/static/group/main.jpg" alt="dp" layout="fill" />
              </div>
              <p className="group-info">(Signal PVX group)</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
