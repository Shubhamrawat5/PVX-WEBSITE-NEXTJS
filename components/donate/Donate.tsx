import React from "react";
import Image from "next/image";
import { DonateProps } from "../../pages/donate";

export default function Donate(props: DonateProps) {
  const { members } = props;

  let totalDonation = 0;
  members.forEach((member) => {
    totalDonation += member.donation;
  });

  return (
    <section id="achieve-section" className="section donation-section">
      <h2 className="section-heading">DONATE</h2>

      <p className="subheading-p">
        Help PVX COMMUNITY to grow and provide good stuff for all members.
      </p>

      <p>
        <em>Any amount is appreciated</em>
      </p>

      <div className="drive-container">
        <p className="donation-text subheading-p">
          <span className="step">
            1) Scan the given qr code or donate at
            &quot;shubhamraw123@okhdfcbank&quot; this VPA using your favourite
            payments app.
            <br />
          </span>
          <span className="step">
            2) Take a screenshot and send it to us&nbsp;
            <a
              href="https://wa.me/916397867115"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            &nbsp;with your name.
            <br />
          </span>
          <span className="step">
            3) You&apos;ll be listed on community bot, website and other apps as
            donor 💰
          </span>
          <br />
        </p>

        <Image
          className="qr-img"
          src="/static/pvx_qr.png"
          alt="pvx-qr"
          height="250"
          width="250"
        />
      </div>

      <br />

      <p className="subheading-p">
        Donations are ✅ transparently used to host competitions, events, build
        tools, 🌐 buy domain, 🤖 bots and much more ❤️
      </p>

      {members ? (
        <>
          <h2 className="donators-subheading">
            <span>TOTAL DONATIONS:</span>
            <span>{`₹ ${totalDonation.toLocaleString("en-IN")}`}</span>
          </h2>
          <table className="donators-table">
            <tbody>
              {members.map((member) => (
                <tr key={member.name}>
                  <td className="donator-name">{member.name}</td>
                  <td className="donator-amount">{`₹ ${member.donation}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div id="err" className="err">
          NOTE: There is a problem with attaching the donation data ! Contact
          PVX admins.
        </div>
      )}
    </section>
  );
}
