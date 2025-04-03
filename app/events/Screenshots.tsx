import React from "react";
import Image from "next/image";

export default function Screenshots() {
  const screenshots = [
    {
      imageHeight: 340,
      imageWidth: 340,
      imageSrc: "/static/screenshots/certificate1.jpg",
      imageAlt: "donation certificate",
      subDescription:
        "Donations collected by PVX in Feb 2020 for the Pulwama attack victims.",
      description: "Credits: PVX",
    },
    {
      imageHeight: 600,
      imageWidth: 480,
      imageSrc: "/static/screenshots/certificate2.jpg",
      imageAlt: "donation certificate",
      subDescription:
        "Donations collected by PVX in June 2023 for the Odisha train collision.",
      description: "Credits: PVX",
    },
    {
      imageHeight: 280,
      imageWidth: 600,
      imageSrc: "/static/screenshots/unread.jpg",
      imageAlt: "unread messages",
      subDescription: "Back in the day… 3 million unread messages in PVX.",
      description: "Credits: Hritik Jain",
    },
    {
      imageHeight: 280,
      imageWidth: 600,
      imageSrc: "/static/screenshots/tg24k.jpg",
      imageAlt: "24k members",
      subDescription: "At its peak, PVX had 24k+ passionate movie fans.",
      description: "Credits: Amit Johnson",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-neutral-950 to-neutral-900">
      <h2 className="section-heading">SCREENSHOTS</h2>
      <div className="flex items-center justify-center flex-wrap flex-col sm:flex-row gap-6">
        {screenshots.map((screenshot) => (
          <div
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg py-5 sm:px-10 px-5"
            key={screenshot.description}
          >
            <Image
              className="m-auto"
              src={screenshot.imageSrc}
              alt={screenshot.imageAlt}
              height={screenshot.imageWidth}
              width={screenshot.imageWidth}
            />
            <p className="mt-4 mb-2 font-Inter border-b border-b-gray-600 pb-2">
              {screenshot.description}
            </p>
            <p className="mt-3 text-gray-400">{screenshot.subDescription}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
