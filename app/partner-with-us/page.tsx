"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Send, CheckCircle, Handshake, Briefcase, TrendingUp } from "lucide-react";
import { useState, FormEvent } from "react";
import Image from "next/image";

export default function PartnerPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            const response = await fetch("https://formspree.io/f/xldqqqlw", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                console.error("Form submission failed");
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Something went wrong. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-neutral-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-neutral-900 text-white overflow-hidden h-[80vh] min-h-[600px] flex items-center">
                <div className="absolute inset-0 opacity-50">
                    <Image
                        src="/images/heroes/about-hero.png" // Placeholder: Using about-hero as fallback for handshake image
                        alt="Partnership"
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/40 to-transparent z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                            Partnership Opportunity
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-white leading-tight">
                            Let’s Build Strong <span className="text-secondary">Partnerships</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 max-w-2xl font-light leading-relaxed">
                            Collaborate with ABM Engineering for long-term specialized success in industrial projects.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Content */}
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold text-primary mb-6">Why Partner With Us?</h2>
                            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                                At ABM Engineering, we believe in the power of collaboration. We are constantly seeking reliable partners, sub-contractors, and suppliers to deliver world-class fabrication and erection solutions.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                Join our ecosystem of excellence and grow your business alongside a trusted industry leader.
                            </p>
                        </section>

                        <div className="grid gap-6">
                            <FeatureCard
                                icon={<Handshake className="h-6 w-6" />}
                                title="Fair & Transparent"
                                description="We value integrity and ensure transparent dealings with all our partners."
                            />
                            <FeatureCard
                                icon={<Briefcase className="h-6 w-6" />}
                                title="Consistent Projects"
                                description="Access a steady stream of industrial projects across varied sectors."
                            />
                            <FeatureCard
                                icon={<TrendingUp className="h-6 w-6" />}
                                title="Mutual Growth"
                                description="We invest in our relationships to ensure long-term mutual success."
                            />
                        </div>
                    </div>


                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-neutral-100"
                    >
                        <h3 className="text-3xl font-bold text-primary mb-2">Become a Partner</h3>
                        <p className="text-neutral-500 mb-10">Register your interest and we will get back to you.</p>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center p-8 text-center bg-blue-50 rounded-2xl border border-blue-100 h-96"
                            >
                                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h4 className="text-2xl font-bold text-neutral-900 mb-2">Request Received!</h4>
                                <p className="text-neutral-600 max-w-xs mb-8">Our procurement team will review your profile and contact you.</p>
                                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-100" onClick={() => setSubmitted(false)}>Submit Another Inquiry</Button>
                            </motion.div>
                        ) : (
                            <form action="https://formspree.io/f/xldqqqlw" method="POST" onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2 group">
                                    <label htmlFor="companyName" className="block text-sm font-bold text-primary tracking-wide uppercase group-focus-within:text-secondary transition-colors">Company Name</label>
                                    <input
                                        required
                                        id="companyName"
                                        name="company"
                                        type="text"
                                        className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral-200 focus:border-secondary outline-none transition-all placeholder-transparent text-lg text-neutral-800"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2 group">
                                        <label htmlFor="contactPerson" className="block text-sm font-bold text-primary tracking-wide uppercase group-focus-within:text-secondary transition-colors">Contact Person</label>
                                        <input
                                            required
                                            id="contactPerson"
                                            name="name"
                                            type="text"
                                            className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral-200 focus:border-secondary outline-none transition-all placeholder-transparent text-lg text-neutral-800"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label htmlFor="email" className="block text-sm font-bold text-primary tracking-wide uppercase group-focus-within:text-secondary transition-colors">Email</label>
                                        <input
                                            required
                                            id="email"
                                            name="email"
                                            type="email"
                                            className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral-200 focus:border-secondary outline-none transition-all placeholder-transparent text-lg text-neutral-800"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label htmlFor="partnershipType" className="block text-sm font-bold text-primary tracking-wide uppercase group-focus-within:text-secondary transition-colors">Partnership Type</label>
                                    <select
                                        id="partnershipType"
                                        name="partnership_type"
                                        className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral-200 focus:border-secondary outline-none transition-all text-lg text-neutral-800 cursor-pointer"
                                    >
                                        <option value="">Select Type...</option>
                                        <option>Material Supplier</option>
                                        <option>Sub-Contractor (Manpower)</option>
                                        <option>Equipment Rental</option>
                                        <option>Joint Venture / Consortium</option>
                                        <option>Logistics Partner</option>
                                    </select>
                                </div>

                                <div className="space-y-2 group">
                                    <label htmlFor="proposal" className="block text-sm font-bold text-primary tracking-wide uppercase group-focus-within:text-secondary transition-colors">Brief Proposal</label>
                                    <textarea
                                        required
                                        id="proposal"
                                        name="proposal"
                                        rows={3}
                                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all resize-none mt-2"
                                    ></textarea>
                                </div>

                                <Button type="submit" className="w-full text-lg py-7 font-bold tracking-wide rounded-xl shadow-lg mt-4 group bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <span className="flex items-center">
                                            <span className="animate-spin mr-3 h-5 w-5 border-2 border-b-transparent border-white rounded-full"></span>
                                            Processing...
                                        </span>
                                    ) : (
                                        <span className="flex items-center group-hover:translate-x-1 transition-transform">
                                            Become a Partner <Send className="ml-2 h-5 w-5" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="flex items-start p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-secondary/10 p-4 rounded-xl text-primary mr-5">
                {icon}
            </div>
            <div>
                <h4 className="text-xl font-bold text-primary mb-2">{title}</h4>
                <p className="text-neutral-600">{description}</p>
            </div>
        </div>
    )
}
