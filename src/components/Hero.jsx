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
                <motion.div
                    className="font-hero-brand text-cream drop-shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    aria-hidden="true"
                >
                    MK studio
                </motion.div>
                {/* SEO-optimized H1 - visually subtle but semantically primary */}
                <h1 className="sr-only">South Asian Bridal Makeup & Mehndi Artist | Pittsburgh, PA</h1>

            </motion.div>
        </section>
    );
}
