"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-cream/95 backdrop-blur-md shadow-sm"
                : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <nav className="container-main flex items-center justify-between py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                            src="/images/logo.png"
                            alt="MK Studio Bridal"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="hidden sm:block">
                        <span className="block font-serif text-xl text-charcoal">
                            MK Studio
                        </span>
                        <span className="block font-sans text-xs uppercase tracking-widest text-charcoal/60">
                            Bridal
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative font-sans text-sm uppercase tracking-widest transition-colors ${pathname === link.href
                                ? "text-[var(--vibe-accent)]"
                                : "text-charcoal hover:text-[var(--vibe-accent)]"
                                }`}
                        >
                            {link.label}
                            {pathname === link.href && (
                                <motion.div
                                    className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--vibe-accent)]"
                                    layoutId="activeTab"
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.span
                        className="block h-0.5 w-6 bg-charcoal"
                        animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
                    />
                    <motion.span
                        className="block h-0.5 w-6 bg-charcoal"
                        animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    />
                    <motion.span
                        className="block h-0.5 w-6 bg-charcoal"
                        animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
                    />
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden absolute top-full left-0 right-0 bg-cream shadow-lg"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="container-main py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`font-sans text-lg uppercase tracking-widest ${pathname === link.href
                                        ? "text-[var(--vibe-accent)]"
                                        : "text-charcoal"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
