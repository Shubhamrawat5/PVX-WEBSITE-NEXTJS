import React from "react";
import Image from "next/image";

export default function Screenshots() {
  const screenshots = [
    {
      imageHeight: 340,
      imageWidth: 340,
      imageSrc: "/static/pvx/certificate1.jpg",
      imageAlt: "donation-certificate",
      description: "Donations collected by PVX in Feb 2020",
    },
    {
      imageHeight: 600,
      imageWidth: 480,
      imageSrc: "/static/pvx/certificate2.jpg",
      imageAlt: "donation-certificate",
      description:
        "Donations collected by PVX in June 2023 (for odisha train collision)",
    },
    {
      imageHeight: 280,
      imageWidth: 600,
      imageSrc: "/static/pvx/unread.jpg",
      imageAlt: "unread-messages",
      description:
        "Yes it is real! Unread message over some years. Credits: Hritik Jain",
    },
  ];

  return (
    <section className="bg-gray-950">
      <h2 className="text-2xl text-red-600 border-red-600 border-2 inline-block rounded px-4 py-2 mb-8 font-bold">
        SCREENSHOTS
      </h2>
      <div className="flex items-center justify-center flex-wrap flex-col sm:flex-row">
        {screenshots.map((screenshot) => (
          <div
            className="shadow-md shadow-neutral-600 rounded-lg py-5 px-10 mx-0 my-4 sm:m-4"
            key={screenshot.description}
          >
            <Image
              className="m-auto"
              src={screenshot.imageSrc}
              alt={screenshot.imageAlt}
              height={screenshot.imageWidth}
              width={screenshot.imageWidth}
            />
            <p className="mt-3">{screenshot.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
