"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HennaCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Detect touch device
        const checkTouch = () => {
            setIsTouchDevice(
                "ontouchstart" in window || navigator.maxTouchPoints > 0
            );
        };
        checkTouch();

        if (isTouchDevice) return;

        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isTouchDevice]);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="pointer-events-none fixed z-50"
                style={{
                    left: position.x,
                    top: position.y,
                }}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    x: -16,
                    y: -16,
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 400,
                    mass: 0.5,
                }}
            >
                {/* Outer ring with shadow for visibility */}
                <motion.div
                    className="absolute rounded-full border-2 border-[var(--vibe-accent)]"
                    style={{
                        width: 32,
                        height: 32,
                        boxShadow: "0 0 0 1.5px rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                {/* Inner dot with shadow */}
                <motion.div
                    className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--vibe-accent)]"
                    style={{
                        boxShadow: "0 0 0 1.5px rgba(255,255,255,0.9), 0 1px 4px rgba(0,0,0,0.3)",
                    }}
                />
            </motion.div>
        </>
    );
}
