"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Clock, CheckCircle, ShieldCheck } from "lucide-react";
import { useState, FormEvent } from "react";
import Image from "next/image";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <div className="bg-neutral-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-neutral-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/images/heroes/contact-hero.png"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/90 via-neutral-900/50 to-neutral-50 z-0"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-white">
                            Get in <span className="text-secondary">Touch</span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                            Ready to start your next project? Our team of engineering experts is here to assist you.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-20 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Contact Form Column */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-neutral-100"
                        >
                            <h3 className="text-3xl font-bold text-primary mb-2">Send Inquiry</h3>
                            <p className="text-neutral-500 mb-10">Please enter your details below. We typically respond within 24 hours.</p>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center h-96 text-center bg-green-50 rounded-2xl border border-green-100 p-8"
                                >
                                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                        <CheckCircle size={48} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-neutral-900 mb-2">Inquiry Sent Successfully!</h4>
                                    <p className="text-neutral-600 max-w-xs mb-8">Thank you for reaching out. A dedicated engineer will contact you shortly.</p>
                                    <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-100 px-8" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2 group">
                                            <label htmlFor="fullName" className="block text-sm font-bold text-primary tracking-wide uppercase group-focus-within:text-secondary transition-colors">Full Name</label>
                                            <input
                                                required
                                                id="fullName"
                                                type="text"
                                                className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral-200 focus:border-secondary outline-none transition-all placeholder-transparent text-lg text-neutral-800"
                                            />
                                        </div>
                                        <div className="space-y-2 group">
                                            <label htmlFor="companyName" className="block text-sm font-bold text-primary tracking-wide uppercase group-focus-within:text-secondary transition-colors">Company Name</label>
                                            <input
                                                id="companyName"
                                                type="text"
                                                className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral-200 focus:border-secondary outline-none transition-all placeholder-transparent text-lg text-neutral-800"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2 group">
                                            <label htmlFor="email" className="block text-sm font-bold text-primary tracking-wide uppercase group-focus-within:text-secondary transition-colors">Email Address</label>
                                            <input
                                                required
                                                id="email"
                                                type="email"
                                                className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral-200 focus:border-secondary outline-none transition-all placeholder-transparent text-lg text-neutral-800"
                                            />
                                        </div>
                                        <div className="space-y-2 group">
                                            <label htmlFor="phone" className="block text-sm font-bold text-primary tracking-wide uppercase group-focus-within:text-secondary transition-colors">Phone Number</label>
                                            <input
                                                required
                                                id="phone"
                                                type="tel"
                                                className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral-200 focus:border-secondary outline-none transition-all placeholder-transparent text-lg text-neutral-800"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 group">
                                        <label htmlFor="service" className="block text-sm font-bold text-primary tracking-wide uppercase group-focus-within:text-secondary transition-colors">Service Interested In</label>
                                        <select
                                            id="service"
                                            className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral-200 focus:border-secondary outline-none transition-all text-lg text-neutral-800 cursor-pointer"
                                        >
                                            <option value="">Select a Service...</option>
                                            <option>Mechanical Works & Piping</option>
                                            <option>Structural Fabrication</option>
                                            <option>Roofing & Sheeting</option>
                                            <option>Fire Protection Systems</option>
                                            <option>General Engineering</option>
                                            <option>Other Inquiry</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2 group">
                                        <label htmlFor="message" className="block text-sm font-bold text-primary tracking-wide uppercase group-focus-within:text-secondary transition-colors">Message</label>
                                        <textarea
                                            required
                                            id="message"
                                            rows={4}
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
                                                Send Message <Send className="ml-2 h-5 w-5" />
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </motion.div>
                    </div>

                    {/* Contact Info Column */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-neutral-100 mb-8">
                                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <InfoCard
                                        icon={<Phone className="h-5 w-5" />}
                                        title="Call Us Directly"
                                        content="7004557002"
                                        subContent="Mon-Fri, 9am - 6pm IST"
                                        href="tel:7004557002"
                                    />
                                    <InfoCard
                                        icon={<Mail className="h-5 w-5" />}
                                        title="Email Enquiries"
                                        content="abmengineering006@gmail.com"
                                        subContent="We usually reply within 24 hours"
                                        href="mailto:abmengineering006@gmail.com"
                                    />
                                    <InfoCard
                                        icon={<MapPin className="h-5 w-5" />}
                                        title="Visit Our HQ"
                                        content="At. Po. Chowk, Tal. Khalapur,"
                                        subContent="Dist. Raigad, Maharashtra - 410206"
                                        href="https://maps.google.com"
                                    />
                                </div>
                            </div>

                            {/* Trust Section */}
                            <div className="bg-secondary/10 p-8 rounded-3xl border border-secondary/20 mb-8 backdrop-blur-sm">
                                <h4 className="text-xl font-black text-primary mb-5 uppercase tracking-wide">Why Choose Us?</h4>
                                <ul className="space-y-4">
                                    <TrustItem text="Industry-compliant safety standards" />
                                    <TrustItem text="Rapid response and execution" />
                                    <TrustItem text="Trusted by major industrial clients" />
                                </ul>
                            </div>

                            {/* Map */}
                            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-64 w-full relative transform hover:scale-[1.02] transition-transform duration-500">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120638.06452279586!2d73.2323789!3d18.9102434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e4da8b16c705%3A0x6d9f952504943f7a!2sKhalapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoCard({ icon, title, content, subContent, href }: { icon: any, title: string, content: string, subContent: string, href: string }) {
    return (
        <a href={href} className="flex items-start p-4 hover:bg-neutral-50 rounded-2xl transition-colors group">
            <div className="bg-primary/5 p-3 rounded-xl text-primary group-hover:bg-secondary group-hover:text-primary transition-colors mr-4 mt-1">
                {icon}
            </div>
            <div>
                <p className="text-neutral-400 font-bold text-xs uppercase tracking-wider mb-1 group-hover:text-secondary transition-colors">{title}</p>
                <h4 className="text-lg font-bold text-neutral-800 leading-tight mb-1">{content}</h4>
                <p className="text-sm text-neutral-500">{subContent}</p>
            </div>
        </a>
    )
}

function TrustItem({ text }: { text: string }) {
    return (
        <li className="flex items-center text-neutral-700 font-medium">
            <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center mr-3 shadow-sm text-primary">
                <CheckCircle className="h-4 w-4" />
            </div>
            <span>{text}</span>
        </li>
    )
}
