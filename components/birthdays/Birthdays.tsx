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
    <section className="pt-20 bg-gradient-to-r from-gray-950 to-gray-900">
      <h2 className="section-heading">
        &lt;&#123;PVX&#125;&gt; COMMUNITY
        <br />
        BIRTHDAY LIST
      </h2>
      {todayBday !== "" ? (
        <div className="flex justify-center items-center gap-4">
          <Image
            src="/static/birthday/balloon.png"
            className="animate-bounc"
            alt="balloon"
            height={120}
            width={50}
          />
          <div>
            <h3 className="text-2xl">Happy Birthday !!</h3>
            <h3 className="text-2xl">{todayBday}</h3>
          </div>
          <Image
            src="/static/birthday/balloon.png"
            className="animate-bounc"
            alt="balloon"
            height={120}
            width={50}
          />
        </div>
      ) : null}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {months ? (
          months.map((month) => <MonthCard month={month} key={month.id} />)
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
