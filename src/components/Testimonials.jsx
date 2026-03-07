import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Mohini Vakil",
        role: "Bride",
        text: "Mayuri was amazing to work with! She was incredibly punctual, arriving even before the scheduled time. She also did mehndi for my immediate family — her henna gave the darkest, richest stain by far. My mom was especially impressed with the makeup look and the high-quality products. Highly recommend!",
        stars: 5,
    },
    {
        id: 2,
        name: "Alexis Jani",
        role: "Henna Client",
        text: "Mayuri Auntie was incredibly amazing! She was so kind during my henna appointment for my engagement. Her salon is very clean and she had music playing which was really relaxing. I will definitely be booking her for my wedding henna. I highly recommend Mayuri Auntie!",
        stars: 5,
    },
    {
        id: 3,
        name: "Huda Algasas",
        role: "10+ Year Client",
        text: "I have been going to Mayuri for mehendi and other services for over 10+ years now!!! She is amazing, kind, understanding, and gives perfect results every single time. Truly a beautiful talented human being. I literally do not want to leave Pittsburgh because I love her so much. 1000/10!",
        stars: 5,
    },
    {
        id: 4,
        name: "Ubhi Monika",
        role: "13+ Year Client",
        text: "For over 13 years, Mayuri's studio has been my exclusive beauty destination. Her facials are a therapeutic ritual, the hair cuts are executed with unmatched precision, and the Henna art is exquisite. It transforms every appointment into a relaxing, personal visit.",
        stars: 5,
    },
    {
        id: 5,
        name: "Parwan Banu Syed",
        role: "Loyal Client",
        text: "I moved to Pittsburgh in 2020 and since then I only visit her for my Mehandi, haircut or any make up work. She listens to my expectations and needs and provides the same result. I am always happy and satisfied and recommend same to everyone.",
        stars: 5,
    },
    {
        id: 6,
        name: "Sridevi L. V. S.",
        role: "5+ Year Client",
        text: "Mayuri is talented, meticulous and patient, but most importantly caring, kind and uses her innate sense of empathy to understand the need and provide services that bring out the best look for all. From skincare to makeup and hairstyles, I trust Mayuri for everything.",
        stars: 5,
    },
    {
        id: 7,
        name: "Pravallika N",
        role: "Bridal Client",
        text: "Her makeup work was flawless — natural yet elegant, enhancing my features without going overboard. It lasted beautifully throughout the event with no touch-ups needed! The mehendi design was intricate and neat, and the color came out rich and dark, just as promised.",
        stars: 5,
    },
    {
        id: 8,
        name: "Nimmi Chaturvedi",
        role: "10+ Year Client",
        text: "Her haircuts are always precise and tailored to my style, and her mehndi designs are truly stunning. The facial treatments are top-notch, leaving my skin feeling refreshed and rejuvenated. I've been loyal to her for over a decade, and I wouldn't trust anyone else with my beauty needs.",
        stars: 5,
    },
    {
        id: 9,
        name: "Anu Nallat",
        role: "Mehandi & Makeup",
        text: "The Mehandi design was intricate, clean, and beautifully detailed — exactly what I had envisioned. The color turned out rich and dark. For the makeup, Mayuri truly worked magic. She understood my preferences, matched the tones perfectly, and gave me a flawless look that lasted all day.",
        stars: 5,
    },
    {
        id: 10,
        name: "Evangeline Shelley",
        role: "Bridesmaid",
        text: "Mayuri was prompt on time at the venue and handled last minute changes with grace. She listened to our requests, made suggestions that suit us and made sure we were comfortable. I got compliments for my hair and make up from friends and family!",
        stars: 5,
    },
    {
        id: 11,
        name: "Nandhini Kumaravelu",
        role: "Event Host",
        text: "We hired Mayuri for our party and she was truly wonderful. She did beautiful Mehendi for nearly 20 people, all with incredible patience and a smile on her face the entire time. Our guests were so impressed with her intricate designs!",
        stars: 5,
    },
    {
        id: 12,
        name: "Sneha Mansukhani",
        role: "Client",
        text: "Mayuri is very patient, diligent and great at her work! The best in the region!",
        stars: 5,
    },
    // --- Original testimonials ---
    {
        id: 13,
        name: "Priya Patel",
        role: "Bride",
        image: "/images/portfolio/testimonial-priya.jpg",
        text: "Mayuri is absolutely amazing! She made me feel so comfortable and looked after. My makeup stayed perfect all day.",
        stars: 5,
    },
    {
        id: 14,
        name: "Anjali Mehta",
        role: "Bride",
        image: "/images/portfolio/testimonial-anjali.jpg",
        text: "I have never felt more beautiful. The henna work was incredibly intricate and the makeup was subtle yet glowing.",
        stars: 5,
    },
    {
        id: 15,
        name: "Aisha Khan",
        role: "Bride",
        image: "/images/portfolio/testimonial-aisha.png",
        text: "The best experience I could have asked for. Mayuri's attention to detail is unmatched. She truly is an artist.",
        stars: 5,
    },
    {
        id: 16,
        name: "Sneha Gupta",
        role: "Client",
        image: "/images/portfolio/testimonial-sneha.png",
        text: "Professional, punctual, and incredibly talented. She knew exactly how to work with my features.",
        stars: 5,
    },
    {
        id: 17,
        name: "Riya Sharma",
        role: "Bride",
        image: "/images/portfolio/testimonial-riya.png",
        text: "Her work speaks for itself. I received compliments all night long. Thank you for making my big day so special!",
        stars: 5,
    },
];

function StarRating() {
    return (
        <div className="mb-3 flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-antique-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function Initials({ name }) {
    const parts = name.split(" ");
    const initials = parts.length >= 2
        ? parts[0][0] + parts[parts.length - 1][0]
        : parts[0][0];
    return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-antique-gold/15 font-sans text-xs font-bold uppercase tracking-wide text-antique-gold">
            {initials}
        </div>
    );
}

const TestimonialCard = ({ t }) => (
    <div className="mx-4 flex w-[350px] flex-shrink-0 flex-col justify-between rounded-sm border border-charcoal/5 bg-white p-8 shadow-sm transition-all hover:border-antique-gold/30 hover:shadow-md">
        <div>
            <StarRating />
            <p className="mb-6 font-serif text-base leading-relaxed text-charcoal/80">
                &ldquo;{t.text}&rdquo;
            </p>
        </div>

        <div className="flex items-center gap-3 border-t border-charcoal/5 pt-4">
            {t.image ? (
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-charcoal/5">
                    <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover object-top"
                    />
                </div>
            ) : (
                <Initials name={t.name} />
            )}
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
        <section className="bg-cream pt-12 pb-24 overflow-hidden">
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
                <span className="mb-6 block font-sans text-xs font-bold uppercase tracking-[0.5em] text-antique-gold">
                    Testimonials
                </span>
                <h2 className="flex flex-col items-center justify-center leading-none text-charcoal">
                    <span className="font-serif text-4xl md:text-5xl">Love from our</span>
                    <span className="mt-2 font-hero-brand text-6xl text-antique-gold md:text-7xl">Brides</span>
                </h2>
                {/* Google rating badge */}
                <a href="https://www.google.com/search?sca_esv=92ac9763e32e626e&rlz=1C5GCEM_enUS1166US1166&sxsrf=ANbL-n66sKObSTZkci30UWUk0LpWm_JZrA:1772917989863&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOfKsJaK5KiFFsaPGY3-2x8zCumqd1KCS9goGRjg4OVp6LZzorNxYiqy50vsPNrlC0bS34YnY0Z9wt_Cc6W6JNAqCUBow&q=MK+studio+Reviews&sa=X&ved=2ahUKEwjOtYGY2o6TAxWgFlkFHRUONUgQ0bkNegQINBAF&biw=1728&bih=962&dpr=2" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-5 py-2.5 shadow-sm transition-all hover:shadow-md hover:border-antique-gold/30">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="font-sans text-sm font-bold text-charcoal">5.0</span>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="h-3.5 w-3.5 text-antique-gold" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="font-sans text-xs text-charcoal/50">31 reviews</span>
                </a>
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
