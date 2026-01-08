"use client";

import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

/**
 * Hook for scroll-triggered reveal animations
 * Creates a "fade-and-drift" effect: 30px upward drift with 0.8s fade-in
 */
export default function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, {
        once: true,
        margin: "-10% 0px -10% 0px", // Trigger slightly before fully in view
        ...options.viewOptions,
    });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1], // Smooth ease-out
                ...options.transition,
            },
        },
    };

    return {
        ref,
        controls,
        variants,
        initial: "hidden",
        animate: controls,
    };
}
