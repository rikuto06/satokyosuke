'use client';
import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import Menu from "./components/Menu/Menu";
import Concept from "./components/Concept/Concept";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Mainvisual from "./components/MV/Mainvisual";
import Works from "./components/Works/Works";
import Script from "next/script";
import Access from "./components/Access/Access";
import About from "./components/ABOUT/Aboutsection";
import Loading from "./components/Loading/Loading";
import React, { useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const jsonLd = { /* ...あなたのJSON-LD... */ };

  return (
    <main>
            <Header />
            <Mainvisual />
            <Message />
            <Concept />
            <About />
            <Works />
            <Menu />
            <Contact />
            <Access />
            <Footer />
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
    </main>
      )
  
}