"use client";

import * as React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react"; // Make sure these are installed
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
                    : "bg-transparent py-4 text-white"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    {/* Placeholder Logo */}
                    <div className="relative h-9 w-9 md:h-14 md:w-14">
                        <NextImage
                            src="/branding/favicon2.png"
                            alt="ABM Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={cn("text-xl font-bold uppercase tracking-wider", isScrolled ? "text-primary" : "text-white")}>
                        ABM Engineering
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-secondary",
                                pathname === link.href
                                    ? "text-secondary font-bold"
                                    : isScrolled ? "text-neutral-800" : "text-neutral-100"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/partner-with-us">
                        <Button variant={isScrolled ? "primary" : "secondary"} size="sm">
                            Partner with Us
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className={cn("h-6 w-6", isScrolled ? "text-neutral-900" : "text-white")} />
                    ) : (
                        <Menu className={cn("h-6 w-6", isScrolled ? "text-neutral-900" : "text-white")} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium text-neutral-800 hover:text-primary",
                                        pathname === link.href && "text-primary font-bold"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/partner-with-us" onClick={() => setIsOpen(false)}>
                                <Button className="w-full" variant="primary">
                                    Partner with Us
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
