"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HennaCursor = dynamic(() => import("@/components/HennaCursor"), { ssr: false });

export default function AboutPage() {
    return (
        <>
            <HennaCursor />
            <Navbar />

            <main className="min-h-screen pt-24 bg-cream">
                {/* Hero Section */}
                <section className="section-padding">
                    <div className="container-main">
                        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
                            {/* Image */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src="/images/Mayuri.png"
                                        alt="Mayuri Kakkad"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Decorative frame */}
                                <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full border border-[var(--vibe-accent)]" />
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.3em] text-[var(--vibe-accent)]">
                                    About Me
                                </p>
                                <h1 className="mb-4 font-serif text-4xl md:text-5xl text-antique-gold">
                                    Mayuri <span className="italic">Kakkad</span>
                                </h1>
                                <p className="mb-8 font-sans text-sm font-medium uppercase tracking-[0.15em] text-antique-gold/60">
                                    Expert Makeup & Mehendi Artist
                                </p>

                                <div className="space-y-6 font-sans text-antique-gold/80">
                                    <p>
                                        I am a cosmetologist and licensed makeup artist with 27 years of experience.
                                        I am currently providing makeup and henna services throughout Western Pennsylvania
                                        and am open to traveling around the Northeast for my services.
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="mt-12 grid grid-cols-3 gap-8 border-t border-antique-gold/10 pt-8">
                                    <div>
                                        <span className="block font-serif text-4xl text-[var(--vibe-accent)]">27+</span>
                                        <span className="font-sans text-sm uppercase tracking-wider text-antique-gold/60">Years</span>
                                    </div>
                                    <div>
                                        <span className="block font-serif text-4xl text-[var(--vibe-accent)]">500+</span>
                                        <span className="font-sans text-sm uppercase tracking-wider text-antique-gold/60">Brides</span>
                                    </div>
                                    <div>
                                        <span className="block font-serif text-4xl text-[var(--vibe-accent)]">∞</span>
                                        <span className="font-sans text-sm uppercase tracking-wider text-antique-gold/60">Stories</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Life Section */}
                <section className="section-padding bg-sand/30">
                    <div className="container-main">
                        <motion.div
                            className="max-w-3xl mx-auto text-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.3em] text-[var(--vibe-accent)]">
                                My Story
                            </p>
                            <h2 className="mb-8 font-serif text-3xl md:text-4xl text-antique-gold">
                                Life <span className="italic">& Passion</span>
                            </h2>
                            <p className="font-sans text-lg text-antique-gold/80 leading-relaxed">
                                I was born and raised in Hyderabad, India. Apart from work, I'm a classical dancer
                                and enjoy music. I'm also a homemaker and take pride in raising my happy family
                                with my husband and our two boys.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="section-padding">
                    <div className="container-main">
                        <motion.div
                            className="max-w-3xl mx-auto text-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.3em] text-[var(--vibe-accent)]">
                                Experience
                            </p>
                            <h2 className="mb-8 font-serif text-3xl md:text-4xl text-antique-gold">
                                Crafting <span className="italic">Beauty</span>
                            </h2>
                            <p className="font-sans text-lg text-antique-gold/80 leading-relaxed">
                                I have been a makeup and Mehndi artist for 27 years now. I take pride in adorning
                                brides and clients with stunning designs that bring out their inner beauty and
                                express their unique personalities. I have always been committed to providing
                                artistic and professional services to make my clients' experience with makeup
                                and Mehendi unforgettable.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Quote */}
                <section className="section-padding bg-antique-gold text-cream">
                    <div className="container-main">
                        <motion.blockquote
                            className="max-w-3xl mx-auto text-center"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="font-serif text-2xl md:text-3xl italic leading-relaxed">
                                "Every design is a whispered blessing, a silent prayer inked on skin,
                                carrying forward centuries of tradition into your new beginning."
                            </p>
                            <footer className="mt-8">
                                <span className="inline-block h-px w-12 bg-[var(--vibe-accent)]" />
                                <p className="mt-4 font-sans text-sm uppercase tracking-widest text-cream/60">
                                    — Mayuri Kakkad
                                </p>
                            </footer>
                        </motion.blockquote>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
