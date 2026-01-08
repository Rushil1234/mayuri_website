"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import Footer from "@/components/Footer";

const HennaCursor = dynamic(() => import("@/components/HennaCursor"), { ssr: false });

export default function AboutPage() {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <>
            <HennaCursor />


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
                            the artist
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
                            <div className="mt-8 flex justify-center md:justify-start overflow-visible">
                                <svg
                                    width="300"
                                    height="100"
                                    viewBox="0 0 2400 800"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-antique-gold opacity-90 w-[80%] md:w-auto h-auto"
                                >
                                    <defs>
                                        <style>
                                            {`
                                            .stem{fill:none;stroke:currentColor;stroke-width:6;stroke-linecap:round;stroke-linejoin:round}
                                            .main{fill:none;stroke:currentColor;stroke-width:5;stroke-linecap:round;stroke-linejoin:round}
                                            .thin{fill:none;stroke:currentColor;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
                                            .dot{fill:currentColor;stroke:none}
                                            `}
                                        </style>

                                        {/* Leaf (outline) */}
                                        <path id="leaf" className="thin" d="M0,0 C30,-26 70,-26 100,0 C70,26 30,26 0,0 Z"></path>
                                        {/* Leaf vein */}
                                        <path id="leafVein" className="thin" d="M10,0 C40,-6 60,-6 90,0"></path>

                                        {/* Simple 5-petal flower */}
                                        <g id="flower5">
                                            <circle className="thin" cx="0" cy="0" r="10"></circle>
                                            <path className="main" d="M0,-90 C40,-70 40,-30 0,-10 C-40,-30 -40,-70 0,-90Z"></path>
                                            <path className="main" d="M0,90 C40,70 40,30 0,10 C-40,30 -40,70 0,90Z"></path>
                                            <path className="main" d="M-90,0 C-70,-40 -30,-40 -10,0 C-30,40 -70,40 -90,0Z"></path>
                                            <path className="main" d="M90,0 C70,-40 30,-40 10,0 C30,40 70,40 90,0Z"></path>
                                            <path className="main" d="M-64,-64 C-34,-76 -12,-54 -22,-24 C-52,-14 -74,-34 -64,-64Z"></path>
                                            <path className="main" d="M64,64 C34,76 12,54 22,24 C52,14 74,34 64,64Z"></path>
                                            {/* petal texture lines */}
                                            <path className="thin" d="M0,-80 C10,-55 10,-35 0,-18"></path>
                                            <path className="thin" d="M0,-80 C-10,-55 -10,-35 0,-18"></path>
                                            <path className="thin" d="M0,80 C10,55 10,35 0,18"></path>
                                            <path className="thin" d="M0,80 C-10,55 -10,35 0,18"></path>
                                            <path className="thin" d="M-80,0 C-55,10 -35,10 -18,0"></path>
                                            <path className="thin" d="M80,0 C55,10 35,10 18,0"></path>
                                        </g>

                                        {/* Bud */}
                                        <g id="bud">
                                            <path className="main" d="M0,0 C25,-10 45,10 30,34 C18,50 -5,48 -12,32 C-22,10 -8,2 0,0 Z"></path>
                                            <circle className="dot" cx="12" cy="16" r="3.5"></circle>
                                        </g>

                                        {/* Tiny filler sprig */}
                                        <g id="sprig">
                                            <path className="thin" d="M0,0 C30,-30 70,-40 110,-20"></path>
                                            <circle className="dot" cx="30" cy="-18" r="3"></circle>
                                            <circle className="dot" cx="55" cy="-32" r="2.8"></circle>
                                            <circle className="dot" cx="85" cy="-30" r="2.6"></circle>
                                            <circle className="dot" cx="108" cy="-20" r="2.4"></circle>
                                        </g>
                                    </defs>

                                    <motion.g
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                    >
                                        {/* MAIN VINE (continuous) */}
                                        <path className="stem" d="M60,520
               C220,430 320,380 480,420
               C640,460 720,560 860,560
               C980,560 1080,460 1220,430
               C1380,400 1500,480 1620,520
               C1780,575 1900,560 2040,480
               C2160,410 2240,380 2340,410"></path>

                                        {/* SECONDARY CURLS */}
                                        <path className="thin" d="M360,430 C330,360 360,310 420,295"></path>
                                        <path className="thin" d="M980,555 C1015,610 1000,675 930,700"></path>
                                        <path className="thin" d="M1500,500 C1525,430 1595,405 1655,420"></path>
                                        <path className="thin" d="M2080,470 C2060,410 2085,360 2145,345"></path>

                                        {/* FLOWER CLUSTERS */}
                                        {/* Cluster 1 (left) */}
                                        <g transform="translate(330 430) rotate(-12)">
                                            <use href="#flower5" transform="scale(1.05)"></use>
                                            <use href="#flower5" transform="translate(140 55) rotate(18) scale(.78)"></use>
                                            <use href="#flower5" transform="translate(-130 -30) rotate(-22) scale(.72)"></use>
                                            <path className="thin" d="M-30,110 C10,135 55,140 95,120"></path>
                                            <g transform="translate(120 120) rotate(20) scale(.7)">
                                                <use href="#leaf"></use>
                                                <use href="#leafVein"></use>
                                            </g>
                                            <g transform="translate(-150 60) rotate(-35) scale(.62)">
                                                <use href="#leaf"></use>
                                                <use href="#leafVein"></use>
                                            </g>
                                            <use href="#bud" transform="translate(210 -40) rotate(25) scale(.9)"></use>
                                            <use href="#sprig" transform="translate(60 -150) rotate(10) scale(.9)"></use>
                                        </g>

                                        {/* Leaves along vine (left segment) */}
                                        <g>
                                            <g transform="translate(210 485) rotate(-30) scale(.55)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                            <g transform="translate(520 420) rotate(22) scale(.5)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                            <g transform="translate(610 485) rotate(55) scale(.58)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                        </g>

                                        {/* Cluster 2 (mid-left) */}
                                        <g transform="translate(860 560) rotate(8)">
                                            <use href="#flower5" transform="scale(.95)"></use>
                                            <use href="#flower5" transform="translate(125 -70) rotate(-18) scale(.72)"></use>
                                            <use href="#flower5" transform="translate(-130 70) rotate(22) scale(.68)"></use>
                                            <g transform="translate(150 50) rotate(35) scale(.6)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                            <g transform="translate(-160 -30) rotate(-20) scale(.62)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                            <use href="#bud" transform="translate(-210 30) rotate(-10) scale(.85)"></use>
                                            <use href="#sprig" transform="translate(40 150) rotate(190) scale(.9)"></use>
                                            {/* dot accents */}
                                            <circle className="dot" cx="40" cy="-140" r="3.6"></circle>
                                            <circle className="dot" cx="62" cy="-155" r="3.0"></circle>
                                            <circle className="dot" cx="85" cy="-160" r="2.6"></circle>
                                        </g>

                                        {/* Leaves along vine (middle) */}
                                        <g>
                                            <g transform="translate(1040 500) rotate(-12) scale(.55)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                            <g transform="translate(1150 450) rotate(35) scale(.45)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                            <g transform="translate(1320 430) rotate(10) scale(.55)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                        </g>

                                        {/* Cluster 3 (mid-right) */}
                                        <g transform="translate(1520 500) rotate(-10)">
                                            <use href="#flower5" transform="scale(1.08)"></use>
                                            <use href="#flower5" transform="translate(150 35) rotate(18) scale(.75)"></use>
                                            <use href="#flower5" transform="translate(-145 -55) rotate(-15) scale(.7)"></use>
                                            <g transform="translate(-170 60) rotate(-30) scale(.6)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                            <g transform="translate(165 -70) rotate(30) scale(.62)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                            <use href="#bud" transform="translate(235 5) rotate(25) scale(.95)"></use>
                                            <use href="#sprig" transform="translate(-30 -160) rotate(-10) scale(.95)"></use>
                                            <circle className="dot" cx="-40" cy="150" r="3.4"></circle>
                                            <circle className="dot" cx="-65" cy="162" r="2.8"></circle>
                                            <circle className="dot" cx="-90" cy="168" r="2.5"></circle>
                                        </g>

                                        {/* Leaves along vine (right) */}
                                        <g>
                                            <g transform="translate(1750 545) rotate(35) scale(.55)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                            <g transform="translate(1865 520) rotate(-18) scale(.5)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                            <g transform="translate(1980 500) rotate(12) scale(.58)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                        </g>

                                        {/* Cluster 4 (far right end) */}
                                        <g transform="translate(2140 410) rotate(14)">
                                            <use href="#flower5" transform="scale(.92)"></use>
                                            <use href="#flower5" transform="translate(120 70) rotate(22) scale(.68)"></use>
                                            <use href="#flower5" transform="translate(-120 -70) rotate(-18) scale(.62)"></use>
                                            <g transform="translate(140 -30) rotate(25) scale(.55)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                            <g transform="translate(-155 35) rotate(-25) scale(.6)">
                                                <use href="#leaf"></use><use href="#leafVein"></use>
                                            </g>
                                            <use href="#bud" transform="translate(200 -40) rotate(20) scale(.85)"></use>
                                            <use href="#sprig" transform="translate(0 150) rotate(200) scale(.85)"></use>
                                        </g>

                                        {/* scattered micro dots like henna filler */}
                                        <g>
                                            <circle className="dot" cx="720" cy="610" r="2.2"></circle>
                                            <circle className="dot" cx="760" cy="640" r="2.0"></circle>
                                            <circle className="dot" cx="800" cy="660" r="1.8"></circle>

                                            <circle className="dot" cx="1240" cy="380" r="2.2"></circle>
                                            <circle className="dot" cx="1270" cy="350" r="2.0"></circle>
                                            <circle className="dot" cx="1300" cy="330" r="1.8"></circle>

                                            <circle className="dot" cx="1930" cy="615" r="2.2"></circle>
                                            <circle className="dot" cx="1960" cy="645" r="2.0"></circle>
                                            <circle className="dot" cx="1990" cy="670" r="1.8"></circle>
                                        </g>
                                    </motion.g>
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
                                <span className="text-[6rem] font-serif leading-none text-antique-gold/20 absolute -top-12 md:-right-4 right-0 -z-10">01</span>
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
                            <div className="md:w-1/2 hidden md:block">
                                <div className="relative aspect-square w-[80%] ml-auto rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                                    <Image
                                        src="/images/family.jpg"
                                        alt="Mayuri with her family"
                                        fill
                                        className="object-cover rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02]"
                                    />
                                    <div className="absolute inset-0 rounded-2xl border border-antique-gold/30 -z-10 translate-x-4 translate-y-4"></div>
                                </div>
                            </div>
                            {/* Connector Dot */}
                            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 md:top-8 w-3 h-3 bg-antique-gold rounded-full border-4 border-[#F2F0E9] z-20 shadow-md"></div>

                            <div className="md:w-1/2 pl-12 md:pl-16 text-left">
                                <span className="text-[6rem] font-serif leading-none text-antique-gold/20 absolute -top-12 -left-4 -z-10">02</span>
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
                                <span className="text-[6rem] font-serif leading-none text-antique-gold/20 absolute -top-12 md:-right-4 right-0 -z-10">03</span>
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
