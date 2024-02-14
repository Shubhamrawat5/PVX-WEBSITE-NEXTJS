"use client";

import React from "react";

export interface QuoteProps {
  quote: {
    q: string;
    a: string;
    h: string;
  }[];
}

export default function Quote(props: QuoteProps) {
  if (props.quote.length === 0) return null;

  const { q } = props.quote[0];
  return (
    <section className="py-10 md:py-5 bg-gradient-to-r from-gray-950 to-gray-900">
      "{q}"
    </section>
  );
}
