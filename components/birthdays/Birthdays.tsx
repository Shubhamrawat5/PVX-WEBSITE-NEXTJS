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
    <section className="pt-20">
      <h2 className="text-2xl text-red-600 border-red-600 border-2 inline-block rounded px-4 py-2 mb-8">
        &lt;&#123;PVX&#125;&gt; COMMUNITY
        <br />
        Birthday List
      </h2>
      {todayBday !== "" ? (
        <div className="wish_b">
          <div className="gif_b" />
          <div className="">
            <h6 className="text-xl">Happy Birthday</h6>
            <h6 className="text-xl">{todayBday}</h6>
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
      <div className="flex flex-wrap justify-center items-center">
        {months ? (
          months.map((month) => (
            <MonthCard month={month} id={month.id} key={month.id} />
          ))
        ) : (
          <div className="border mb-4 px-2 py-1 text-sm w-full">
            NOTE: There is a problem with attaching the group stats data !
            Contact PVX admins.
          </div>
        )}
      </div>
    </section>
  );
}
