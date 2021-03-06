import Month from "./Month";
import Image from "next/image";

export default function Community(props) {
  const { months, todayBday } = props;

  return (
    <section id="birthday_b">
      <h2 className="bday-header_b">
        &lt;&#123;PVX&#125;&gt; COMMUNITY
        <br />
        <u> Birthday List</u>
      </h2>
      {todayBday !== "" ? (
        <div className="wish_b">
          <div className="gif_b"></div>
          <div className="today-bday-text_b">
            <h6 className="happy-birthday_b">Happy Birthday</h6>
            <h6 className="bdy-boy_b">{todayBday}</h6>
          </div>
          <Image
            src="/static/balloon.png"
            className="balloon_b"
            alt="balloon"
            height={120}
            width={50}
          ></Image>
          <Image
            src="/static/balloon.png"
            className="balloon_b balloon2_b"
            alt="balloon"
            height={120}
            width={50}
          ></Image>
        </div>
      ) : null}
      <div className="months-container_b">
        {months ? (
          months.map((month, index) => {
            return <Month month={month} index={index} key={index} />;
          })
        ) : (
          <div id="err" className="err" style={{ border: "1px solid black" }}>
            NOTE: There is a problem with attaching the birthday data ! Contact
            PVX admins.
          </div>
        )}
      </div>
    </section>
  );
}
