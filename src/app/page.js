"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useSmoothScroll from "@/hooks/useSmoothScroll";

// Dynamic imports for better code splitting
const SplitReveal = dynamic(() => import("@/components/SplitReveal"), { ssr: false });
const HennaCursor = dynamic(() => import("@/components/HennaCursor"), { ssr: false });

const Hero = dynamic(() => import("@/components/Hero"));
const TimelessGlamour = dynamic(() => import("@/components/TimelessGlamour"));
const CraftingBeauty = dynamic(() => import("@/components/CraftingBeauty"));
const Services = dynamic(() => import("@/components/Services"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
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


        {/* Main content */}
        <main>
          {/* Hero - Full screen parallax */}
          <Hero heroImage="/images/hero-bridal.jpg" />

          {/* Timeless Glamour - Intro Section */}
          <TimelessGlamour />

          {/* Crafting Beauty - Experience Section */}
          <CraftingBeauty />

          {/* Services */}
          <Services />

          {/* How It Works - Booking Process */}
          <HowItWorks />

          {/* Testimonials */}
          <Testimonials />
        </main>

        {/* Footer */}
        <Footer />
      </SplitReveal>
    </>
  );
}
