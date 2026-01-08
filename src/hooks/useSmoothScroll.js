"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function useSmoothScroll() {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Detect touch device - disable smooth scroll for native haptic feel
        const isTouchDevice =
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            window.matchMedia("(pointer: coarse)").matches;

        if (isTouchDevice) {
            // On mobile, use native scrolling for better haptic feedback
            return;
        }

        // Initialize Lenis for smooth scrolling with luxury feel
        lenisRef.current = new Lenis({
            duration: 1.4, // Longer duration for gliding feel
            easing: (t) => {
                // Custom easing that emphasizes slow, graceful finish
                // This creates the "gliding on ice" deceleration
                return 1 - Math.pow(1 - t, 4);
            },
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 0.8, // Slightly reduced for more control
            touchMultiplier: 1.5,
            infinite: false,
        });

        // Animation frame loop
        function raf(time) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenisRef.current?.destroy();
        };
    }, []);

    return lenisRef;
}
