"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const HennaCursor = dynamic(() => import("@/components/HennaCursor"), { ssr: false });

// All portfolio images from mayuri photos folder
const portfolioImages = [
    { src: "/images/portfolio/541042333_18054269909625542_7564993423088510311_n.jpg", alt: "Bridal Makeup" },
    { src: "/images/portfolio/587811487_18067025795625542_6269602038313306222_n.jpg", alt: "Bridal Look" },
    { src: "/images/portfolio/603936322_18067025786625542_3679499979584380806_n.jpg", alt: "Wedding Makeup" },
    { src: "/images/portfolio/497704213_4030568813869756_3623525260043800673_n.jpg", alt: "Bridal Styling" },
    { src: "/images/portfolio/497463512_4030568720536432_3594595758377734406_n.jpg", alt: "Wedding Look" },
    { src: "/images/portfolio/497530902_4030568803869757_8168865476173593444_n.jpg", alt: "Bridal Beauty" },
    { src: "/images/portfolio/497443325_4030767093849928_6846386668105346249_n.jpg", alt: "Reception Look" },
    { src: "/images/portfolio/496995124_4033611006898870_743624334180546219_n.jpg", alt: "Engagement Look" },
    { src: "/images/portfolio/496934406_4031019347158036_2426682015648419156_n.jpg", alt: "Party Makeup" },
    { src: "/images/portfolio/496678456_4031019337158037_7739463107438775686_n.jpg", alt: "Traditional Look" },
    { src: "/images/portfolio/490318517_1480051753277139_4164074555251820124_n.jpg", alt: "Mehendi Design" },
    { src: "/images/portfolio/490022088_1482456623036652_5778726570700825525_n.jpg", alt: "Henna Art" },
    { src: "/images/portfolio/487297525_1468492897766358_1786795122508941026_n.jpg", alt: "Bridal Mehendi" },
    { src: "/images/portfolio/487204609_1468492804433034_7623528549977491048_n.jpg", alt: "Traditional Mehendi" },
    { src: "/images/portfolio/487071794_1468492934433021_6755741374705046610_n.jpg", alt: "Hand Mehendi" },
    { src: "/images/portfolio/482127731_1446452433303738_5236387255167088017_n.jpg", alt: "Bridal Portrait" },
    { src: "/images/portfolio/480906720_1433971574551824_5851139739546634741_n.jpg", alt: "Wedding Beauty" },
    { src: "/images/portfolio/476966081_1428204001795248_3336076084806923391_n.jpg", alt: "Mehendi Pattern" },
    { src: "/images/portfolio/476904921_1428203788461936_8521397229066717976_n.jpg", alt: "Henna Design" },
    { src: "/images/portfolio/476903295_1428203855128596_2525672390300642625_n.jpg", alt: "Bridal Henna" },
    { src: "/images/portfolio/476903280_1428192358463079_6775960023314914486_n.jpg", alt: "Reception Makeup" },
    { src: "/images/portfolio/474022124_3924080427851929_181639658412880086_n.jpg", alt: "Hair Styling" },
    { src: "/images/portfolio/462596474_3841520746107898_2816287746797430915_n.png", alt: "Feet Mehendi" },
    { src: "/images/portfolio/462617473_3840533462873293_579953448012367355_n.png", alt: "Arabic Mehendi" },
    { src: "/images/portfolio/338414848_613564410194586_5462747058888824762_n-1.webp", alt: "Intricate Mehendi" },
    { src: "/images/portfolio/293024198_715633963052259_1287257007267315921_n.jpg", alt: "Classic Mehendi" },
    { src: "/images/portfolio/132147816_2815478228712160_3848240278735005721_n.jpg", alt: "Palm Mehendi" },
    { src: "/images/portfolio/132032470_2815478238712159_4455502819506302682_n.jpg", alt: "South Indian Mehendi" },
    { src: "/images/portfolio/82192673_2503662013227118_3865820365716455424_n.jpg", alt: "Contemporary Mehendi" },
    { src: "/images/portfolio/57555392_2270494339877221_2148770261288091648_n.jpg", alt: "Traditional Art" },
    { src: "/images/portfolio/36506725_2054475754812415_4135024328804663296_n.jpg", alt: "Rajasthani Mehendi" },
    { src: "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_30_39 PM.png", alt: "Bridal Artistry" },
    { src: "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_33_52 PM.png", alt: "Wedding Portrait" },
    { src: "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_36_16 PM.png", alt: "Bridal Elegance" },
    { src: "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_37_11 PM.png", alt: "Makeup Look" },
    { src: "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_38_24 PM.png", alt: "Styling Work" },
    { src: "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_41_07 PM.png", alt: "Beauty Portrait" },
    { src: "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_51_16 PM.png", alt: "Bridal Work" },
    { src: "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_55_18 PM.png", alt: "Wedding Styling" },
    { src: "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_56_38 PM.png", alt: "Makeup Artistry" },
    { src: "/images/portfolio/ChatGPT Image Jan 7, 2026, 07_58_04 PM.png", alt: "Bridal Beauty" },
    { src: "/images/portfolio/Jan 7, 2026, 07_43_33 PM.png", alt: "Studio Work" },
    { src: "/images/portfolio/Gemini_Generated_Image_62b81d62b81d62b8.png", alt: "Creative Styling" },
    { src: "/images/portfolio/daniel-lloyd-blunk-fernandez-zwvpvmryzt4-unsplash_orig.webp", alt: "Bridal Inspiration" },
    { src: "/images/portfolio/img-2445_orig.webp", alt: "Event Makeup" },
    { src: "/images/portfolio/img-5010.webp", alt: "Special Occasion" },
];

export default function PortfolioPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <HennaCursor />
            <Navbar />

            <main className="min-h-screen pt-24 pb-20 bg-cream">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.3em] text-[var(--vibe-accent)]">
                        Gallery
                    </p>
                    <h1 className="font-serif text-4xl md:text-5xl text-antique-gold mb-6">
                        My <span className="italic">Portfolio</span>
                    </h1>
                    <p className="max-w-2xl mx-auto font-sans text-antique-gold/70">
                        A curated collection of bridal makeup, hair styling, and mehendi artistry.
                        Each look tells a unique story of beauty and celebration.
                    </p>
                </motion.div>

                {/* Masonry Gallery */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {portfolioImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className="break-inside-avoid cursor-pointer group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: Math.min(index * 0.03, 0.6)
                                }}
                                onClick={() => setSelectedImage(image)}
                            >
                                <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                                    <div className="relative aspect-auto">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={400}
                                            height={500}
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        />
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-antique-gold/95 backdrop-blur-md p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="relative max-w-5xl max-h-[90vh] w-full"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                width={1200}
                                height={1500}
                                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                            />

                            <button
                                className="absolute top-4 right-4 text-cream/80 hover:text-cream text-3xl font-light transition-colors"
                                onClick={() => setSelectedImage(null)}
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </main>

            <Footer />
        </>
    );
}
