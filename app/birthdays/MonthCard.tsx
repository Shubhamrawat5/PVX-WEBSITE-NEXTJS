import React from "react";
import Image from "next/image";
import { Month } from "./BirthdaysState";

export default function MonthCard(props: { month: Month }) {
  const { month } = props;
  return (
    <table className="p-2 overflow-hidden rounded-md">
      <caption className={`${month.translateY}`}>
        <Image src={month.img} alt="dec" height="120" width="280" />
      </caption>
      <thead style={{ backgroundColor: month.headerColor }}>
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
            className="border-b font-Inter text-sm"
            style={{ borderBottomColor: month.headerColor }}
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
