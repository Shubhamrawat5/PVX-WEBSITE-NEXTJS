export default function Stats({ gcount }) {
  let totalMessages = 0;
  if (gcount) {
    gcount.forEach((ele) => {
      totalMessages += Number(ele.count);
    });
  }

  return (
    <section id="achieve-section" className="section donation-section">
      <h2 className="section-heading">PVX GROUPS STATS</h2>

      <p className="subheading-p">ALL WHATSAPP PVX GROUPS MESSAGES STATS</p>
      <p className="subheading-p">FROM 24 NOV 2021</p>
      <p className="subheading-p">
        Stats are not 100% correct as pvx bot in whatsapp collect the message
        count and sometimes the bot is down then all the messsages during bot
        down time gets ignored and are not counted.
      </p>

      {gcount ? (
        <>
          <h2 className="donators-subheading">
            <span>TOTAL MESSAGES: </span>
            <span>{totalMessages.toLocaleString("en-IN")}</span>
          </h2>
          <table className="donators-table">
            <tbody>
              {gcount.map((grp, index) => (
                <tr key={index}>
                  <td className="donator-name">{grp.gname.slice(8)}</td>
                  <td className="donator-amount">{grp.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div div id="err" className="err">
          NOTE: There is a problem with attaching the stats data ! Contact PVX
          admins.
        </div>
      )}
    </section>
  );
}
