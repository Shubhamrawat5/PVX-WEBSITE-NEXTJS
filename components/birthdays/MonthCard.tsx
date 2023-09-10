import React from "react";
import { Month } from "./BirthdaysState";

export default function MonthCard(props: { month: Month }) {
  const { month } = props;
  return (
    <table className="p-2 overflow-hidden rounded-md">
      <caption className="caption-top p-2 text-xl bg-indigo-800 uppercase border-b border-b-white">
        {month.name}
      </caption>
      <thead className="bg-gray-900 border-b border-b-gray-600">
        <tr>
          <th className="p-2 ">Date</th>
          <th className="p-2 ">Name</th>
          <th className="p-2 ">Username</th>
          <th className="p-2 ">Place</th>
        </tr>
      </thead>
      <tbody className="bg-gray-800 text-sm sm:text-base">
        {month.bdays.map((bday) => (
          <tr
            key={bday.username}
            className="border-b border-b-gray-600 font-Inter text-sm"
          >
            <td className="p-2 [overflow-wrap:anywhere] ">{bday.date}</td>
            <td className="p-2 [overflow-wrap:anywhere] capitalize">
              {bday.name}
            </td>
            <td className="p-2 [overflow-wrap:anywhere] lowercase">
              {bday.username}
            </td>
            <td className="p-2 [overflow-wrap:anywhere] capitalize">
              {bday.place}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
