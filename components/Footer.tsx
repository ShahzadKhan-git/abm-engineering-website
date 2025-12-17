import Link from "next/link";
import NextImage from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
    Company: [
        { name: "About Us", href: "/about" },
        { name: "Leadership", href: "/about#leadership" },
    ],
    Services: [
        { name: "Mechanical Works", href: "/services" },
        { name: "Structural Fabrication", href: "/services" },
        { name: "Erection", href: "/services" },
        { name: "PEB Roofing", href: "/services" },
    ],
    Connect: [
        { name: "Contact Us", href: "/contact" },
        { name: "Projects", href: "/projects" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="relative h-9 w-9 md:h-14 md:w-14">
                                <NextImage
                                    src="/branding/favicon2.png"
                                    alt="ABM Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold uppercase tracking-wider">ABM Engineering</span>
                        </div>
                        <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
                            Excellence in Mechanical Works, Piping, Structural Fabrication, and Erection. We build with precision and quality.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-secondary transition-colors"><Linkedin size={20} /></Link>
                            <Link href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-lg font-bold mb-6 text-white">{category}</h3>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
                    <p>© {new Date().getFullYear()} ABM Engineering. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Use</Link>
                        {/* <Link href="/sitemap" className="hover:text-white">Sitemap</Link> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
