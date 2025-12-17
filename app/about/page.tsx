"use client";

import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Clock, Users, Lightbulb, TrendingUp } from "lucide-react";

// SEO-optimized About Section
function AboutUsSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src="/images/about/team-new.png"
                            alt="Civil Engineering Company Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Decorative element (Gold) */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <SectionHeader title="We Build More Than Structures — We Build Trust." />
                    <div className="space-y-6 text-neutral-600 leading-relaxed text-lg">
                        <p>
                            As a premier <strong className="text-primary font-bold">civil engineering company</strong> and construction partner, ABM Engineering is dedicated to shaping the future of global infrastructure. Our expertise spans residential, commercial, and industrial projects, delivering robust solutions that stand the test of time.
                        </p>
                        <p>
                            We specialize in complex <strong className="text-primary font-bold">infrastructure development</strong>, project management, and structural fabrication. Our approach is grounded in a commitment to safety, quality construction, and engineering excellence. We don't just meet expectations; we exceed them through precision and innovation.
                        </p>
                        <p>
                            From sustainable construction practices to delivering projects on time and within budget, ABM Engineering focuses on long-term value and unwavering client satisfaction.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Why Choose Us Section with SEO keywords
function WhyChooseUsSection() {
    const reasons = [
        {
            title: "Proven Engineering Expertise",
            desc: "Decades of experience in high-stakes civil engineering and fabrication projects.",
            icon: Lightbulb
        },
        {
            title: "Uncompromising Quality & Safety",
            desc: "We adhere to the highest international standards for safety and quality construction.",
            icon: ShieldCheck
        },
        {
            title: "Client-Centric Approach",
            desc: "Your vision is our priority. We work collaboratively to ensure transparency and trust.",
            icon: Users
        },
        {
            title: "On-Time Delivery",
            desc: "Efficient project management ensures your timeline is respected without cutting corners.",
            icon: Clock
        },
        {
            title: "Modern Technologies",
            desc: "Utilizing advanced construction technologies for precision and sustainability.",
            icon: TrendingUp
        },
        {
            title: "Engineering Excellence",
            desc: "A dedicated team of experts delivering innovation in every structural challenge.",
            icon: CheckCircle2
        }
    ];

    return (
        <section className="py-24 bg-neutral-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skewed-bg -z-10" style={{ transform: 'skewX(-20deg) translateX(50%)' }} />

            <div className="container mx-auto px-4">
                <SectionHeader title="Why Choose ABM Engineering?" subtitle="The pillars of our success and your satisfaction." alignment="center" className="mb-16" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-secondary hover:shadow-xl transition-all group"
                        >
                            <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                            <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Reusing Leadership Section briefly for trust, updated to just "Leadership"
function LeadershipSection() {
    return (
        <section className="py-24 bg-white" id="leadership">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Our Leadership</h2>
                        <p className="text-neutral-500 text-lg">Built on vision, experience, and engineering excellence.</p>
                    </div>

                    <div className="bg-neutral-50 rounded-2xl p-8 md:p-12 shadow-xl border border-neutral-100 flex flex-col md:flex-row items-center gap-10">
                        {/* Profile Image Placeholder */}
                        <div className="relative shrink-0">
                            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-neutral-200 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                                {/* Using a neutral user icon as placeholder */}
                                <Users className="h-24 w-24 text-neutral-400" />
                            </div>
                            <div className="absolute bottom-4 right-4 bg-secondary text-primary p-2 rounded-full shadow-lg">
                                <CheckCircle2 className="h-5 w-5" />
                            </div>
                        </div>

                        {/* Leader Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-3xl font-bold text-primary mb-1">Md Mojahid</h3>
                            <p className="text-secondary font-bold text-lg uppercase tracking-widest mb-6">Founder</p>

                            <blockquote className="relative">
                                <p className="text-neutral-600 text-lg leading-relaxed italic relative z-10">
                                    "Md Mojahid founded ABM Engineering with a vision to deliver precision-driven engineering solutions backed by quality, safety, and long-term reliability. His commitment to excellence drives our every project."
                                </p>
                            </blockquote>

                            <div className="mt-8 flex items-center justify-center md:justify-start space-x-2">
                                <div className="h-1 w-12 bg-primary rounded-full"></div>
                                <span className="text-sm font-bold text-primary opacity-60">ABM ENGINEERING</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}


export default function AboutPage() {
    return (
        <div className="bg-neutral-50 min-h-screen">
            <div className="bg-neutral-900 pt-32 pb-20 md:pt-48 md:pb-32 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <Image src="/images/about/hero-new.png" alt="About Hero" fill className="object-cover" />
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
                        About <span className="text-secondary font-bold">Us</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                        Engineering a sustainable future through innovation and integrity.
                    </p>
                </motion.div>
            </div>
            <AboutUsSection />
            <WhyChooseUsSection />
            <LeadershipSection />
        </div>
    );
}
