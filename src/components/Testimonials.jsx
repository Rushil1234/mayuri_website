import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Priya Patel",
        role: "Bride",
        image: "/images/portfolio/testimonial-priya.jpg",
        text: "Mayuri is absolutely amazing! She made me feel so comfortable and looked after. My makeup stayed perfect all day.",
    },
    {
        id: 2,
        name: "Anjali Mehta",
        role: "Bride",
        image: "/images/portfolio/testimonial-anjali.jpg",
        text: "I have never felt more beautiful. The henna work was incredibly intricate and the makeup was subtle yet glowing.",
    },
    {
        id: 3,
        name: "Aisha Khan",
        role: "Bride",
        image: "/images/portfolio/testimonial-aisha.png",
        text: "The best experience I could have asked for. Mayuri's attention to detail is unmatched. She truly is an artist.",
    },
    {
        id: 4,
        name: "Sneha Gupta",
        role: "Client",
        image: "/images/portfolio/testimonial-sneha.png",
        text: "Professional, punctual, and incredibly talented. She knew exactly how to work with my features.",
    },
    {
        id: 5,
        name: "Riya Sharma",
        role: "Bride",
        image: "/images/portfolio/testimonial-riya.png",
        text: "Her work speaks for itself. I received compliments all night long. Thank you for making my big day so special!",
    },
];

const TestimonialCard = ({ t }) => (
    <div className="mx-4 flex w-[350px] flex-shrink-0 flex-col justify-between rounded-sm border border-charcoal/5 bg-white p-8 shadow-sm transition-all hover:border-antique-gold/30 hover:shadow-md">
        {/* Quote Icon */}
        <span className="mb-4 font-serif text-4xl text-antique-gold/20">"</span>

        <p className="mb-6 font-serif text-base leading-relaxed text-charcoal/80">
            {t.text}
        </p>

        <div className="flex items-center gap-3 border-t border-charcoal/5 pt-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-charcoal/5">
                {t.image ? (
                    <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover object-top"
                    />
                ) : (
                    <div className="h-full w-full bg-charcoal/10"></div>
                )}
            </div>
            <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wide text-charcoal">
                    {t.name}
                </h4>
                <span className="font-sans text-[10px] text-charcoal/50 uppercase tracking-widest">{t.role}</span>
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    return (
        <section className="bg-cream py-24 overflow-hidden">
            <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }
            .marquee-inner {
                animation: marqueeScroll 40s linear infinite;
            }
            .marquee-reverse {
                animation-direction: reverse;
            }
            .pause-on-hover:hover {
                animation-play-state: paused;
            }
      `}</style>

            <div className="container-main mb-16 text-center">
                <span className="mb-8 block font-sans text-xs font-bold uppercase tracking-[0.5em] text-antique-gold">
                    Testimonials
                </span>
                <h2 className="flex flex-col items-center justify-center leading-none text-charcoal">
                    <span className="font-serif text-4xl md:text-5xl">Love from our</span>
                    <span className="mt-2 font-hero-brand text-6xl text-antique-gold md:text-7xl">Brides</span>
                </h2>
            </div>

            {/* Row 1: Forward */}
            <div className="relative mb-8 w-full overflow-hidden">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-cream to-transparent md:w-40"></div>
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-cream to-transparent md:w-40"></div>

                <div className="marquee-inner pause-on-hover flex min-w-[200%] items-stretch py-4">
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={`row1-${i}`} t={t} />
                    ))}
                </div>
            </div>

            {/* Row 2: Reverse */}
            <div className="relative w-full overflow-hidden">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-cream to-transparent md:w-40"></div>
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-cream to-transparent md:w-40"></div>

                <div className="marquee-inner marquee-reverse pause-on-hover flex min-w-[200%] items-stretch py-4">
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={`row2-${i}`} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
