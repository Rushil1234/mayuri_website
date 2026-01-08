"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MagneticButton from "./MagneticButton";

const services = [
    {
        id: 1,
        name: "Make-Up",
        description: "I am a professional makeup artist with years of experience in the industry. I specialize in creating stunning makeup looks that enhance your natural features and make you feel confident and beautiful. Whether you're getting ready for a special occasion or just want to treat yourself to a glam makeover, I can help you achieve the perfect look. From classic bridal makeup to bold and edgy editorial looks, I have a wide range of skills and techniques to suit any style.",
        popular: false,
    },
    {
        id: 2,
        name: "Hair Styling",
        description: "Multi certified hairstylist with a passion for delivering hair artistry and service excellence exceeding client expectations. Blend creativity, vision, and skill with strengths in achieving custom cut, color, and design solutions meeting client needs and lifestyles. Gladfully working with brides for their special occasions. I believing in building of lasting relationships and loyal clientele.",
        popular: true,
    },
    {
        id: 3,
        name: "Mehendi / Henna",
        description: "I am also a skilled Mehndi artist with a passion for creating intricate and beautiful designs. From traditional bridal Mehndi to contemporary patterns and designs, I can create a wide range of styles to suit any taste. Using only the finest quality henna, I ensure that each design is rich in color and long-lasting. My Packages depend on the style and length of the mehndi on arms and legs. I take great pride in my work and strive to make each Mehndi experience a special and memorable one for my clients.",
        popular: false,
    },
];

export default function Services() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="services"
            ref={sectionRef}
            className="section-padding bg-cream text-charcoal"
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
                        Services & Packages
                    </p>
                    <h2 className="mb-6 font-serif">
                        Tailored to Your <span className="italic">Vision</span>
                    </h2>
                    <p className="mx-auto max-w-2xl font-sans text-charcoal/70">
                        Every client deserves a bespoke experience. Choose a service that speaks
                        to your style, or let's create something entirely unique together.
                    </p>
                </motion.div>

                {/* Services grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={`relative flex flex-col border p-8 transition-all duration-300 ${service.popular
                                ? "border-[var(--vibe-accent)] bg-cream"
                                : "border-charcoal/10 hover:border-charcoal/30"
                                }`}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            {/* Popular badge */}
                            {service.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--vibe-accent)] px-4 py-1 text-xs font-sans uppercase tracking-widest text-cream">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8 flex-grow">
                                <h3 className="mb-4 font-serif text-2xl text-charcoal">{service.name}</h3>
                                <p className="text-sm text-charcoal/80 leading-relaxed">{service.description}</p>
                            </div>

                            <MagneticButton
                                href="/contact"
                                variant={service.popular ? "primary" : "secondary"}
                                className={service.popular ? "" : "border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"}
                            >
                                Inquire Now
                            </MagneticButton>
                        </motion.div>
                    ))}
                </div>

                {/* Custom note */}
                <motion.p
                    className="mt-16 text-center font-sans text-sm text-charcoal/60"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Looking for something different? All services can be customized.
                    <a href="/contact" className="ml-1 text-[var(--vibe-accent)] underline">
                        Let's chat about your vision
                    </a>
                </motion.p>
            </div>
        </section>
    );
}
