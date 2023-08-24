import React from "react";
import PropTypes from "prop-types";
import { DataPVXG, DataPVXT } from "../../pages/stats";

export default function Stats(props: {
  dataPVXG: DataPVXG[];
  dataPVXT: DataPVXT[];
}) {
  const { dataPVXG, dataPVXT } = props;
  let totalMessages = 0;
  if (dataPVXG) {
    dataPVXG.forEach((ele) => {
      totalMessages += Number(ele.count);
    });
  }

  return (
    <section id="achieve-section" className="section donation-section">
      <h2 className="section-heading">PVX GROUPS STATS</h2>

      <p className="subheading-p">ALL WHATSAPP PVX GROUPS MESSAGES STATS</p>
      <p className="subheading-p">FROM 24 NOV 2021</p>
      <p className="subheading-p">
        Please note that these figures may not be 100% accurate, as the PVX bot
        in WhatsApp groups is used to collect message counts and can sometimes
        be down. Messages sent during this time are not counted.
      </p>

      {dataPVXG ? (
        <>
          <h2 className="donators-subheading">
            <span>TOTAL GROUP MESSAGES: </span>
            <span>{totalMessages.toLocaleString("en-IN")}</span>
          </h2>
          <table className="donators-table">
            <tbody>
              {dataPVXG.map((group) => (
                <tr key={group.groupjid}>
                  <td className="donator-name">{group.gname.slice(8)}</td>
                  <td className="donator-amount">{group.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div id="err" className="err">
          NOTE: There is a problem with attaching the stats data ! Contact PVX
          admins.
        </div>
      )}

      {dataPVXT ? (
        <>
          <h2 className="donators-subheading">
            <span>TOP MEMBER MESSAGES </span>
          </h2>
          <table className="donators-table">
            <tbody>
              {dataPVXT.map((member, index) => (
                <tr key={member.memberjid}>
                  <td className="donator-name">
                    {index + 1}) {member.name}
                  </td>
                  <td className="donator-amount">{member.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div id="err" className="err">
          NOTE: There is a problem with attaching the stats data ! Contact PVX
          admins.
        </div>
      )}
    </section>
  );
}

Stats.propTypes = {
  dataPVXG: PropTypes.arrayOf(
    PropTypes.shape({
      gname: PropTypes.string.isRequired,
      groupjid: PropTypes.string.isRequired,
      count: PropTypes.string.isRequired,
    })
  ).isRequired,
  dataPVXT: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      memberjid: PropTypes.string.isRequired,
      count: PropTypes.string.isRequired,
    })
  ).isRequired,
};
