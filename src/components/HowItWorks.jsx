"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
    {
        number: "01",
        title: "Get in touch",
        align: "left",
        description: "Send over all your wedding details. I'll check my availability and send my exclusive bridal package your way.",
    },
    {
        number: "02",
        title: "Booking",
        align: "right",
        description: "We'll lock in your date and schedule a trial. I'll travel to you—just need a little table space!",
    },
    {
        number: "03",
        title: "The big day",
        align: "left",
        description: "I arrive early, manage the timeline, and ensure you feel calm, pampered, and radiant.",
    },
];

// Sub-component for individual steps
const StepContent = ({ step }) => {
    const isLeft = step.align === "left";

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex flex-col ${isLeft ? "md:items-end md:text-right md:pr-16" : "md:items-start md:text-left md:pl-16"}`}
        >
            {/* Shoulder Number - Pushed to the outer top corner */}
            <span className={`absolute -top-16 font-serif text-[7rem] md:text-[9rem] text-antique-gold/30 leading-none select-none z-10 ${isLeft ? "left-0 md:-left-8" : "right-0 md:-right-8"
                }`}>
                {step.number}
            </span>

            {/* Script Title - Layered behind the box */}
            <h3 className="relative z-20 font-hero-brand text-5xl md:text-7xl text-charcoal leading-[0.7] mb-4">
                {step.title}
            </h3>

            {/* The Text Box - Pushed to the front (z-30) for maximum readability */}
            <div className="relative z-30 bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white shadow-xl shadow-charcoal/5 max-w-xs">
                <p className="font-serif text-lg leading-relaxed text-charcoal/80">
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
};

export default function HowItWorks() {
    return (
        <section className="relative overflow-hidden bg-[#F4F1EA] py-24 md:py-32">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'url("/images/noise.png")', backgroundRepeat: "repeat" }}>
            </div>

            <div className="container relative z-10 mx-auto max-w-6xl px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-32"
                >
                    <span className="font-sans text-xs font-bold tracking-[0.3em] text-antique-gold uppercase mb-4 block">
                        The Process
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl text-charcoal leading-tight">
                        Your Journey to <span className="italic text-antique-gold">Radiance</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* The Golden Thread - Central line */}
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-antique-gold/20 hidden md:block"></div>

                    <div className="space-y-32 md:space-y-48">
                        {steps.map((step) => (
                            <div key={step.number} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-0">

                                {/* Left Side Content */}
                                <div className={`${step.align === "left" ? "block" : "hidden md:block"}`}>
                                    {step.align === "left" && <StepContent step={step} />}
                                </div>

                                {/* Center Dot - Perfectly aligned via Grid */}
                                <div className="flex justify-center z-40">
                                    <div className="h-4 w-4 rounded-full bg-antique-gold ring-[12px] ring-[#F4F1EA] shadow-lg shadow-antique-gold/20"></div>
                                </div>

                                {/* Right Side Content */}
                                <div className={`${step.align === "right" ? "block" : "hidden md:block"}`}>
                                    {step.align === "right" && <StepContent step={step} />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <motion.div className="mt-40 text-center">
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-charcoal px-12 py-5 font-sans text-xs font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-antique-gold"
                    >
                        <span className="relative z-10">
                            Start Your Journey
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}