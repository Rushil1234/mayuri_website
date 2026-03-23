"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import useSmoothScroll from "@/hooks/useSmoothScroll";

import Footer from "@/components/Footer";
import Image from "next/image";

const HennaCursor = dynamic(() => import("@/components/HennaCursor"), { ssr: false });

import { portfolioMedia, isVideo } from "@/data/portfolioMedia";

/* Distribute items round-robin across N columns so order reads left→right */
function distributeToColumns(items, numCols) {
    const cols = Array.from({ length: numCols }, () => []);
    items.forEach((item, i) => cols[i % numCols].push(item));
    return cols;
}

/* Responsive column count hook */
function useColumnCount() {
    const [cols, setCols] = useState(2);
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w >= 1280) setCols(4);
            else if (w >= 768) setCols(3);
            else setCols(2);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    return cols;
}

/* ---- Gallery card (plain DOM, no per-item motion) ---- */
function GalleryCard({ src, onClick, priority = false }) {
    const video = isVideo(src);
    return (
        <div
            className="relative group cursor-zoom-in portfolio-card mb-3 md:mb-5"
            onClick={() => onClick(src)}
        >
            <div className="relative overflow-hidden rounded-lg bg-charcoal/5">
                {video ? (
                    <video
                        src={src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-auto block transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                ) : (
                    <Image
                        src={src}
                        alt="Bridal makeup and mehndi work by Mayuri Kakkad"
                        width={600}
                        height={800}
                        className="w-full h-auto block transition-transform duration-700 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        priority={priority}
                    />
                )}

                {/* Tap/Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 flex items-center justify-center text-charcoal shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        <span className="text-xl">+</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---- Masonry gallery with row-first ordering ---- */
function MasonryGallery({ items, onSelect }) {
    const numCols = useColumnCount();
    const columns = distributeToColumns(items, numCols);

    return (
        <section className="px-3 md:px-4 pb-32">
            <div className="mx-auto max-w-[1400px]">
                <div className="flex gap-3 md:gap-5 items-start">
                    {columns.map((col, colIdx) => (
                        <div key={colIdx} className="flex-1 min-w-0">
                            {col.map((src, rowIdx) => (
                                <GalleryCard key={src} src={src} onClick={onSelect} priority={rowIdx === 0} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function PortfolioTemplate() {
    useSmoothScroll();

    const [selectedMedia, setSelectedMedia] = useState(null);

    return (
        <>
            <HennaCursor />

            {/* CSS fade-in for gallery cards – replaces per-item framer-motion whileInView */}
            <style jsx global>{`
                .portfolio-card {
                    opacity: 0;
                    transform: translateY(24px);
                    animation: pCardIn 0.5s ease forwards;
                }
                @keyframes pCardIn {
                    to { opacity: 1; transform: translateY(0); }
                }
                /* stagger via nth-child for the first visible batch */
                .portfolio-card:nth-child(1)  { animation-delay: 0s; }
                .portfolio-card:nth-child(2)  { animation-delay: 0.04s; }
                .portfolio-card:nth-child(3)  { animation-delay: 0.08s; }
                .portfolio-card:nth-child(4)  { animation-delay: 0.12s; }
                .portfolio-card:nth-child(5)  { animation-delay: 0.16s; }
                .portfolio-card:nth-child(6)  { animation-delay: 0.2s; }
                .portfolio-card:nth-child(7)  { animation-delay: 0.24s; }
                .portfolio-card:nth-child(8)  { animation-delay: 0.28s; }
                .portfolio-card:nth-child(n+9) { animation-delay: 0.3s; }
            `}</style>

            <main className="min-h-screen bg-[#F2F0E9]">
                {/* Hero Header */}
                <section className="relative px-6 pt-40 pb-20 text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                        style={{ backgroundImage: 'url("/images/noise.png")', backgroundRepeat: "repeat" }}>
                    </div>

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
                        <p className="sr-only">
                            Browse the bridal makeup and mehndi portfolio of Mayuri Kakkad at MK Studio in Pittsburgh, Pennsylvania. This gallery features real South Asian brides — Indian, Gujarati, and South Indian — showcasing bridal makeup, intricate henna designs, luxury hair styling, engagement and sangeet looks, haldi ceremony makeup, and reception transformations. With 27+ years of experience and a 5.0-star rating from 47 verified reviews, Mayuri specializes in soft glam bridal makeup, full glam bridal makeup, Gujarati mehndi, Rajasthani mehndi, Arabic henna, and bridal hairstyling including updos, dupatta setting, and passa and tikka placement. Available for weddings across Pennsylvania, New Jersey, New York, Ohio, and Washington D.C.
                        </p>
                    </motion.div>
                </section>

                {/* Masonry Gallery – manual column distribution for row-first order */}
                <MasonryGallery items={portfolioMedia} onSelect={setSelectedMedia} />

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedMedia && (
                        <motion.div
                            className="fixed inset-0 z-[150] flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-sm p-2 md:p-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMedia(null)}
                        >
                            <motion.button
                                className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white active:text-white transition-colors z-[160]"
                                onClick={() => setSelectedMedia(null)}
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
                                onClick={(e) => e.stopPropagation()}
                            >
                                {isVideo(selectedMedia) ? (
                                    <video
                                        src={selectedMedia}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-auto h-auto max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
                                    />
                                ) : (
                                    <Image
                                        src={selectedMedia}
                                        alt="Full view of bridal makeup and mehndi portfolio piece"
                                        width={1600}
                                        height={2000}
                                        className="w-auto h-auto max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
                                    />
                                )}
                            </motion.div>

                            <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none flex flex-col items-center gap-2">
                                <span className="font-sans text-xs tracking-widest text-white/40 uppercase">
                                    Mayuri Kakkad Portfolio
                                </span>
                                {!isVideo(selectedMedia) && (
                                    <a
                                        href={selectedMedia}
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pointer-events-auto text-xs font-sans text-white/60 hover:text-white underline underline-offset-4 transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        View / Download High-Res Original
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <Footer />
        </>
    );
}
