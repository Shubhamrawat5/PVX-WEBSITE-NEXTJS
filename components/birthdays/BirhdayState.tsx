import { Bday } from "../../pages/birthdays";

export interface Month {
  name: string;
  id: number;
  bdays: Bday[];
}

export default function BirhdayState() {
  const months: Month[] = [
    { name: "January", id: 1, bdays: [] },
    { name: "February", id: 2, bdays: [] },
    { name: "March", id: 3, bdays: [] },
    { name: "April", id: 4, bdays: [] },
    { name: "May", id: 5, bdays: [] },
    { name: "June", id: 6, bdays: [] },
    { name: "July", id: 7, bdays: [] },
    { name: "August", id: 8, bdays: [] },
    { name: "September", id: 9, bdays: [] },
    { name: "October", id: 10, bdays: [] },
    { name: "November", id: 11, bdays: [] },
    { name: "December", id: 12, bdays: [] },
  ];
  return months;
}
