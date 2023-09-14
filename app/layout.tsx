import Head from "next/head";
import { Metadata } from "next";
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "PVX",
  description:
    "PVX is an active community of friends and easy going people enthusiastically engaged in mutual transaction of ideas spanning over a spectrum of headers ranging from your typical Bakchodi to some serious Crypto and Technology...",
  keywords: [
    "pvx",
    "pvx family",
    "pvx birthdays",
    "pvx stats",
    "pvx donation",
    "Online community",
    "discord groups",
    "telegram groups",
    "whatsApp groups",
    "Group chats",
    "off topic chats",
    "pvx gdrive",
    "pvx official website",
    "pvx webpage",
    "pvx community",
    "pvx bot",
    "whatsapp groups",
    "Online group discussions",
    "whatsapp bot",
    "insta downloader whatsapp",
    "youtube downloader whatsapp",
    "movies series group whatsapp",
    "technology group whatsapp",
    "news group whatsapp",
    "programming group whatsapp",
    "crypto stocks group whatsapp",
    "anime group whatsapp",
    "sports cricket group whatsapp",
    "sticker group whatsapp",
    "bot group whatsapp",
    "study group whatsapp",
    "meme group whatsapp",
    "gaming group whatsapp",
    "automobile group whatsapp",
    "astronomy space group whatsapp",
    "status group whatsapp",
    "pvx whatsapp groups",
    "pvx telegram groups",
    "pvx telegram channel",
    "pvx facebook groups",
    "pvx discord channel",
  ],
  category: "Online Community",
  themeColor: "black",
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
  },
  openGraph: {
    title: "PVX COMMUNITY",
    description:
      "PVX is an active community of friends and easy going people enthusiastically engaged in mutual transaction of ideas spanning over a spectrum of headers ranging from your typical Bakchodi to some serious Crypto and Technology...",
    url: "https://pvxcommunity.com/",
    images:
      "https://github.com/Shubhamrawat5/PVX_webpage/blob/main/src/asserts/images/main.jpg?raw=true",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "sJN2MPzgDpzPOlooLsyGEpQUDoaPdXM9OYMBoCGuzHU",
  },
};

// Layouts must accept a children prop.
// This will be populated with nested layouts or pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* <meta
          name="google-site-verification"
          content="sJN2MPzgDpzPOlooLsyGEpQUDoaPdXM9OYMBoCGuzHU"
        /> */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VN9V7K8V4P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag("config", "G-VN9V7K8V4P");
        `}
        </Script> */}
      </Head>
      <body>
        <Nav />
        {/* <p className="left-0 bottom-0 text-left fixed z-20 text-sm">
          website is under maintainence...
          <br />
          if you&apos;ve any suggestions about website,
          <br />
          feel free to discuss in any pvx group.
        </p> */}

        {children}

        <Footer />
      </body>
    </html>
  );
}
