"use client";

import { useEffect } from "react";
import { portfolioMedia, isVideo } from "@/data/portfolioMedia";

export default function PreloadPortfolio() {
    useEffect(() => {
        // Fallback for browsers without requestIdleCallback
        const rIC = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));

        rIC(() => {
            const delayTimer = setTimeout(() => {
                // Check if user is on a slow connection or data saver is enabled
                if (navigator.connection) {
                    if (navigator.connection.saveData ||
                        navigator.connection.effectiveType === 'slow-2g' ||
                        navigator.connection.effectiveType === '2g' ||
                        navigator.connection.effectiveType === '3g') {
                        return; // Abort preloading on slow/data-saving connections
                    }
                }

                const preloadQueue = [...portfolioMedia];
                let preloadedVideosCount = 0;
                const MAX_VIDEOS_TO_PRELOAD = 2;

                const preloadNext = () => {
                    if (preloadQueue.length === 0) return;

                    const src = preloadQueue.shift();

                    if (isVideo(src)) {
                        if (preloadedVideosCount < MAX_VIDEOS_TO_PRELOAD) {
                            preloadedVideosCount++;
                            const link = document.createElement('link');
                            link.rel = 'preload';
                            link.as = 'video';
                            link.href = src;
                            document.head.appendChild(link);

                            fetch(src, { mode: 'no-cors', priority: 'low' }).catch(() => { });
                        }
                    } else {
                        const img = new window.Image();
                        img.src = src;
                    }

                    setTimeout(preloadNext, 100); // 100ms delay to be even gentler on the main thread
                };

                preloadNext();

            }, 5000);

            return () => clearTimeout(delayTimer);
        });
    }, []);

    return null;
}
