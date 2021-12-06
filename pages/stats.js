import { useState } from "react";
import Stats from "../components/stats/Stats";

export default function StatsPage() {
  const [gcount, setGcount] = useState([]);
  const [totalMessages, setTotalMessages] = useState(0);

  return (
    <Stats
      gcount={gcount}
      setGcount={setGcount}
      totalMessages={totalMessages}
      setTotalMessages={setTotalMessages}
    />
  );
}
