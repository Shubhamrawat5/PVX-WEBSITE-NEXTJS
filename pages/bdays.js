import { useState } from "react";
import Community from "../components/bday/Community";
import BdayStateProvider from "../components/bday/BdayStateProvider";

export default function BdaysPage() {
  const [months, setMonths] = useState(BdayStateProvider());
  const [todayBday, setTodayBday] = useState("");

  return (
    <Community
      months={months}
      setMonths={setMonths}
      todayBday={todayBday}
      setTodayBday={setTodayBday}
    />
  );
}
