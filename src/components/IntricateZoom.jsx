"use client";

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IntricateZoom({
    src,
    alt,
    className = "",
    zoomLevel = 2.5,
    lensSize = 150,
}) {
    const containerRef = useRef(null);
    const [showLens, setShowLens] = useState(false);
    const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Lens position (centered on cursor)
        setLensPosition({
            x: x - lensSize / 2,
            y: y - lensSize / 2,
        });

        // Calculate zoomed image position
        const percentX = x / rect.width;
        const percentY = y / rect.height;

        setImagePosition({
            x: -(percentX * rect.width * zoomLevel - lensSize / 2),
            y: -(percentY * rect.height * zoomLevel - lensSize / 2),
        });
    }, [lensSize, zoomLevel]);

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden cursor-zoom-in ${className}`}
            onMouseEnter={() => setShowLens(true)}
            onMouseLeave={() => setShowLens(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Main image */}
            <div className="relative aspect-[4/5] w-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>

            {/* Magnifying lens */}
            <AnimatePresence>
                {showLens && (
                    <motion.div
                        className="pointer-events-none absolute z-20 overflow-hidden rounded-full border-2 border-cream shadow-2xl"
                        style={{
                            width: lensSize,
                            height: lensSize,
                            left: lensPosition.x,
                            top: lensPosition.y,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Zoomed image inside lens */}
                        <div
                            className="absolute"
                            style={{
                                width: containerRef.current?.offsetWidth * zoomLevel,
                                height: containerRef.current?.offsetHeight * zoomLevel,
                                left: imagePosition.x,
                                top: imagePosition.y,
                            }}
                        >
                            <Image
                                src={src}
                                alt={`${alt} - zoomed`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 100vw"
                            />
                        </div>

                        {/* Lens overlay gradient */}
                        <div className="absolute inset-0 rounded-full ring-4 ring-cream/20" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hover hint */}
            <motion.div
                className="absolute bottom-4 right-4 rounded bg-antique-gold/70 px-3 py-1.5 text-xs font-sans uppercase tracking-wider text-cream backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: showLens ? 0 : 1 }}
                transition={{ duration: 0.3 }}
            >
                Hover to zoom
            </motion.div>
        </div>
    );
}
