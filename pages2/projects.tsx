import React from "react";
import Head from "next/head";
import Projects from "../app/components/projects/Projects";

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>PVX | PROJECTS</title>
      </Head>
      <Projects />
    </>
  );
}
