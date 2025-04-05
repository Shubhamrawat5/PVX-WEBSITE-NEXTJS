import React from "react";

export default function Counter() {
  const counters = [
    {
      count: 8,
      name: "Years",
    },
    {
      count: 20,
      name: "Groups",
    },
    {
      count: 5000,
      name: "Members",
    },
  ];
  return (
    <section className="bg-gradient-to-r from-gray-950 to-gray-900">
      <div className="flex justify-around items-center max-w-3xl m-auto">
        {counters.map((counter) => (
          <div key={counter.name} className="">
            <h2 className="text-xl sm:text-2xl mb-1">{counter.count}+</h2>
            <p className="text-base sm:text-xl">{counter.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
