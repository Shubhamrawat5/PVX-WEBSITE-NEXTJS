import { useState } from "react";
import Donate from "../components/donate/Donate";

export default function DonatePage() {
  const [donators, setdonators] = useState([]);
  const [totalDonation, setTotalDonation] = useState(0);

  return (
    <Donate
      donators={donators}
      setdonators={setdonators}
      totalDonation={totalDonation}
      setTotalDonation={setTotalDonation}
    />
  );
}
