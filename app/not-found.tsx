import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-grow items-center justify-center bg-gradient-to-r from-gray-950 to-gray-900">
      <div className="rounded-lg bg-gray-800 p-8 text-center shadow-xl flex flex-col gap-4 items-center justify-center">
        <p className="text-gray-200">Oops! URL Not Found</p>
        <div className="flex gap-4 justify-center items-center">
          <Link
            href="/"
            className="mt-4 inline-block rounded bg-indigo-700 px-4 py-2 font-semibold text-white hover:bg-indigo-600"
          >
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
}
