"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom cubic bezier for heavy, weighted feel
const customEase = [0.77, 0, 0.175, 1];

export default function SplitReveal({ children, onAnimationComplete }) {
    // Check if intro was already shown this session
    const [hasSeenIntro, setHasSeenIntro] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false);

    useEffect(() => {
        // Check sessionStorage on mount
        const seenIntro = sessionStorage.getItem("hasSeenIntro");
        if (seenIntro) {
            // Skip intro animation
            setHasSeenIntro(true);
            setIsRevealed(true);
            setIsRemoved(true);
            onAnimationComplete?.();
        } else {
            // Show intro and mark as seen
            sessionStorage.setItem("hasSeenIntro", "true");
            // Start reveal after 1 second delay
            const timer = setTimeout(() => {
                setIsRevealed(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAnimationComplete = () => {
        // Remove panels from DOM after animation
        setTimeout(() => {
            setIsRemoved(true);
            onAnimationComplete?.();
        }, 100);
    };

    return (
        <>
            {/* Hero content underneath - scales up as panels reveal */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                    scale: isRevealed ? 1 : 0.9,
                    opacity: isRevealed ? 1 : 0,
                }}
                transition={{
                    duration: 1.2,
                    ease: customEase,
                    delay: 0.1,
                }}
            >
                {children}
            </motion.div>

            {/* Split panels overlay */}
            <AnimatePresence>
                {!isRemoved && (
                    <>
                        {/* Left Panel */}
                        <motion.div
                            className="fixed inset-y-0 left-0 z-[100] w-1/2 bg-cream"
                            initial={{ x: 0 }}
                            animate={{ x: isRevealed ? "-100%" : 0 }}
                            exit={{ x: "-100%" }}
                            transition={{
                                duration: 1.2,
                                ease: customEase,
                            }}
                            onAnimationComplete={() => {
                                if (isRevealed) handleAnimationComplete();
                            }}
                        >
                            {/* Left half of text */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden">
                                <span
                                    className="block whitespace-nowrap pr-0 text-right font-serif text-[clamp(2rem,6vw,5rem)] font-light tracking-[0.3em] text-charcoal"
                                    style={{
                                        fontFamily: "'Playfair Display', Georgia, serif",
                                        fontStyle: "italic",
                                    }}
                                >
                                    MK Stu
                                </span>
                            </div>
                        </motion.div>

                        {/* Right Panel */}
                        <motion.div
                            className="fixed inset-y-0 right-0 z-[100] w-1/2 bg-cream"
                            initial={{ x: 0 }}
                            animate={{ x: isRevealed ? "100%" : 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                duration: 1.2,
                                ease: customEase,
                            }}
                        >
                            {/* Right half of text */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden">
                                <span
                                    className="block whitespace-nowrap pl-0 text-left font-serif text-[clamp(2rem,6vw,5rem)] font-light tracking-[0.3em] text-charcoal"
                                    style={{
                                        fontFamily: "'Playfair Display', Georgia, serif",
                                        fontStyle: "italic",
                                    }}
                                >
                                    dio
                                </span>
                            </div>
                        </motion.div>

                        {/* Center line accent (subtle gold line where panels meet) */}
                        <motion.div
                            className="fixed left-1/2 top-0 z-[101] h-full w-px -translate-x-1/2 bg-[var(--color-antique-gold)]"
                            initial={{ scaleY: 0, opacity: 0 }}
                            animate={{
                                scaleY: isRevealed ? 0 : 1,
                                opacity: isRevealed ? 0 : 0.3,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: customEase,
                            }}
                            style={{ transformOrigin: "center" }}
                        />
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
