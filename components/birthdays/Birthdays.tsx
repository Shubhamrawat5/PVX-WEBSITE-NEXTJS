import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import MonthCard from "./MonthCard";
import { Month } from "./BirhdayState";

export default function Birthdays(props: {
  months: Month[];
  todayBday: string;
}) {
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

Birthdays.propTypes = {
  months: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      bdays: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          username: PropTypes.string.isRequired,
          date: PropTypes.number.isRequired,
          month: PropTypes.number.isRequired,
          place: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  todayBday: PropTypes.string.isRequired,
};
