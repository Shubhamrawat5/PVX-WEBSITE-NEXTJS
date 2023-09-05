import React from "react";
import { Month } from "./BirthdaysState";

export default function MonthCard(props: { month: Month; id: number }) {
  const { month, id } = props;
  return (
    <div className="mx-0 my-4 sm:m-5" key={id}>
      <table className="p-2 overflow-hidden rounded-md shadow-md shadow-indigo-600">
        <caption className="caption-top p-2 text-xl bg-indigo-800">
          {month.name}
        </caption>
        <thead className="bg-gray-800">
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
              className="border-b border-b-indigo-800 font-Inter odd:bg-gray-600 even:bg-gray-500"
            >
              <td className="p-1 break-all sm:p-2 ">{bday.date}</td>
              <td className="p-1 break-all sm:p-2 capitalize">{bday.name}</td>
              <td className="p-1 break-all sm:p-2">{bday.username}</td>
              <td className="p-1 break-all sm:p-2 capitalize">{bday.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
