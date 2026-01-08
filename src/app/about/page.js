"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HennaCursor = dynamic(() => import("@/components/HennaCursor"), { ssr: false });

export default function AboutPage() {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <>
            <HennaCursor />
            <Navbar />

            <main className="min-h-screen bg-[#F2F0E9] overflow-hidden">
                {/* Global Grain Texture */}
                <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
                    style={{ backgroundImage: 'url("/images/noise.png")', backgroundRepeat: "repeat" }}>
                </div>

                {/* --- HERO SECTION --- */}
                <section className="relative pt-32 md:pt-48 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center container-main z-10">

                    {/* Massive Background Text */}
                    <div className="absolute top-[15%] md:top-[10%] left-0 right-0 text-center select-none z-0 overflow-hidden">
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="font-hero-brand text-[22vw] leading-[0.6] text-charcoal/5 whitespace-nowrap"
                        >
                            The Artist
                        </motion.h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center w-full max-w-6xl relative z-10">
                        {/* Image Panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative order-2 md:order-1"
                        >
                            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-t-[10rem] overflow-hidden border border-white/50 shadow-2xl">
                                <Image
                                    src="/images/Mayuri.png" // Updated to standard image temporarily, can be swapped
                                    alt="Mayuri Kakkad"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                            {/* Graphic Element */}
                            <div className="absolute -bottom-8 -left-8 -z-10 h-32 w-32 rounded-full bg-antique-gold/10 blur-2xl"></div>
                        </motion.div>

                        {/* Typography Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-center md:text-left order-1 md:order-2"
                        >
                            <span className="block font-sans text-xs uppercase tracking-[0.4em] text-antique-gold mb-4">
                                Established 1997
                            </span>
                            <h2 className="font-serif text-5xl md:text-7xl text-charcoal mb-6 leading-tight">
                                Mayuri <br /> <span className="italic text-antique-gold">Kakkad</span>
                            </h2>
                            <p className="font-sans text-charcoal/70 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                                A celebrated cosmetologist and mehendi artist bringing
                                <span className="font-serif italic text-xl px-1">27 years</span>
                                of artistry to life. Based in Western PA, crafting timeless beauty for brides across the Northeast.
                            </p>

                            {/* Henna Pattern Flow */}
                            <div className="mt-10 flex justify-center md:justify-start">
                                <svg
                                    width="200"
                                    height="40"
                                    viewBox="0 0 200 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-antique-gold/80"
                                >
                                    <motion.path
                                        d="M10 20C40 10 40 30 70 20S100 10 130 20S160 30 190 20"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    />
                                    {/* Decorative leaves/dots */}
                                    <motion.circle cx="70" cy="20" r="2" fill="currentColor"
                                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }} />
                                    <motion.circle cx="130" cy="20" r="2" fill="currentColor"
                                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }} viewport={{ once: true }} />
                                    <motion.path
                                        d="M70 20 Q 80 10 85 15 M130 20 Q 140 30 145 25"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8, duration: 0.5 }}
                                    />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- THE SCROLLING STORY --- */}
                <section className="relative py-32 px-6 container-main z-10">
                    {/* Golden Thread Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-antique-gold/0 via-antique-gold/30 to-antique-gold/0"></div>

                    <div className="max-w-4xl mx-auto space-y-32 md:space-y-48 relative">

                        {/* Chapter 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col md:flex-row gap-12 items-center relative"
                        >
                            <div className="md:w-1/2 text-left md:text-right md:pr-16 order-2 md:order-1">
                                <span className="text-[6rem] font-serif leading-none text-antique-gold/10 absolute -top-12 md:-right-4 right-0 -z-10">01</span>
                                <h3 className="font-serif text-3xl text-charcoal mb-4">Roots & Rhythm</h3>
                                <p className="font-sans text-charcoal/70 leading-relaxed">
                                    Born and raised in the vibrant city of Hyderabad, India, art runs through my veins.
                                    Beyond the brush and cone, I am a classical dancer—finding rhythm in movement just as I find flow in henna patterns.
                                </p>
                            </div>
                            {/* Connector Dot */}
                            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 md:top-8 w-3 h-3 bg-antique-gold rounded-full border-4 border-[#F2F0E9] z-20 shadow-md"></div>
                            <div className="md:w-1/2 order-1 md:order-2 pl-12 md:pl-16">
                                {/* Just whitespace or an image here if desired */}
                            </div>
                        </motion.div>

                        {/* Chapter 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col md:flex-row gap-12 items-center relative"
                        >
                            <div className="md:w-1/2 hidden md:block"></div>
                            {/* Connector Dot */}
                            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 md:top-8 w-3 h-3 bg-antique-gold rounded-full border-4 border-[#F2F0E9] z-20 shadow-md"></div>

                            <div className="md:w-1/2 pl-12 md:pl-16 text-left">
                                <span className="text-[6rem] font-serif leading-none text-antique-gold/10 absolute -top-12 -left-4 -z-10">02</span>
                                <h3 className="font-serif text-3xl text-charcoal mb-4">Life & Love</h3>
                                <p className="font-sans text-charcoal/70 leading-relaxed">
                                    I am a proud homemaker, finding joy in raising my two boys alongside my wonderful husband.
                                    My family is my anchor, grounding me in love so I can pour that same devotion into every bride I meet.
                                </p>
                            </div>
                        </motion.div>

                        {/* Chapter 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col md:flex-row gap-12 items-center relative"
                        >
                            <div className="md:w-1/2 text-left md:text-right md:pr-16 order-2 md:order-1">
                                <span className="text-[6rem] font-serif leading-none text-antique-gold/10 absolute -top-12 md:-right-4 right-0 -z-10">03</span>
                                <h3 className="font-serif text-3xl text-charcoal mb-4">The Craft</h3>
                                <p className="font-sans text-charcoal/70 leading-relaxed">
                                    Adorning a bride is a sacred trust. I strive to create designs that aren't just beautiful,
                                    but are whispered blessings—bringing out your inner radiance and marking the beginning of a beautiful journey.
                                </p>
                            </div>
                            {/* Connector Dot */}
                            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 md:top-8 w-3 h-3 bg-antique-gold rounded-full border-4 border-[#F2F0E9] z-20 shadow-md"></div>
                            <div className="md:w-1/2 order-1 md:order-2 pl-12 md:pl-16"></div>
                        </motion.div>

                    </div>
                </section>

                {/* --- QUOTE SECTION --- */}
                <section className="py-32 bg-white/50 px-6 text-center relative overflow-hidden">
                    <div className="max-w-3xl mx-auto relative z-10">
                        <svg className="w-12 h-12 text-antique-gold/20 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.0547 15.372 14.8516 16.9609 14.8516C18.2305 14.8516 19.3633 15.6523 19.4648 16.6445C20.3086 16.0352 20.8164 15.0234 20.8164 13.9102C20.8164 12.1875 19.7852 10.9688 18.0625 10.9688C15.8984 10.9688 14.017 12.8008 14.017 15.1172H11.5176C11.5176 11.2344 14.7266 8.03516 18.25 8.03516C21.9023 8.03516 23.9961 10.8867 23.9961 13.5273C23.9961 16.8555 21.6523 21 17.5195 21H14.017ZM8.01562 21L8.01562 18C8.01562 16.0547 9.37109 14.8516 10.9609 14.8516C12.2305 14.8516 13.3633 15.6523 13.4648 16.6445C14.3086 16.0352 14.8164 15.0234 14.8164 13.9102C14.8164 12.1875 13.7852 10.9688 12.0625 10.9688C9.89844 10.9688 8.01562 12.8008 8.01563 15.1172H5.51562C5.51562 11.2344 8.72656 8.03516 12.25 8.03516C15.9023 8.03516 17.9961 10.8867 17.9961 13.5273C17.9961 16.8555 15.6523 21 11.5195 21H8.01562Z" /></svg>
                        <p className="font-serif text-3xl md:text-4xl text-charcoal italic leading-relaxed">
                            "Every design is a whispered blessing, a silent prayer inked on skin."
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <span className="h-px w-12 bg-antique-gold"></span>
                            <span className="font-sans text-xs font-bold uppercase tracking-widest text-antique-gold">Mayuri Kakkad</span>
                            <span className="h-px w-12 bg-antique-gold"></span>
                        </div>
                    </div>
                </section>

                {/* --- CONCLUSION CTA --- */}
                <motion.section
                    className="py-32 px-6 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-hero-brand text-6xl md:text-8xl text-antique-gold mb-8">
                        Let's Create Magic
                    </h2>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-charcoal px-10 py-4 font-sans text-xs font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-antique-gold hover:text-white"
                    >
                        <span className="relative z-10">Request a Consultation</span>
                    </Link>
                </motion.section>

            </main>
            <Footer />
        </>
    );
}
