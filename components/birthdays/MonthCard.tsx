import React from "react";
import { Month } from "./BirthdaysState";

export default function MonthCard(props: { month: Month; id: number }) {
  const { month, id } = props;
  return (
    <div className="card_b" id={month.name.toLowerCase()} key={id}>
      <div className={`month_b month${(id % 3) + 1}_b`}>{month.name}</div>
      <table className={`content-table_b month${(id % 3) + 1}-tr_b`}>
        <thead>
          <tr>
            <th className="date_b">Date</th>
            <th className="name_b">Name</th>
            <th className="username_b">Username</th>
            <th className="place_b">Place</th>
          </tr>
        </thead>
        <tbody id={`${month.name.toLowerCase()}-body`}>
          {month.bdays.map((bday) => (
            <tr key={bday.username}>
              <td>{bday.date}</td>
              <td>{bday.name}</td>
              <td>{bday.username}</td>
              <td>{bday.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
