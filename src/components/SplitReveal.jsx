"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom cubic bezier for heavy, weighted feel
const customEase = [0.77, 0, 0.175, 1];

export default function SplitReveal({ children, onAnimationComplete }) {
    // Check if intro was already shown this session
    // Initialize state based on session storage (client-side only due to ssr: false)
    const [hasSeenIntro, setHasSeenIntro] = useState(() => {
        if (typeof window !== 'undefined') return !!sessionStorage.getItem("hasSeenIntro");
        return false;
    });
    const [isRevealed, setIsRevealed] = useState(() => {
        if (typeof window !== 'undefined') return !!sessionStorage.getItem("hasSeenIntro");
        return false;
    });
    const [isRemoved, setIsRemoved] = useState(() => {
        if (typeof window !== 'undefined') return !!sessionStorage.getItem("hasSeenIntro");
        return false;
    });
    const [shouldAnimate, setShouldAnimate] = useState(() => {
        if (typeof window !== 'undefined') return !sessionStorage.getItem("hasSeenIntro");
        return true;
    });

    useEffect(() => {
        // Use state instead of re-reading sessionStorage to handle Strict Mode correctly
        if (hasSeenIntro) {
            // Already initialized to skip, just trigger callback
            onAnimationComplete?.();
        } else {
            // Show intro and mark as seen
            sessionStorage.setItem("hasSeenIntro", "true");
            // Start reveal after 1 second delay
            const timer = setTimeout(() => {
                setIsRevealed(true);
            }, 1000);

            // Safety timeout: Ensure page unlocks even if animation stalls
            const safetyTimer = setTimeout(() => {
                if (!isRemoved) {
                    setIsRevealed(true);
                    setTimeout(() => onAnimationComplete?.(), 1500);
                }
            }, 2500); // reduced as requested

            return () => {
                clearTimeout(timer);
                clearTimeout(safetyTimer);
            };
        }
    }, [hasSeenIntro, isRemoved, onAnimationComplete]);

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
                    duration: shouldAnimate ? 1.2 : 0,
                    ease: customEase,
                    delay: shouldAnimate ? 0.1 : 0,
                }}
            >
                {children}
            </motion.div>

            {/* Split panels overlay */}
            <AnimatePresence>
                {!isRemoved && (
                    <motion.div
                        className="fixed inset-0 z-[100] cursor-pointer"
                        onClick={() => setIsRevealed(true)}
                    >
                        {/* Left Panel */}
                        <motion.div
                            className="fixed inset-y-0 left-0 w-1/2 bg-cream"
                            initial={{ x: 0 }}
                            animate={{ x: isRevealed ? "-100%" : 0 }}
                            exit={{ x: "-100%" }}
                            transition={{
                                duration: shouldAnimate ? 1.2 : 0,
                                ease: customEase,
                            }}
                            onAnimationComplete={() => {
                                if (isRevealed) handleAnimationComplete();
                            }}
                        >
                            {/* Left half of text */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-end pr-0.6 md:pr-0">
                                <span
                                    className="block leading-[0.85] text-right font-serif text-[clamp(4rem,10vw,8rem)] font-light text-charcoal"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    M
                                </span>
                                <span
                                    className="block leading-[0.85] text-right font-serif text-[clamp(2rem,5vw,4rem)] font-light tracking-[0.2em] text-charcoal/80"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    Stu
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
                                duration: shouldAnimate ? 1.2 : 0,
                                ease: customEase,
                            }}
                        >
                            {/* Right half of text */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-start pl-0.5 md:pl-1">
                                <span
                                    className="block leading-[0.85] text-left font-serif text-[clamp(4rem,10vw,8rem)] font-light text-charcoal"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    K
                                </span>
                                <span
                                    className="block leading-[0.85] text-left font-serif text-[clamp(2rem,5vw,4rem)] font-light tracking-[0.2em] text-charcoal/80"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
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
                                duration: shouldAnimate ? 0.8 : 0,
                                ease: customEase,
                            }}
                            style={{ transformOrigin: "center" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
