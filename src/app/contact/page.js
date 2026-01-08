"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HennaCursor = dynamic(() => import("@/components/HennaCursor"), { ssr: false });

const inquiryTypes = [
    "Bridal Makeup",
    "Bridal Mehendi",
    "Hair Styling",
    "Bridal Party",
    "Special Occasion",
    "Other",
];

export default function ContactPage() {
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
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <>
            <HennaCursor />
            <Navbar />

            <main className="min-h-screen pt-24 bg-sand/30">
                <div className="container-main section-padding">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.3em] text-[var(--vibe-accent)]">
                            Get in Touch
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl text-antique-gold mb-6">
                            Let's Create Something <span className="italic">Beautiful</span>
                        </h1>
                        <p className="max-w-2xl mx-auto font-sans text-antique-gold/70">
                            Ready to begin your beauty journey? Fill out the form and I'll be in touch
                            within 24 hours to discuss your vision and availability.
                        </p>
                    </motion.div>

                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="space-y-8">
                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center bg-[var(--vibe-accent)]/10">
                                        <svg className="h-6 w-6 text-[var(--vibe-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-sans text-sm text-antique-gold/60">Email</p>
                                        <a href="mailto:mkstudiobridal@gmail.com" className="font-sans text-lg text-antique-gold hover:text-[var(--vibe-accent)] transition-colors">
                                            mkstudiobridal@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center bg-[var(--vibe-accent)]/10">
                                        <svg className="h-6 w-6 text-[var(--vibe-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-sans text-sm text-antique-gold/60">Phone</p>
                                        <a href="tel:201-912-6702" className="font-sans text-lg text-antique-gold hover:text-[var(--vibe-accent)] transition-colors">
                                            (201) 912-6702
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center bg-[var(--vibe-accent)]/10">
                                        <svg className="h-6 w-6 text-[var(--vibe-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-sans text-sm text-antique-gold/60">Location</p>
                                        <p className="font-sans text-lg text-antique-gold">
                                            Pittsburgh, Pennsylvania
                                        </p>
                                        <p className="font-sans text-sm text-antique-gold/60">
                                            Available throughout the Northeast
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-12">
                                <p className="mb-4 font-sans text-sm uppercase tracking-widest text-antique-gold/60">
                                    Follow the Journey
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://instagram.com/mayuris_studio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-12 w-12 items-center justify-center border border-antique-gold/20 text-antique-gold transition-all hover:border-[var(--vibe-accent)] hover:text-[var(--vibe-accent)]"
                                    >
                                        <span className="sr-only">Instagram</span>
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/MayuriBridalstudio/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-12 w-12 items-center justify-center border border-antique-gold/20 text-antique-gold transition-all hover:border-[var(--vibe-accent)] hover:text-[var(--vibe-accent)]"
                                    >
                                        <span className="sr-only">Facebook</span>
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="bg-cream p-8 shadow-lg sm:p-12">
                                {submitted ? (
                                    <motion.div
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--vibe-accent)]/20">
                                            <svg className="h-8 w-8 text-[var(--vibe-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="mb-4 font-serif text-2xl text-antique-gold">Thank You!</h3>
                                        <p className="text-antique-gold/70">
                                            Your inquiry has been received. I'll be in touch within 24 hours to discuss your vision.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block font-sans text-sm uppercase tracking-widest text-antique-gold/60">
                                                    Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full border-b border-antique-gold/20 bg-transparent py-3 font-sans text-antique-gold outline-none transition-colors focus:border-[var(--vibe-accent)]"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block font-sans text-sm uppercase tracking-widest text-antique-gold/60">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full border-b border-antique-gold/20 bg-transparent py-3 font-sans text-antique-gold outline-none transition-colors focus:border-[var(--vibe-accent)]"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block font-sans text-sm uppercase tracking-widest text-antique-gold/60">
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full border-b border-antique-gold/20 bg-transparent py-3 font-sans text-antique-gold outline-none transition-colors focus:border-[var(--vibe-accent)]"
                                                    placeholder="(000) 000-0000"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block font-sans text-sm uppercase tracking-widest text-antique-gold/60">
                                                    Event Date
                                                </label>
                                                <input
                                                    type="date"
                                                    name="eventDate"
                                                    value={formData.eventDate}
                                                    onChange={handleChange}
                                                    className="w-full border-b border-antique-gold/20 bg-transparent py-3 font-sans text-antique-gold outline-none transition-colors focus:border-[var(--vibe-accent)]"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block font-sans text-sm uppercase tracking-widest text-antique-gold/60">
                                                Inquiry Type *
                                            </label>
                                            <select
                                                name="inquiryType"
                                                required
                                                value={formData.inquiryType}
                                                onChange={handleChange}
                                                className="w-full cursor-pointer border-b border-antique-gold/20 bg-transparent py-3 font-sans text-antique-gold outline-none transition-colors focus:border-[var(--vibe-accent)]"
                                            >
                                                <option value="">Select an option</option>
                                                {inquiryTypes.map((type) => (
                                                    <option key={type} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="mb-2 block font-sans text-sm uppercase tracking-widest text-antique-gold/60">
                                                Tell Me About Your Vision *
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full resize-none border-b border-antique-gold/20 bg-transparent py-3 font-sans text-antique-gold outline-none transition-colors focus:border-[var(--vibe-accent)]"
                                                placeholder="Describe your event, style preferences, and any inspiration..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-[var(--vibe-accent)] text-cream font-sans text-sm uppercase tracking-widest transition-all hover:bg-antique-gold disabled:opacity-50"
                                        >
                                            {isSubmitting ? "Sending..." : "Send Inquiry"}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
