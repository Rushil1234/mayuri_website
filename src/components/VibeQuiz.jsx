"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import MagneticButton from "./MagneticButton";

const questions = [
    {
        id: 1,
        question: "What's your bridal style?",
        options: [
            { id: "traditional", label: "Classic & Timeless", description: "Rich traditions, intricate patterns" },
            { id: "minimalist", label: "Clean & Modern", description: "Elegant simplicity, fine lines" },
            { id: "fusion", label: "Bold & Unique", description: "East meets West creativity" },
        ],
    },
    {
        id: 2,
        question: "How do you envision your wedding day?",
        options: [
            { id: "traditional", label: "Grand Celebration", description: "Red & gold, full ceremonies" },
            { id: "minimalist", label: "Intimate Gathering", description: "Close friends, simple elegance" },
            { id: "fusion", label: "Destination Adventure", description: "Breaking conventions beautifully" },
        ],
    },
    {
        id: 3,
        question: "What speaks to your soul?",
        options: [
            { id: "traditional", label: "Heritage & Roots", description: "Family stories, cultural pride" },
            { id: "minimalist", label: "Less is More", description: "Quality over quantity" },
            { id: "fusion", label: "Breaking Boundaries", description: "Creating new traditions" },
        ],
    },
];

const vibeResults = {
    traditional: {
        title: "The Classic Bride",
        description: "You appreciate the beauty of time-honored traditions. Your henna will feature intricate mandalas, paisley patterns, and symbolic elements that honor your heritage.",
        accent: "#C9A961",
    },
    minimalist: {
        title: "The Modern Muse",
        description: "You believe in elegant restraint. Your henna will showcase delicate line work, geometric patterns, and contemporary motifs that make a subtle statement.",
        accent: "#A8B5A0",
    },
    fusion: {
        title: "The Creative Spirit",
        description: "You write your own rules. Your henna will blend traditional techniques with modern artistry, creating a one-of-a-kind masterpiece that's uniquely you.",
        accent: "#D4A5A5",
    },
};

export default function VibeQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);
    const [isStarted, setIsStarted] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const handleAnswer = (vibeId) => {
        const newAnswers = [...answers, vibeId];
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Calculate result
            const counts = newAnswers.reduce((acc, id) => {
                acc[id] = (acc[id] || 0) + 1;
                return acc;
            }, {});
            const winningVibe = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
            setResult(winningVibe);

            // Update site theme
            document.documentElement.setAttribute("data-vibe", winningVibe);
            localStorage.setItem("vibePreference", winningVibe);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setResult(null);
        setIsStarted(false);
    };

    // Load saved vibe on mount
    useEffect(() => {
        const savedVibe = localStorage.getItem("vibePreference");
        if (savedVibe) {
            document.documentElement.setAttribute("data-vibe", savedVibe);
        }
    }, []);

    return (
        <section
            id="quiz"
            ref={sectionRef}
            className="section-padding bg-sand/30"
        >
            <div className="container-main">
                <motion.div
                    className="mx-auto max-w-3xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.3em] text-[var(--vibe-accent)]">
                        Discover Your Style
                    </p>
                    <h2 className="mb-6 font-serif text-charcoal">
                        Find Your <span className="italic text-antique-gold">Bridal Vibe</span>
                    </h2>
                    <p className="mb-12 font-sans text-charcoal/70">
                        Take our quick quiz to discover your unique aesthetic.
                        We'll personalize your experience and help you envision your perfect henna design.
                    </p>

                    {/* Quiz container */}
                    <div className="relative min-h-[400px] rounded-sm bg-cream p-8 shadow-lg sm:p-12">
                        <AnimatePresence mode="wait">
                            {!isStarted && !result && (
                                <motion.div
                                    key="start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="flex flex-col items-center justify-center py-12"
                                >
                                    <div className="mb-8">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[var(--vibe-accent)]">
                                            <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="1" />
                                            <path d="M30 15v15l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-4 font-serif text-2xl text-charcoal">Ready to discover your style?</h3>
                                    <p className="mb-8 text-charcoal/60">3 quick questions, personalized results</p>
                                    <MagneticButton onClick={() => setIsStarted(true)}>
                                        Begin Quiz
                                    </MagneticButton>
                                </motion.div>
                            )}

                            {isStarted && !result && (
                                <motion.div
                                    key={`question-${currentQuestion}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {/* Progress bar */}
                                    <div className="mb-8">
                                        <div className="mb-2 flex justify-between text-xs uppercase tracking-widest text-charcoal/50">
                                            <span>Question {currentQuestion + 1}</span>
                                            <span>{currentQuestion + 1} of {questions.length}</span>
                                        </div>
                                        <div className="h-1 w-full bg-sand">
                                            <motion.div
                                                className="h-full bg-[var(--vibe-accent)]"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                                transition={{ duration: 0.4 }}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="mb-8 font-serif text-2xl text-charcoal sm:text-3xl">
                                        {questions[currentQuestion].question}
                                    </h3>

                                    <div className="space-y-4">
                                        {questions[currentQuestion].options.map((option) => (
                                            <motion.button
                                                key={option.id}
                                                onClick={() => handleAnswer(option.id)}
                                                className="group w-full cursor-none border border-charcoal/20 bg-transparent p-6 text-left transition-all hover:border-[var(--vibe-accent)] hover:bg-[var(--vibe-accent)]/5"
                                                whileHover={{ x: 10 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <span className="block font-sans text-lg font-medium text-charcoal group-hover:text-[var(--vibe-accent)]">
                                                    {option.label}
                                                </span>
                                                <span className="block text-sm text-charcoal/60">
                                                    {option.description}
                                                </span>
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {result && (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="py-8 text-center"
                                >
                                    <motion.div
                                        className="mb-6 inline-block rounded-full p-4"
                                        style={{ backgroundColor: `${vibeResults[result].accent}20` }}
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path
                                                d="M20 5l4.5 9 10 1.5-7.25 7 1.75 10L20 28l-9 4.5 1.75-10-7.25-7 10-1.5L20 5z"
                                                fill={vibeResults[result].accent}
                                            />
                                        </svg>
                                    </motion.div>

                                    <p className="mb-2 font-sans text-sm uppercase tracking-widest text-[var(--vibe-accent)]">
                                        Your Style
                                    </p>
                                    <h3 className="mb-4 font-serif text-3xl text-charcoal sm:text-4xl">
                                        {vibeResults[result].title}
                                    </h3>
                                    <p className="mb-8 text-charcoal/70">
                                        {vibeResults[result].description}
                                    </p>

                                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                                        <MagneticButton href="#contact">
                                            Book a Consultation
                                        </MagneticButton>
                                        <MagneticButton variant="secondary" onClick={resetQuiz}>
                                            Retake Quiz
                                        </MagneticButton>
                                    </div>

                                    <p className="mt-6 text-xs text-charcoal/40">
                                        Your site experience has been personalized to match your vibe ✨
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
