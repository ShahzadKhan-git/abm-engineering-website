"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden"
        >
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                    alt="ABM Engineering Project"
                    fill
                    className="object-cover scale-110" // scale to avoid edges showing during parallax
                    priority
                />
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // smooth cubic-bezier
                    className="max-w-4xl"
                >
                    <div className="flex items-center space-x-2 mb-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="h-1 w-16 bg-secondary rounded-full"
                        />
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Precision Engineering</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tight">
                        ABM <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Engineering</span>.
                    </h1>

                    <p className="text-xl md:text-2xl text-neutral-200 mb-10 max-w-xl font-light leading-relaxed">
                        Your trusted partner for Mechanical Works, Structural Fabrication, and Erection. Delivering excellence in every project.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/projects">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-none h-14 px-8 text-lg w-full sm:w-auto">
                                View Our Work
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-primary rounded-none h-14 px-8 text-lg w-full sm:w-auto">
                                Our Services
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
