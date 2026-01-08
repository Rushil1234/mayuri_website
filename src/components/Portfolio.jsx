"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import IntricateZoom from "./IntricateZoom";
import StainToggle from "./StainToggle";

const categories = ["All", "Bridal", "Minimal", "Fusion"];

export default function Portfolio({ images = [] }) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [showStainToggle, setShowStainToggle] = useState(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // Demo images if none provided
    const portfolioImages = images.length > 0 ? images : [
        { id: 1, src: "/images/henna-1.jpg", freshSrc: "/images/henna-1-fresh.jpg", category: "Bridal", title: "Royal Bridal" },
        { id: 2, src: "/images/henna-2.jpg", freshSrc: "/images/henna-2-fresh.jpg", category: "Minimal", title: "Modern Lines" },
        { id: 3, src: "/images/henna-3.jpg", freshSrc: "/images/henna-3-fresh.jpg", category: "Fusion", title: "East Meets West" },
        { id: 4, src: "/images/henna-4.jpg", freshSrc: "/images/henna-4-fresh.jpg", category: "Bridal", title: "Intricate Mandala" },
        { id: 5, src: "/images/henna-5.jpg", freshSrc: "/images/henna-5-fresh.jpg", category: "Minimal", title: "Delicate Vines" },
        { id: 6, src: "/images/henna-6.jpg", freshSrc: "/images/henna-6-fresh.jpg", category: "Fusion", title: "Contemporary Art" },
    ];

    const filteredImages = activeCategory === "All"
        ? portfolioImages
        : portfolioImages.filter((img) => img.category === activeCategory);

    return (
        <section
            id="portfolio"
            ref={sectionRef}
            className="section-padding bg-cream"
        >
            <div className="container-main">
                {/* Section header */}
                <motion.div
                    className="mb-20 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.3em] text-[var(--vibe-accent)]">
                        Portfolio
                    </p>
                    <h2 className="mb-6 font-serif text-charcoal">
                        The Art of <span className="italic text-antique-gold">Adornment</span>
                    </h2>
                    <p className="mx-auto max-w-2xl font-sans text-charcoal/70">
                        Each design is a unique conversation between tradition and personal expression.
                        Hover to see the intricate details, or toggle to witness the beautiful transformation
                        from fresh paste to mature stain.
                    </p>
                </motion.div>

                {/* Category filters */}
                <motion.div
                    className="mb-16 flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`
                cursor-none px-6 py-2 font-sans text-sm uppercase tracking-widest
                transition-all duration-300
                ${activeCategory === category
                                    ? "bg-[var(--vibe-accent)] text-cream"
                                    : "bg-transparent text-charcoal hover:bg-charcoal/5"
                                }
              `}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Gallery grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            {/* Toggle button for stain comparison */}
                            <button
                                onClick={() => setShowStainToggle(showStainToggle === image.id ? null : image.id)}
                                className="absolute right-4 top-4 z-30 cursor-none rounded-full bg-cream/90 p-2 opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                </svg>
                            </button>

                            {/* Image with zoom or stain toggle */}
                            {showStainToggle === image.id ? (
                                <StainToggle
                                    freshImage={image.freshSrc || image.src}
                                    matureImage={image.src}
                                    alt={image.title}
                                    className="aspect-[4/5]"
                                />
                            ) : (
                                <IntricateZoom
                                    src={image.src}
                                    alt={image.title}
                                    className="aspect-[4/5]"
                                />
                            )}

                            {/* Image info overlay */}
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100"
                            >
                                <p className="font-sans text-xs uppercase tracking-widest text-cream/70">
                                    {image.category}
                                </p>
                                <h3 className="font-serif text-xl text-cream">
                                    {image.title}
                                </h3>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
