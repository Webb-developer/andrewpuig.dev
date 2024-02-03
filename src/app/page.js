"use client";

import Header from "@/components/Header";
import Intro from "@/components/Intro";
import GlobalStyle from "@/styles/globalStyle";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("scroll", handleWheel);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.which === 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("scroll", handleKeyDown);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Intro scrolled={scrolled} />
      </main>
    </>
  );
}
