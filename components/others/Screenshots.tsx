import React from "react";
import Image from "next/image";

export default function Screenshots() {
  return (
    <section className="bg-gray-950">
      <h2 className="text-2xl text-red-600 border-red-600 border-2 inline-block rounded px-4 py-2 mb-8 font-bold">
        SCREENSHOTS
      </h2>
      <div className="flex items-center justify-center flex-wrap flex-col sm:flex-row">
        <div className="shadow-md shadow-neutral-600 rounded-lg py-5 px-10 mx-0 my-4 sm:m-4">
          <Image
            className="m-auto"
            src="/static/pvx/certificate1.jpg"
            alt="certificate"
            height="350"
            width="500"
          />
          <p className="mt-3">Donations collected by PVX in Feb 2020</p>
        </div>
        <div className="shadow-md shadow-neutral-600 rounded-lg py-5 px-10 mx-0 my-4 sm:m-4">
          <Image
            className="m-auto"
            src="/static/pvx/certificate2.jpg"
            alt="certificate"
            height="600"
            width="480"
          />
          <p className="mt-3">
            Donations collected by PVX in June 2023 (for odisha train collision)
          </p>
        </div>
        <div className="shadow-md shadow-neutral-600 rounded-lg py-5 px-10 mx-0 my-4 sm:m-4">
          <Image
            className="m-auto"
            src="/static/pvx/unread.jpg"
            alt="unread"
            height="280"
            width="600"
          />
          <p className="mt-3">
            Yes it is real! Unread message over some years. <br /> Credits:
            Hritik Jain
          </p>
        </div>
      </div>
    </section>
  );
}
