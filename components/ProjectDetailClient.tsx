"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, MapPin, Building2, HardHat, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Framer Motion Components
const MotionH1 = motion.create("h1");
const MotionDiv = motion.create("div");

interface ProjectDetailClientProps {
    project: any; // Ideally this should be the Project type imported
    galleryImages: string[];
    otherProjects: any[];
}

export default function ProjectDetailClient({ project, galleryImages, otherProjects }: ProjectDetailClientProps) {
    return (
        <div className="bg-neutral-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[70vh] min-h-[600px] w-full bg-neutral-900 flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/60 to-transparent z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-0" />

                <div className="container mx-auto px-4 relative z-10 pt-20">
                    <Link href="/projects" className="inline-flex items-center text-secondary mb-8 hover:text-white transition-colors group">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Projects
                    </Link>

                    {/* Project Meta Badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {project.tags.map((tag: string, idx: number) => (
                            <span key={idx} className="px-3 py-1 bg-secondary/20 border border-secondary/30 text-secondary text-xs uppercase tracking-wider font-bold rounded-full backdrop-blur-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <MotionH1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 max-w-5xl tracking-tight leading-none"
                    >
                        {project.title}
                    </MotionH1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 backdrop-blur-md border border-white/10">
                                <Building2 className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <span className="block text-neutral-400 text-xs uppercase tracking-widest font-bold mb-1">Client</span>
                                <span className="text-xl text-white font-medium">{project.client}</span>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 backdrop-blur-md border border-white/10">
                                <MapPin className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <span className="block text-neutral-400 text-xs uppercase tracking-widest font-bold mb-1">Location</span>
                                <span className="text-xl text-white font-medium">{project.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content Column */}
                <div className="lg:col-span-8 space-y-20">

                    {/* Overview & Description */}
                    <section>
                        <h2 className="text-3xl font-bold text-primary mb-8 relative inline-block">
                            Project Overview
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
                        </h2>
                        <div className="prose prose-lg max-w-none text-neutral-600 leading-relaxed whitespace-pre-line">
                            {project.fullDescription}
                        </div>
                    </section>

                    {/* Stats Grid if available */}
                    {project.safetyStats && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {project.safetyStats.map((stat: any, idx: number) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 text-center">
                                    <div className="text-3xl md:text-4xl font-black text-secondary mb-2">{stat.value}</div>
                                    <div className="text-xs uppercase tracking-widest font-bold text-neutral-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Gallery Section */}
                    {galleryImages && galleryImages.length > 0 && (
                        <section>
                            <h3 className="text-2xl font-bold text-primary mb-8">Visual Gallery</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {galleryImages.map((img, idx) => (
                                    <MotionDiv
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className={`relative rounded-2xl overflow-hidden shadow-lg group ${idx === 0 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-video'}`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${project.title} Gallery ${idx + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </MotionDiv>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Case Study Section: Challenge / Solution / Outcome */}
                    <section className="space-y-12">
                        {/* Challenges */}
                        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
                            <div className="bg-red-50 p-6 border-b border-red-100 flex items-center">
                                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 text-red-600">
                                    <HardHat className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-bold text-primary">Key Challenges</h3>
                            </div>
                            <div className="p-8">
                                <ul className="space-y-4">
                                    {project.challenges.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start">
                                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 mr-3 flex-shrink-0" />
                                            <span className="text-neutral-600 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Solutions */}
                        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
                            <div className="bg-blue-50 p-6 border-b border-blue-100 flex items-center">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-primary">
                                    <CheckCircle2 className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-bold text-primary">Our Solution</h3>
                            </div>
                            <div className="p-8">
                                <ul className="space-y-4">
                                    {project.solutions.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                                            <span className="text-neutral-600 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Outcome - Highlight Box */}
                        <div className="bg-primary text-white p-10 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <h3 className="text-2xl font-bold text-secondary mb-6 relative z-10 flex items-center">
                                <ShieldCheck className="mr-3 h-6 w-6" /> Result & Impact
                            </h3>
                            <p className="text-xl md:text-2xl leading-relaxed font-light relative z-10">
                                "{project.outcome}"
                            </p>
                        </div>
                    </section>
                </div>

                {/* Sidebar Column */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Sticky Wrapper */}
                    <div className="sticky top-32 space-y-8">
                        {/* CTA Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-neutral-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150 duration-700" />

                            <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">Need similar results?</h3>
                            <p className="text-neutral-500 mb-8 relative z-10">
                                Engineering excellence delivered on time. Let's discuss your next project.
                            </p>

                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center p-4 bg-neutral-50 rounded-xl">
                                    <Phone className="h-5 w-5 text-secondary mr-4" />
                                    <div>
                                        <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block">Direct Line</span>
                                        <span className="text-lg font-bold text-primary">7004557002</span>
                                    </div>
                                </div>
                                <Link href="/contact" className="block">
                                    <Button className="w-full h-14 bg-secondary text-primary hover:bg-primary hover:text-white font-bold text-lg rounded-xl shadow-lg shadow-secondary/20 transition-all duration-300">
                                        Request Consultation
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* More Projects Nav */}
                        <div className="bg-neutral-50 p-6 rounded-xl">
                            <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-6 border-b border-neutral-200 pb-2">More from BPCL</h4>
                            <nav className="flex flex-col space-y-4">
                                {otherProjects.map(p => (
                                    <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
                                        <span className="text-sm font-medium text-neutral-600 group-hover:text-primary transition-colors block mb-1">
                                            {p.title}
                                        </span>
                                        <span className="text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                                            View Case Study →
                                        </span>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

