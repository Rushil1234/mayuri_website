"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Image from "next/image";

export default function TimelessGlamour() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax transforms
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]); // Main image moves up faster
    const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]); // Text moves slower
    const y3 = useTransform(scrollYProgress, [0, 1], [100, -150]); // Secondary image moves most

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] overflow-hidden bg-cream pt-24 pb-24"
        >
            {/* Background Typography - Massive, decorative */}
            <div className="pointer-events-none absolute left-0 top-20 z-0 w-full overflow-hidden opacity-[0.03]">
                <h1 className="whitespace-nowrap font-serif text-[15rem] leading-none text-charcoal">
                    TIMELESS GLAMOUR
                </h1>
            </div>

            <div className="container-main relative z-10 grid h-full grid-cols-1 gap-12 lg:grid-cols-12">

                {/* Desktop Centered Button */}
                <div className="absolute left-[55%] top-[23%] z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                    <MagneticButton href="/contact" variant="secondary">
                        DISCOVER MORE
                    </MagneticButton>
                </div>

                {/* Left Column: Main Image & Title */}
                <div className="relative flex flex-col justify-center lg:col-span-6">
                    <motion.div
                        className="relative z-10 aspect-[3/4] w-full max-w-md overflow-hidden bg-sand shadow-xl lg:max-w-lg"
                        style={{ y: y1 }}
                    >
                        <Image
                            src="/images/timeless-main.jpg"
                            alt="Timeless Beauty"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </motion.div>

                    {/* Overlapping Title - Adjusted to not clash */}
                    <motion.div
                        className="absolute -right-12 top-1/3 z-20 max-w-lg lg:-right-24"
                        style={{ y: y2 }}
                    >
                        <div className="mb-6 flex justify-end lg:hidden">
                            {/* Mobile only button position to avoid overlap issues */}
                        </div>
                        <h2 className="text-right">
                            <span className="block font-serif text-4xl text-charcoal/80 mb-2 mr-4 md:text-5xl">Effortless</span>
                            <span className="block font-signature text-7xl text-antique-gold md:text-9xl -mt-4 md:-mt-8">Beauty</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Right Column: Content & Secondary Image */}
                <div className="flex flex-col items-end justify-end text-right lg:col-span-6 lg:pl-16">
                    {/* Content Block */}
                    <motion.div
                        className="mb-16 max-w-sm pt-32 lg:pt-0"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-6 h-px w-12 bg-antique-gold ml-auto"></div>
                        <h3 className="mb-6 font-sans text-xs font-bold uppercase tracking-[0.2em] text-antique-gold">
                            Philosophy
                        </h3>
                        <p className="mb-8 font-serif text-2xl leading-relaxed text-charcoal">
                            "Instead of walking away feeling like a different person, allow me to transform you into the most confident version of yourself."
                        </p>
                        <p className="font-sans text-sm leading-relaxed text-charcoal/60">
                            True glamour isn't about adding more layers; it's about revealing the light that's already there. My approach blends modern techniques with timeless aesthetics to create a look that withstands the test of time.
                        </p>


                    </motion.div>

                    {/* Secondary Floating Image */}
                    <motion.div
                        className="relative ml-auto aspect-[4/5] w-64 overflow-hidden border-4 border-cream shadow-2xl"
                        style={{ y: y3 }}
                    >
                        <Image
                            src="/images/henna-1.jpg"
                            alt="Intricate Details"
                            fill
                            className="object-cover"
                        />
                        {/* Decorative Caption */}
                        <div className="absolute bottom-0 left-0 w-full bg-charcoal/90 p-3 text-center backdrop-blur-sm">
                            <span className="font-serif text-xs italic tracking-widest text-cream">
                                Est. 1998
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-20 left-10 h-32 w-px bg-antique-gold/20"></div>
            <div className="absolute right-10 top-20 h-32 w-px bg-antique-gold/20"></div>
        </section>
    );
}
