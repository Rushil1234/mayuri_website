"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import useSmoothScroll from "@/hooks/useSmoothScroll";

import Footer from "@/components/Footer";
import Image from "next/image";

const HennaCursor = dynamic(() => import("@/components/HennaCursor"), { ssr: false });

// Full list of images from the portfolio directory
const portfolioImages = [
    "/images/portfolio/132032470_2815478238712159_4455502819506302682_n.jpg",
    "/images/portfolio/132147816_2815478228712160_3848240278735005721_n.jpg",
    "/images/portfolio/293024198_715633963052259_1287257007267315921_n.jpg",
    "/images/portfolio/338414848_613564410194586_5462747058888824762_n-1.webp",
    "/images/portfolio/36506725_2054475754812415_4135024328804663296_n.jpg",
    "/images/portfolio/462596474_3841520746107898_2816287746797430915_n.png",
    "/images/portfolio/462617473_3840533462873293_579953448012367355_n.png",
    "/images/portfolio/474022124_3924080427851929_181639658412880086_n.jpg",
    "/images/portfolio/476903295_1428203855128596_2525672390300642625_n.jpg",
    "/images/portfolio/476904921_1428203788461936_8521397229066717976_n.jpg",
    "/images/portfolio/476966081_1428204001795248_3336076084806923391_n.jpg",
    "/images/portfolio/480906720_1433971574551824_5851139739546634741_n.jpg",
    "/images/portfolio/482127731_1446452433303738_5236387255167088017_n.jpg",
    "/images/portfolio/487071794_1468492934433021_6755741374705046610_n.jpg",
    "/images/portfolio/487204609_1468492804433034_7623528549977491048_n.jpg",
    "/images/portfolio/487297525_1468492897766358_1786795122508941026_n.jpg",
    "/images/portfolio/490318517_1480051753277139_4164074555251820124_n.jpg",
    "/images/portfolio/496678456_4031019337158037_7739463107438775686_n.jpg",
    "/images/portfolio/496934406_4031019347158036_2426682015648419156_n.jpg",
    "/images/portfolio/496995124_4033611006898870_743624334180546219_n.jpg",
    "/images/portfolio/497443325_4030767093849928_6846386668105346249_n.jpg",
    "/images/portfolio/497463512_4030568720536432_3594595758377734406_n.jpg",
    "/images/portfolio/497530902_4030568803869757_8168865476173593444_n.jpg",
    "/images/portfolio/497704213_4030568813869756_3623525260043800673_n.jpg",
    "/images/portfolio/541042333_18054269909625542_7564993423088510311_n.jpg",
    "/images/portfolio/57555392_2270494339877221_2148770261288091648_n.jpg",
    "/images/portfolio/587811487_18067025795625542_6269602038313306222_n.jpg",
    "/images/portfolio/603936322_18067025786625542_3679499979584380806_n.jpg",
    "/images/portfolio/82192673_2503662013227118_3865820365716455424_n.jpg",
    "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_30_39 PM.png",
    "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_33_52 PM.png",
    "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_36_16 PM.png",
    "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_37_11 PM.png",
    "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_38_24 PM.png",
    "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_41_07 PM.png",
    "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_51_16 PM.png",
    "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_55_18 PM.png",
    "/images/portfolio/Gemini_Generated_Image_62b81d62b81d62b8.png",
    "/images/portfolio/Jan 7, 2026, 07_43_33 PM.png",
    "/images/portfolio/creative-detail.png",
    "/images/portfolio/daniel-lloyd-blunk-fernandez-zwvpvmryzt4-unsplash_orig.webp",
    "/images/portfolio/img-2445_orig.webp",
    "/images/portfolio/img-5010.webp",
    "/images/portfolio/testimonial-aisha.png",
    "/images/portfolio/testimonial-anjali.jpg",
    "/images/portfolio/testimonial-priya.jpg",
    "/images/portfolio/testimonial-riya.png",
    "/images/portfolio/testimonial-sneha.png"
];

export default function PortfolioTemplate() {
    // Initialize smooth scrolling
    useSmoothScroll();

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <HennaCursor />


            <main className="min-h-screen bg-[#F2F0E9]">
                {/* Hero Header */}
                <section className="relative px-6 pt-40 pb-20 text-center overflow-hidden">
                    {/* Background Noise with low opacity */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                        style={{ backgroundImage: 'url("/images/noise.png")', backgroundRepeat: "repeat" }}>
                    </div>

                    {/* Decorative Top-Right Header: Rotating Henna Mandala */}
                    <motion.div
                        className="absolute -top-[100px] -right-[100px] md:-top-[250px] md:-right-[250px] w-[400px] h-[400px] md:w-[900px] md:h-[900px] pointer-events-none opacity-100 z-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                        <Image
                            src="/images/luxury_mandala_ultra_detailed_transparent.svg"
                            alt="Decorative Henna Pattern"
                            width={600}
                            height={600}
                            className="w-full h-full object-contain"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <h1 className="font-serif text-[clamp(3.5rem,8vw,6rem)] leading-none text-charcoal">
                            Selected
                        </h1>
                        <h2 className="font-hero-brand text-[clamp(6rem,15vw,12rem)] leading-[0.6] text-antique-gold -mt-4 md:-mt-8 mb-8">
                            Works
                        </h2>
                        <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-charcoal/60 max-w-md mx-auto leading-loose">
                            A curated archive of bridal elegance, intricate henna, and timeless beauty.
                        </p>
                    </motion.div>
                </section>

                {/* Masonry Gallery */}
                <section className="px-4 pb-32">
                    <div className="mx-auto max-w-[1400px]">
                        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                            {portfolioImages.map((src, index) => (
                                <motion.div
                                    key={index}
                                    className="break-inside-avoid relative group cursor-zoom-in"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "100px" }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    onClick={() => setSelectedImage(src)}
                                >
                                    {/* Image Wrapper */}
                                    <div className="relative overflow-hidden rounded-lg bg-charcoal/5">
                                        <Image
                                            src={src}
                                            alt="Mayuri Portfolio"
                                            width={600}
                                            height={800}
                                            className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center text-charcoal shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                                                <span className="text-xl">+</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-sm p-4 md:p-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
                            onClick={() => setSelectedImage(null)}
                            whileHover={{ scale: 1.1 }}
                        >
                            <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>

                        <motion.div
                            className="relative max-w-7xl w-full h-full flex items-center justify-center"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={selectedImage}
                                alt="Portfolio Fullscreen"
                                width={1600}
                                height={2000}
                                className="w-auto h-auto max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
                                quality={100}
                            />
                        </motion.div>

                        <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                            <span className="font-sans text-xs tracking-widest text-white/40 uppercase">
                                Mayuri Kakkad Portfolio
                            </span>
                        </div>
                    </motion.div>
                )}
            </main>

            <Footer />
        </>
    );
}
