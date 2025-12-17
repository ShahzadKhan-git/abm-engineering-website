"use client";

import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/services-data";

export default function ServicesPage() {
    return (
        <div className="bg-neutral-50 min-h-screen">
            <div className="bg-neutral-900 pt-32 pb-20 md:pt-48 md:pb-32 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <Image src="/images/heroes/services-hero.png" alt="Services Hero" fill className="object-cover" />
                </div>
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/40 to-neutral-900/90 z-0"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 container mx-auto px-4"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-white/95">
                        Our <span className="text-secondary font-bold">Services</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                        Engineering excellence in fabrication, erection, and mechanical works.
                    </p>
                </motion.div>
            </div>

            <section className="py-20 bg-neutral-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-20">
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
                            >
                                <div className="w-full lg:w-1/2">
                                    <div className="relative h-[300px] lg:h-[400px] w-full rounded-lg overflow-hidden shadow-xl group">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="p-3 bg-white shadow-md rounded-full text-primary">
                                            <service.icon size={32} />
                                        </div>
                                        <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                                    </div>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                        {service.features.slice(0, 4).map((feature, i) => (
                                            <div key={i} className="flex items-center space-x-2 text-neutral-700">
                                                <ArrowRight size={16} className="text-secondary" />
                                                <span className="text-sm font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={`/services/${service.slug}`}>
                                        <Button size="lg" className="font-bold">
                                            Explore Service
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
