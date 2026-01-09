"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Image from "next/image";
import Link from "next/link";

export default function CraftingBeauty() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax logic - This handles the smooth movement as you scroll
    const yMain = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const yDetail = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 12]);

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden bg-[#F2F0E9] pb-32 pt-24"
        >
            {/* Massive Background Anchor "27" */}
            <div className="absolute -left-20 top-20 z-0 select-none opacity-[0.05] mix-blend-multiply">
                <span className="font-serif text-[25rem] leading-none text-charcoal lg:text-[40rem]">27</span>
            </div>

            <div className="container-main relative z-10 grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-0">

                {/* Left: Text Content */}
                <div className="flex flex-col justify-center lg:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Title Lockup */}
                        <h2 className="mb-10 text-charcoal">
                            <span className="block font-serif text-5xl md:text-6xl">Crafting</span>
                            <span className="block font-hero-brand text-7xl text-antique-gold md:text-8xl lg:text-[7rem] lg:leading-[0.8] ml-4">
                                Beauty
                            </span>
                        </h2>

                        {/* Bio Text */}
                        <div className="relative space-y-6 pl-8 font-serif text-lg leading-relaxed text-charcoal/80">
                            {/* Decorative line */}
                            <div className="absolute left-0 top-2 h-full w-px bg-antique-gold/30"></div>

                            <p>
                                I have been a makeup and Mehendi artist for <span className="font-bold text-charcoal">27 years</span>.
                            </p>
                            <p>
                                I take pride in adorning brides and clients with stunning designs that bring out their inner beauty and express their unique personalities.
                            </p>
                            <p>
                                I have always been committed to providing artistic and professional services to make my clients' experience with makeup and Mehendi unforgettable.
                            </p>
                        </div>

                        {/* Signature/Stamp */}
                        <Link href="/about" className="mt-12 flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                            <div className="h-12 w-12 rounded-full border border-charcoal p-1">
                                <div className="h-full w-full rounded-full bg-charcoal"></div>
                            </div>
                            <span className="font-sans text-xs font-bold uppercase tracking-widest">Master Artist</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Right: Abstract Collage */}
                <div className="relative min-h-[600px] lg:col-span-7">

                    {/* Image 1: The Arch (Main) */}
                    <motion.div
                        className="absolute right-0 top-0 z-10 w-[80%] max-w-sm rounded-t-[15rem] bg-white p-2 shadow-2xl lg:right-12"
                        style={{ y: yMain }}
                    >
                        <Link href="/about" className="block">
                            <div className="relative aspect-[3/5] w-full overflow-hidden rounded-t-[14rem] cursor-pointer">
                                <Image
                                    src="/images/Mayuri.png"
                                    alt="Mayuri Kakkad Portrait"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </Link>
                    </motion.div>

                    {/* Image 2: The Hands (Detail) */}
                    {/* Fixed: Removed conflicting 'animate' props to stop the glitching */}
                    <motion.div
                        className="absolute bottom-20 left-4 z-20 w-64 overflow-hidden rounded-[3rem] border-[6px] border-[#F2F0E9] shadow-2xl md:left-20 lg:bottom-32"
                        style={{ y: yDetail }}
                    >
                        <Link href="/about" className="block">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] cursor-pointer">
                                <Image
                                    src="/images/portfolio/creative-detail.png"
                                    alt="Intricate Henna Detail on Hands"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>
                        </Link>
                    </motion.div>

                    {/* Decorative Paint/Gold Swash (CSS Shape) */}
                    <motion.div
                        className="absolute right-10 top-[40%] z-0 h-40 w-40 rounded-full bg-antique-gold/20 blur-3xl"
                        style={{ rotate }}
                    ></motion.div>
                </div>
            </div>
        </section>
    );
}