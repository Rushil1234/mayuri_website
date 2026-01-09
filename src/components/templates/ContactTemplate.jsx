"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import useSmoothScroll from "@/hooks/useSmoothScroll";

import Footer from "@/components/Footer";

const HennaCursor = dynamic(() => import("@/components/HennaCursor"), { ssr: false });

const inquiryTypes = [
    "Bridal Mehendi",
    "Bridal Makeup",
    "Non-Bridal / Party",
    "Editorial / Shoot",
    "Training / Workshop",
    "Other"
];

export default function ContactTemplate() {
    // Initialize smooth scrolling
    useSmoothScroll();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        eventDate: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Error submitting form.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <HennaCursor />


            <main className="min-h-screen bg-[#F2F0E9] relative overflow-hidden">
                {/* Global Grain Texture */}
                <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-0 mix-blend-multiply"
                    style={{ backgroundImage: 'url("/images/noise.png")', backgroundRepeat: "repeat" }}>
                </div>

                {/* Decorative Henna SVG Reuse (Top Right) */}
                <div className="absolute -top-20 -right-20 w-[400px] md:w-[600px] opacity-10 pointer-events-none rotate-12 z-0 text-antique-gold">
                    <svg viewBox="0 0 2400 800" fill="none" className="w-full h-full text-current">
                        {/* Simplified path for background decoration - using the 'stem' from the download.svg */}
                        <path d="M60,520 C220,430 320,380 480,420 C640,460 720,560 860,560 C980,560 1080,460 1220,430 C1380,400 1500,480 1620,520 C1780,575 1900,560 2040,480 C2160,410 2240,380 2340,410" stroke="currentColor" strokeWidth="20" fill="none" />
                    </svg>
                </div>

                <div className="container-main pt-32 pb-20 relative z-10">

                    {/* Header Section */}
                    <div className="text-center mb-16 relative">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-hero-brand text-[15vw] md:text-[8rem] leading-[0.8] text-antique-gold opacity-90 relative z-10 tracking-tight"
                        >
                            start the journey
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="font-serif text-charcoal italic text-xl md:text-2xl mt-4 relative z-20"
                        >
                            Let's create something <span className="border-b border-antique-gold">timeless</span> together.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                        {/* LEFT COLUMN: Visual & Contact Info */}
                        <motion.div
                            className="lg:col-span-5 space-y-12"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Image Card */}
                            <div className="relative aspect-[4/5] w-full rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out group">
                                <div className="absolute inset-0 bg-antique-gold/10 -z-10 translate-x-4 translate-y-4 rounded-sm"></div>
                                <div className="absolute inset-0 border border-white/50 z-20 m-4 pointer-events-none"></div>
                                <Image
                                    src="/images/contact-mayuri.jpg"
                                    alt="Mayuri Kakkad"
                                    fill
                                    className="object-cover shadow-2xl rounded-sm grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            {/* Direct Contact Info */}
                            <div className="space-y-8 pl-4 border-l border-antique-gold/30">
                                <div>
                                    <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-antique-gold mb-2">Email</h3>
                                    <a href="mailto:mayurikakkad@gmail.com" className="font-serif text-2xl text-charcoal hover:text-antique-gold transition-colors block">
                                        mayurikakkad@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-antique-gold mb-2">Phone</h3>
                                    <a href="tel:2019126702" className="font-serif text-2xl text-charcoal hover:text-antique-gold transition-colors block">
                                        (201) 912-6702
                                    </a>
                                </div>
                                <div>
                                    <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-antique-gold mb-2">Studio</h3>
                                    <p className="font-serif text-xl text-charcoal leading-relaxed">
                                        Pittsburgh, Pennsylvania<br />
                                        <span className="text-base italic text-charcoal/60">Available for travel in Northeastern US</span>
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-antique-gold mb-2">Socials</h3>
                                    <div className="flex gap-6">
                                        <a href="https://instagram.com/mayuris_studio" target="_blank" className="font-serif text-lg text-charcoal hover:text-antique-gold underline decoration-antique-gold/30 underline-offset-4">Instagram</a>
                                        <a href="https://facebook.com" target="_blank" className="font-serif text-lg text-charcoal hover:text-antique-gold underline decoration-antique-gold/30 underline-offset-4">Facebook</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN: The Form */}
                        <motion.div
                            className="lg:col-span-7 bg-white/40 p-8 md:p-12 backdrop-blur-sm border border-white/60 shadow-sm relative"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-antique-gold/30 -mt-2 -mr-2"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-antique-gold/30 -mb-2 -ml-2"></div>

                            {submitted ? (
                                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-20 h-20 rounded-full bg-antique-gold/20 flex items-center justify-center text-antique-gold mb-4"
                                    >
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    </motion.div>
                                    <h3 className="font-hero-brand text-4xl md:text-5xl text-charcoal mb-4">Thank You</h3>
                                    <p className="font-serif text-lg text-charcoal/70 max-w-md">Your inquiry has been received. I'll be in touch shortly to start planning your vision.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-10">
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="group">
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Name"
                                                className="w-full bg-transparent border-b border-charcoal/20 py-4 font-serif text-xl text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-antique-gold transition-colors"
                                            />
                                        </div>
                                        <div className="group">
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address"
                                                className="w-full bg-transparent border-b border-charcoal/20 py-4 font-serif text-xl text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-antique-gold transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="group">
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone Number"
                                                className="w-full bg-transparent border-b border-charcoal/20 py-4 font-serif text-xl text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-antique-gold transition-colors"
                                            />
                                        </div>
                                        <div className="group">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    onFocus={(e) => e.target.type = 'date'}
                                                    onBlur={(e) => e.target.type = 'text'}
                                                    name="eventDate"
                                                    value={formData.eventDate}
                                                    onChange={handleChange}
                                                    placeholder="Event Date (Optional)"
                                                    className="w-full bg-transparent border-b border-charcoal/20 py-4 font-serif text-xl text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-antique-gold transition-colors"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group relative">
                                        <label className="block font-sans text-xs font-bold uppercase tracking-widest text-antique-gold mb-3">What are you dreaming of?</label>
                                        <div className="flex flex-wrap gap-3">
                                            {inquiryTypes.map(type => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, inquiryType: type })}
                                                    className={`px-6 py-2 rounded-full border transition-all duration-300 font-sans text-xs uppercase tracking-wide
                                                        ${formData.inquiryType === type
                                                            ? "bg-antique-gold text-white border-antique-gold shadow-md"
                                                            : "border-charcoal/20 text-charcoal/60 hover:border-antique-gold hover:text-antique-gold bg-transparent"
                                                        }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="group">
                                        <textarea
                                            name="message"
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your vision, venue, style ideas, and any questions..."
                                            className="w-full bg-transparent border-b border-charcoal/20 py-4 font-serif text-xl text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-antique-gold transition-colors resize-none"
                                        />
                                    </div>

                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group relative w-full overflow-hidden bg-charcoal text-white py-5 px-8 font-sans text-xs font-bold uppercase tracking-[0.25em] transition-all hover:bg-antique-gold disabled:opacity-50"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-3">
                                                {isSubmitting ? "Sending..." : "Send Inquiry"}
                                                {!isSubmitting && <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>}
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
