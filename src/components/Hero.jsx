"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero({ heroImage }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax transforms
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden"
        >
            {/* Background image with parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: imageY }}
            >
                <div
                    className="h-[130%] w-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: heroImage ? `url(${heroImage})` : `linear-gradient(135deg, var(--color-sand) 0%, var(--color-dusty-rose) 100%)`,
                    }}
                />
                {/* Subtle Overlay for Text Readability - Minimal */}
                <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            {/* Content - Centered, Clean, Simple */}
            <motion.div
                className="container-main relative z-10 flex h-full flex-col items-center justify-center text-center"
                style={{ y: textY, opacity }}
            >
                {/* Main Signature Heading - Massive */}
                <motion.h1
                    className="font-hero-brand text-cream drop-shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    MK studio
                </motion.h1>

                {/* Minimal Tagline - Sans Serif Uppercase */}
                <motion.p
                    className="mt-2 font-serif text-sm font-semibold uppercase tracking-[0.2em] text-cream drop-shadow-lg sm:text-base md:mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Makeup that celebrates your natural beauty
                </motion.p>
            </motion.div>
        </section>
    );
}
