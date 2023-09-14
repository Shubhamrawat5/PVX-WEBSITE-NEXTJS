"use client";

import Link from "next/link";
import React, { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error(props: ErrorProps) {
  const { error, reset } = props;

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-screen flex flex-grow items-center justify-center bg-gradient-to-r from-gray-950 to-gray-900">
      <div className="rounded-lg bg-gray-800 p-8 text-center shadow-xl flex flex-col gap-4 items-center justify-center">
        <p className="text-gray-200">Oops! Something went wrong</p>
        <p className="text-gray-400">Error: {error.message}</p>
        <div className="flex gap-4 justify-center items-center">
          <button
            className="mt-4 inline-block rounded border-2 border-gray-600 px-4 py-2 font-semibold text-white hover:bg-gray-600"
            type="button"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
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
