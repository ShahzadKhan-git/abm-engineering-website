"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SpaceForLife() {
    return (
        <section className="py-20 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="w-full lg:w-5/12 z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-5xl lg:text-7xl font-bold uppercase leading-tight text-primary mb-6">
                                We Create <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    Space For Life
                                </span>
                            </h2>

                            <div className="w-20 h-1 bg-secondary mb-8"></div>

                            <p className="text-neutral-600 text-lg mb-10 leading-relaxed">
                                From industrial complexes to sustainable infrastructure, we build the foundations that empower communities and drive progress. Our engineering solutions are designed for longevity and impact.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/about">
                                    <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold px-8 h-14 text-base rounded-none">
                                        LEARN MORE
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button size="lg" variant="outline" className="border-2 border-neutral-200 text-primary hover:text-white hover:bg-primary font-bold px-8 h-14 text-base rounded-none">
                                        GET A QUOTE
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image Area */}
                    <div className="w-full lg:w-7/12 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            {/* Main Image Container using a Mask/Blend approach to simulate the double exposure look */}
                            <div className="relative h-[500px] w-full lg:h-[600px]">
                                {/* Note: Using a placeholder image since generation failed. 
                    Ideally this should be a double exposure of a worker and a refinery. */}
                                <Image src="/images/home/construction.png" alt="Construction Worker" width={600} height={800} className="object-cover w-full h-full" />

                                {/* Visual overlay to simulate the fade/white background effect of the reference */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:w-1/2"></div>
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute bottom-10 right-0 lg:right-10 bg-white p-6 shadow-2xl border-b-4 border-secondary flex items-center gap-4 max-w-xs z-20">
                                <div className="text-5xl font-black text-secondary">
                                    5
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-neutral-400 tracking-widest uppercase">Years of</span>
                                    <span className="text-xl font-bold text-primary uppercase tracking-tighter">Experience</span>
                                </div>
                                <Send className="text-neutral-200 absolute top-4 right-4 opacity-20" size={40} />
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative Circles from reference */}
            <div className="absolute top-20 left-0 w-64 h-64 bg-neutral-100 rounded-full blur-3xl -z-10 opacity-60"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
        </section>
    );
}
