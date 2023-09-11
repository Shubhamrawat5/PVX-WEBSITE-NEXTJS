import React from "react";
import Image from "next/image";

export default function Screenshots() {
  const screenshots = [
    {
      imageHeight: 340,
      imageWidth: 340,
      imageSrc: "/static/screenshots/certificate1.jpg",
      imageAlt: "donation-certificate",
      description: "Donations collected by PVX in Feb 2020",
    },
    {
      imageHeight: 600,
      imageWidth: 480,
      imageSrc: "/static/screenshots/certificate2.jpg",
      imageAlt: "donation-certificate",
      description:
        "Donations collected by PVX in June 2023 (for odisha train collision)",
    },
    {
      imageHeight: 280,
      imageWidth: 600,
      imageSrc: "/static/screenshots/unread.jpg",
      imageAlt: "unread-messages",
      description:
        "Yes it is real! Unread message over some years. Credits: Hritik Jain",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-neutral-950 to-neutral-900">
      <h2 className="section-heading">SCREENSHOTS</h2>
      <div className="flex items-center justify-center flex-wrap flex-col sm:flex-row gap-6">
        {screenshots.map((screenshot) => (
          <div
            className="bg-gray-800 rounded-lg py-5 px-10"
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
