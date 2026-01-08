"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section
            id="services"
            ref={sectionRef}
            className="relative overflow-hidden bg-white py-32"
        >
            {/* =========================================
                GEOMETRIC CONTAINER (The "Big Box" fitting everything)
               ========================================= */}
            <div className="absolute left-[5%] right-[5%] top-[10%] bottom-[10%] z-0 hidden md:block">
                {/* Main colored background box - Framing the content */}
                <div className="absolute inset-0 border border-antique-gold/30 bg-[#F4F1EA]"></div>

                {/* Offset styling outline */}
                <div className="absolute -left-4 -top-4 h-full w-full border border-charcoal/10"></div>

                {/* Decorative solid block corner */}
                <div className="absolute -right-12 top-20 h-64 w-24 bg-antique-gold/10"></div>
            </div>

            {/* Mobile background fallback */}
            <div className="absolute inset-0 z-0 bg-[#F4F1EA] md:hidden"></div>


            <div className="container-main relative z-10 py-12 md:px-12">
                {/* Section header */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="mb-4 block font-sans text-xs font-bold uppercase tracking-[0.3em] text-antique-gold">
                            Services & Packages
                        </span>
                        <h2 className="flex flex-col items-center justify-center leading-none">
                            <span className="font-serif text-5xl text-charcoal md:text-6xl">Tailored to Your</span>
                            <span className="mt-2 font-hero-brand text-[5rem] text-antique-gold md:text-[6rem]">Vision</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Services grid - Staggered layout */}
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={`relative flex flex-col justify-between border bg-white/50 p-10 backdrop-blur-sm transition-all duration-500 hover:shadow-xl ${index === 1 ? "lg:-mt-12 lg:mb-12 border-antique-gold/50 shadow-md" : "border-charcoal/10"
                                }`} // Stagger the middle card upwards
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Decorative corner box for each card */}
                            <div className="absolute right-4 top-4 h-8 w-8 border-r border-t border-charcoal/10"></div>

                            <div>
                                <h3 className="mb-6 font-serif text-3xl text-charcoal">{service.name}</h3>
                                <p className="mb-8 font-serif text-base leading-relaxed text-charcoal/80">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Centered CTA Button */}
                <div className="mt-20 flex justify-center">
                    <MagneticButton
                        href="/contact"
                        variant="secondary"
                    >
                        INQUIRE NOW
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}
