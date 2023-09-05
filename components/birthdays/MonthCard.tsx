import React from "react";
import { Month } from "./BirthdaysState";

export default function MonthCard(props: { month: Month; id: number }) {
  const { month, id } = props;
  return (
    <div className="m-5" key={id}>
      <div className="p-2 text-xl bg-indigo-800">{month.name}</div>
      <table className="p-2">
        <thead className="bg-gray-900">
          <tr>
            <th className="p-2 ">Date</th>
            <th className="p-2 ">Name</th>
            <th className="p-2 ">Username</th>
            <th className="p-2 ">Place</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 ">
          {month.bdays.map((bday) => (
            <tr key={bday.username} className="border-b border-b-gray-400">
              <td className="p-2">{bday.date}</td>
              <td className="p-2">{bday.name}</td>
              <td className="p-2">{bday.username}</td>
              <td className="p-2">{bday.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
