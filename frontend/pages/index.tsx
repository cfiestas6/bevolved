import Head from "next/head";
import { Chart } from "@/components";
import { useState, useEffect } from "react";
import { Cta, FaqSection, Footer, Hero, HomeContent, Login, Navigation, StatsSection } from "@/devlink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bevolved.xyz | Where learning tech blossoms</title>
        <meta name="description" content="Jobs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation
        coursesUrl={{ href: "/courses" }}
        homeUrl={{ href: "/" }} />
      <main>
        <Hero registerAccount={{ href: "/signup" }}></Hero>
        <StatsSection />
        <HomeContent />
        <Cta />
        <Footer />
      </main>
    </>
  );
}
