"use client";

import SectionHeader from "@/components/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/projects-data";
import { galleryImages, categories } from "@/lib/gallery-data";
import { useState, useCallback, useEffect } from "react";

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    // Lightbox Navigation Handlers
    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!selectedImage) return;
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex]);
    }, [selectedImage, filteredImages]);

    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!selectedImage) return;
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[prevIndex]);
    }, [selectedImage, filteredImages]);

    // Keyboard support
    useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null);
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, handleNext, handlePrev]);

    return (
        <div className="bg-neutral-50 min-h-screen">
            {/* Header */}
            <div className="bg-neutral-900 pt-32 pb-20 md:pt-48 md:pb-32 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <Image src="/images/services/structural-hero.png" alt="Background" fill className="object-cover" />
                </div>
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/40 to-neutral-900/90 z-0"></div>

                <div className="relative z-10 container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-white/95">
                            Engineering Projects That Define <span className="text-secondary font-bold">Reliability</span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                            Delivering precision-driven solutions across industrial sectors with unwavering commitment to excellence.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Projects List (Synced with Home) */}
            <section className="py-24 container mx-auto px-4">
                <SectionHeader title="Methods & Masterpieces" subtitle="A selection of our completed industrial triumphs." className="mb-16" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link href={`/projects/${project.slug}`} key={project.slug} className="group flex flex-col h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-neutral-100"
                            >
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {project.tags[0]}
                                    </div>
                                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="bg-white text-primary font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">View Project</span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-1">
                                        {project.client}
                                    </span>
                                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">{project.title}</h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                                        View Details <ArrowRight className="h-4 w-4 ml-1" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-white" id="gallery">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4">Our Project Gallery</h2>
                        <p className="text-neutral-500">A visual showcase of our engineering capabilities.</p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border-2 
                                    ${activeCategory === category
                                        ? 'bg-primary border-primary text-white shadow-lg'
                                        : 'bg-transparent border-neutral-200 text-neutral-500 hover:border-primary hover:text-primary'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <AnimatePresence>
                            {filteredImages.map((image) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.3 }}
                                    key={image.id}
                                    onClick={() => setSelectedImage(image)}
                                    className="relative group rounded-xl overflow-hidden aspect-square shadow-sm cursor-pointer"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-1">
                                            {image.category.replace('&', 'and')}
                                        </span>
                                        <h3 className="text-white font-bold text-lg leading-tight">
                                            {image.title}
                                        </h3>
                                        <div className="mt-2 inline-flex items-center text-white/80 text-sm">
                                            <span className="border-b border-secondary pb-0.5">View Fullscreen</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
                        >
                            <X size={40} strokeWidth={1.5} />
                        </button>

                        {/* Prev Button */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50"
                        >
                            <ChevronLeft size={48} strokeWidth={1} />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Caption */}
                            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                                <div className="inline-block bg-black/50 px-6 py-3 rounded-full backdrop-blur-md">
                                    <p className="text-white font-medium text-lg">{selectedImage.title}</p>
                                    <p className="text-secondary text-sm uppercase tracking-widest">{selectedImage.category}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50"
                        >
                            <ChevronRight size={48} strokeWidth={1} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
