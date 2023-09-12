import React from "react";

export default function Counter() {
  const counters = [
    {
      count: 6,
      name: "Years",
    },
    {
      count: 20,
      name: "Groups",
    },
    {
      count: 4000,
      name: "Members",
    },
  ];
  return (
    <section className=" bg-gradient-to-r from-neutral-950 to-neutral-900">
      <div className="flex justify-around items-center max-w-3xl m-auto">
        {counters.map((counter) => (
          <div key={counter.name}>
            <h2 className="text-xl sm:text-3xl">{counter.count}+</h2>
            <p className="text-base sm:text-2xl">{counter.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
