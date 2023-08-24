import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

// TODO: FIX THESE ESLINT DISABLE
// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
