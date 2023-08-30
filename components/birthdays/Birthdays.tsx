import React from "react";
import Image from "next/image";
import MonthCard from "./MonthCard";
import { BirthdaysProps } from "../../pages/birthdays";
import BdayStateProvider from "./BirthdaysState";

export default function Birthdays(props: BirthdaysProps) {
  const { bdays } = props;

  const months = BdayStateProvider();
  let todayBday = "";

  const dateNew = new Date();
  const todayDate = dateNew.getDate();
  const todayMonth = dateNew.getMonth() + 1; // getMonth return 0 to 11

  bdays.forEach((bday) => {
    const { name, username, date, month, place } = bday;

    if (todayDate === date && todayMonth === month) {
      console.log(`TODAY IS ${name} Birthday`);
      todayBday += todayBday === "" ? name : ` & ${name}`;
    }

    months[month - 1].bdays.push({ date, month, name, username, place });
  });

  return (
    <section id="birthday_b">
      <h2 className="bday-header_b">
        &lt;&#123;PVX&#125;&gt; COMMUNITY
        <br />
        <u> Birthday List</u>
      </h2>
      {todayBday !== "" ? (
        <div className="wish_b">
          <div className="gif_b" />
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
          />
          <Image
            src="/static/balloon.png"
            className="balloon_b balloon2_b"
            alt="balloon"
            height={120}
            width={50}
          />
        </div>
      ) : null}
      <div className="months-container_b">
        {months ? (
          months.map((month) => (
            <MonthCard month={month} id={month.id} key={month.id} />
          ))
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
