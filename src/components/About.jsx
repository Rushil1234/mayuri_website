"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function About({ artistImage }) {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="section-padding bg-cream"
        >
            <div className="container-main">
                <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Image */}
                    <motion.div
                        ref={imageRef}
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="relative aspect-[3/4] overflow-hidden"
                            style={{ y: imageY }}
                        >
                            <div
                                className="h-full w-full bg-cover bg-center"
                                style={{
                                    backgroundImage: artistImage
                                        ? `url(${artistImage})`
                                        : `linear-gradient(135deg, var(--color-dusty-rose) 0%, var(--color-sand) 100%)`,
                                }}
                            />
                        </motion.div>

                        {/* Decorative frame */}
                        <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full border border-[var(--vibe-accent)]" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="mb-8 relative">
                            <span className="block font-serif text-4xl text-charcoal md:text-5xl ml-4">The Artist</span>
                            <span className="block font-signature text-7xl text-antique-gold md:text-9xl -mt-6">Mayuri Kakkad</span>
                        </h2>
                        <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.15em] text-antique-gold/60">
                            Expert Makeup & Mehendi Artist
                        </p>

                        <div className="space-y-6 font-sans text-charcoal/80">
                            <p>
                                I am a cosmetologist and licensed makeup artist with 27 years of experience.
                                I am currently providing makeup and henna services throughout Western Pennsylvania
                                and am open to traveling around the Northeast for my services.
                            </p>
                            <p>
                                I was born and raised in Hyderabad, India. Apart from work, I'm a classical dancer
                                and enjoy music. I'm also a homemaker and take pride in raising my happy family
                                with my husband and our two boys.
                            </p>
                            <p>
                                I take pride in adorning brides and clients with stunning designs that bring out their
                                inner beauty and express their unique personalities. I have always been committed to
                                providing artistic and professional services to make my clients' experience with
                                makeup and Mehendi unforgettable.
                            </p>
                        </div>

                        {/* Credentials */}
                        <div className="mt-12 grid grid-cols-3 gap-8 border-t border-antique-gold/10 pt-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <span className="block font-serif text-4xl text-[var(--vibe-accent)]">27+</span>
                                <span className="font-sans text-sm uppercase tracking-wider text-antique-gold/60">Years</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <span className="block font-serif text-4xl text-[var(--vibe-accent)]">500+</span>
                                <span className="font-sans text-sm uppercase tracking-wider text-antique-gold/60">Brides</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <span className="block font-serif text-4xl text-[var(--vibe-accent)]">∞</span>
                                <span className="font-sans text-sm uppercase tracking-wider text-antique-gold/60">Stories</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Philosophy section */}
                <motion.div
                    className="mt-32 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <blockquote className="mx-auto max-w-3xl">
                        <p className="font-serif text-2xl italic text-antique-gold sm:text-3xl">
                            "Every design is a whispered blessing, a silent prayer inked on skin,
                            carrying forward centuries of tradition into your new beginning."
                        </p>
                        <footer className="mt-8">
                            <span className="inline-block h-px w-12 bg-[var(--vibe-accent)]" />
                            <p className="mt-4 font-sans text-sm uppercase tracking-widest text-antique-gold/60">
                                — Mayuri Kakkad
                            </p>
                        </footer>
                    </blockquote>
                </motion.div>
            </div>
        </section>
    );
}
