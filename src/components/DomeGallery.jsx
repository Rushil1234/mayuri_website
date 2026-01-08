"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useGesture } from "@use-gesture/react";
import Image from "next/image";
import "./DomeGallery.css";

const DEFAULT_IMAGES = [
    { src: "https://images.unsplash.com/photo-1", alt: "Image 1" },
];

export default function DomeGallery({
    images = DEFAULT_IMAGES,
    autoRotate = true,
    autoRotateSpeed = 0.5,
}) {
    const containerRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 15, y: 0 });
    const velocityRef = useRef({ x: 0, y: 0 });
    const autoRotateRef = useRef(autoRotate);
    const isDraggingRef = useRef(false);
    const lastTimeRef = useRef(performance.now());
    const animationRef = useRef(null);

    // Calculate optimal grid layout based on number of images
    const { columns, rows, angleY, angleX, translateZ } = useMemo(() => {
        const count = images.length;
        // Calculate columns and rows for a nice grid
        const cols = Math.ceil(Math.sqrt(count * 1.5));
        const rows = Math.ceil(count / cols);

        return {
            columns: cols,
            rows: rows,
            angleY: 360 / cols,
            angleX: 80 / Math.max(rows - 1, 1), // Spread vertically over 80 degrees
            translateZ: Math.max(300, cols * 60), // Adjust cylinder radius based on columns
        };
    }, [images.length]);

    // Build items array with positions
    const items = useMemo(() => {
        return images.map((image, index) => {
            const col = index % columns;
            const row = Math.floor(index / columns);

            return {
                ...image,
                rotateY: col * angleY,
                rotateX: (row - (rows - 1) / 2) * angleX,
                index,
            };
        });
    }, [images, columns, rows, angleY, angleX]);

    // Animation loop for momentum and auto-rotate
    const animate = useCallback(() => {
        const currentTime = performance.now();
        const deltaTime = (currentTime - lastTimeRef.current) / 1000;
        lastTimeRef.current = currentTime;

        if (!isDraggingRef.current) {
            // Apply friction to velocity
            velocityRef.current.x *= 0.95;
            velocityRef.current.y *= 0.95;

            // Apply velocity to rotation
            setRotation((prev) => ({
                x: Math.max(-40, Math.min(40, prev.x + velocityRef.current.x * deltaTime)),
                y: prev.y + velocityRef.current.y * deltaTime +
                    (autoRotateRef.current && Math.abs(velocityRef.current.y) < 1 ? autoRotateSpeed * deltaTime * 20 : 0),
            }));
        }

        animationRef.current = requestAnimationFrame(animate);
    }, [autoRotateSpeed]);

    // Start animation loop
    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [animate]);

    // Update autoRotate ref when prop changes
    useEffect(() => {
        autoRotateRef.current = autoRotate;
    }, [autoRotate]);

    // Gesture handling
    const bind = useGesture(
        {
            onDrag: ({ movement: [mx, my], velocity: [vx, vy], down, memo = rotation }) => {
                isDraggingRef.current = down;

                if (down) {
                    autoRotateRef.current = false;
                    setRotation({
                        x: Math.max(-40, Math.min(40, memo.x - my * 0.3)),
                        y: memo.y + mx * 0.5,
                    });
                } else {
                    // Apply velocity on release
                    velocityRef.current = {
                        x: -vy * 100,
                        y: vx * 200,
                    };
                    // Resume auto-rotate after a delay
                    setTimeout(() => {
                        autoRotateRef.current = autoRotate;
                    }, 2000);
                }

                return memo;
            },
        },
        {
            drag: {
                filterTaps: true,
                preventScroll: true,
            },
        }
    );

    return (
        <div className="dome-gallery-container" ref={containerRef} {...bind()}>
            <div
                className="dome-gallery-scene"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="dome-gallery-item"
                        style={{
                            transform: `rotateY(${item.rotateY}deg) rotateX(${item.rotateX}deg) translateZ(${translateZ}px)`,
                        }}
                    >
                        <Image
                            src={item.src}
                            alt={item.alt || `Gallery image ${index + 1}`}
                            fill
                            className="dome-gallery-image"
                            sizes="(max-width: 768px) 150px, 200px"
                        />
                    </div>
                ))}
            </div>
            <div className="dome-gallery-hint">
                <span>✋ Drag to explore</span>
            </div>
        </div>
    );
}
