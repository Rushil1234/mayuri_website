"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
    children,
    className = "",
    onClick,
    href,
    variant = "primary", // primary, secondary, ghost
    magneticStrength = 0.3,
    ...props
}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        setPosition({
            x: distanceX * magneticStrength,
            y: distanceY * magneticStrength,
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const baseStyles = {
        primary: "bg-[var(--vibe-accent)] text-cream hover:bg-antique-gold",
        secondary: "bg-transparent text-antique-gold border border-antique-gold hover:bg-antique-gold hover:text-cream",
        ghost: "bg-transparent text-antique-gold hover:text-[var(--vibe-accent)]",
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            ref={ref}
            href={href}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`
        relative inline-flex items-center justify-center
        px-8 py-4
        font-sans text-sm font-medium uppercase tracking-[0.15em]
        transition-colors duration-300
        cursor-none
        ${baseStyles[variant]}
        ${className}
      `}
            animate={{
                x: position.x,
                y: position.y,
            }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 15,
                mass: 0.5,
            }}
            whileHover={{
                scale: 1.02,
            }}
            whileTap={{
                scale: 0.98,
            }}
            {...props}
        >
            <span className="relative z-10">{children}</span>

            {/* Hover background effect */}
            <motion.span
                className="absolute inset-0 -z-0 bg-antique-gold"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ originX: 0 }}
            />
        </Component>
    );
}
