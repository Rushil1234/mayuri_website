"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StainToggle({
    freshImage,
    matureImage,
    alt = "Henna stain comparison",
    className = "",
}) {
    const containerRef = useRef(null);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = useCallback((clientX) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    }, []);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    const handleDragStart = () => setIsDragging(true);
    const handleDragEnd = () => setIsDragging(false);

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden cursor-ew-resize select-none ${className}`}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
        >
            {/* Mature stain (background - right side) */}
            <div className="relative aspect-[4/5] w-full">
                <Image
                    src={matureImage}
                    alt={`${alt} - 48 hour stain`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Fresh paste (overlay - left side) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
            >
                <div className="relative h-full w-full" style={{ width: `${100 / (sliderPosition / 100)}%` }}>
                    <Image
                        src={freshImage}
                        alt={`${alt} - fresh paste`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

            {/* Slider handle */}
            <motion.div
                className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Vertical line */}
                <div className="absolute h-full w-0.5 bg-cream shadow-lg" />

                {/* Handle circle */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-cream shadow-lg">
                    {/* Arrows */}
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-antique-gold"
                    >
                        <path
                            d="M8 12L4 8M4 8L8 4M4 8H11M16 12L20 16M20 16L16 20M20 16H13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </motion.div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 rounded bg-antique-gold/80 px-3 py-1.5 text-xs font-sans uppercase tracking-wider text-cream backdrop-blur-sm">
                Fresh Paste
            </div>
            <div className="absolute bottom-4 right-4 rounded bg-[var(--vibe-accent)]/90 px-3 py-1.5 text-xs font-sans uppercase tracking-wider text-cream backdrop-blur-sm">
                48hr Stain
            </div>
        </div>
    );
}
