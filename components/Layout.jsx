import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Utility } from '../utils';
import { useRouter } from 'next/router';

// TODO: FIX THESE ESLINT DISABLE
// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  const path = useRouter().pathname;

  return Utility.isAdmin(path) ? (
    children
  ) : (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
