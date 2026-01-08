"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useSmoothScroll from "@/hooks/useSmoothScroll";

// Dynamic imports for better code splitting
const SplitReveal = dynamic(() => import("@/components/SplitReveal"), { ssr: false });
const HennaCursor = dynamic(() => import("@/components/HennaCursor"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"));
const Hero = dynamic(() => import("@/components/Hero"));
const TimelessGlamour = dynamic(() => import("@/components/TimelessGlamour"));
const Services = dynamic(() => import("@/components/Services"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  // Initialize smooth scrolling
  useSmoothScroll();

  // Lock scroll during intro animation
  useEffect(() => {
    if (!introComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [introComplete]);

  return (
    <>
      {/* Custom cursor overlay */}
      <HennaCursor />

      {/* Split reveal intro wraps everything */}
      <SplitReveal onAnimationComplete={() => setIntroComplete(true)}>
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main>
          {/* Hero - Full screen parallax */}
          <Hero heroImage="/images/hero-bridal.jpg" />

          {/* Timeless Glamour - Intro Section */}
          <TimelessGlamour />

          {/* Services */}
          <Services />
        </main>

        {/* Footer */}
        <Footer />
      </SplitReveal>
    </>
  );
}
