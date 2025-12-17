import { servicesData } from "@/lib/services-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { Metadata } from "next";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: service.metaTitle,
        description: service.metaDescription,
    };
}

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailPage({ params }: Props) {
    const slug = (await params).slug;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-neutral-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full bg-neutral-900 flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/60 to-transparent z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-0" />

                <div className="container mx-auto px-4 relative z-10 pt-20">
                    <Link href="/services" className="inline-flex items-center text-secondary mb-6 hover:text-white transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                    </Link>
                    <MotionH1 className="text-5xl md:text-7xl font-black text-white mb-6 max-w-4xl tracking-tight leading-none">
                        {service.title}
                    </MotionH1>
                    <p className="text-xl md:text-2xl text-neutral-200 max-w-2xl font-light leading-relaxed border-l-4 border-secondary pl-6">
                        {service.description}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-16">

                    {/* Overview */}
                    <section className="prose prose-lg max-w-none text-neutral-600">
                        <div className="whitespace-pre-line leading-loose">
                            {service.fullDescription.split('\n').map((line, i) => {
                                const trimmed = line.trim();
                                if (trimmed.startsWith('###')) {
                                    return <h3 key={i} className="text-3xl font-bold text-primary mt-12 mb-6 tracking-tight">{trimmed.replace('###', '')}</h3>
                                }
                                if (trimmed.startsWith('**')) {
                                    const parts = trimmed.split('**');
                                    return <p key={i} className="mb-6">{parts[0]}<strong className="text-primary font-bold">{parts[1]}</strong>{parts[2]}</p>
                                }
                                return <p key={i} className="mb-6">{trimmed}</p>
                            })}
                        </div>
                    </section>

                    {/* Image Gallery */}
                    {service.gallery && service.gallery.length > 0 && (
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
                            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center">
                                <span className="w-12 h-1 bg-secondary mr-4 block rounded-full"></span>
                                Service Gallery
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.gallery.map((img, idx) => (
                                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
                                        <Image
                                            src={img}
                                            alt={`${service.title} Gallery ${idx + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Features Grid */}
                    <section className="bg-neutral-900 text-white p-10 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-2xl font-bold text-white mb-8">Key Capabilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 relative z-10">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start group">
                                    <div className="mt-1 mr-4 bg-secondary/20 p-1 rounded-full group-hover:bg-secondary transition-colors duration-300">
                                        <CheckCircle2 className="h-5 w-5 text-secondary group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-neutral-200 font-medium text-lg group-hover:text-white transition-colors">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Modern CTA Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
                        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                            <Phone className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Ready to Start?</h3>
                        <p className="text-neutral-500 mb-8 leading-relaxed">
                            Discuss your {service.title.toLowerCase()} needs with our engineering team.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-neutral-50 rounded-xl">
                                <Phone className="h-5 w-5 text-secondary mr-4" />
                                <div>
                                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block">Call Us</span>
                                    <span className="text-lg font-bold text-primary">7004557002</span>
                                </div>
                            </div>

                            <Link href="/contact" className="block">
                                <Button className="w-full h-14 bg-secondary text-primary hover:bg-primary hover:text-white font-bold text-lg rounded-xl shadow-lg shadow-secondary/20 transition-all duration-300">
                                    Request a Quote
                                </Button>
                            </Link>

                            <p className="text-xs text-center text-neutral-400 mt-4">
                                Fast response guaranteed within 24 hours.
                            </p>
                        </div>
                    </div>

                    {/* Other Services Navigation */}
                    <div className="pl-4 border-l-2 border-neutral-200">
                        <h4 className="font-bold text-neutral-400 text-sm uppercase tracking-widest mb-6">Explore More</h4>
                        <nav className="flex flex-col space-y-4">
                            {servicesData.filter(s => s.slug !== slug).map(s => (
                                <Link key={s.slug} href={`/services/${s.slug}`} className="group flex items-center justify-between text-neutral-600 hover:text-primary transition-colors">
                                    <span className="font-medium group-hover:translate-x-1 transition-transform">{s.title}</span>
                                    <div className="w-8 h-[1px] bg-neutral-200 group-hover:bg-secondary transition-colors" />
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper to fix motion import error in server component (if needed) - but strictly we should avoid motion in server component unless "use client"
// Adding "use client" wrapper component for the Title animation
function MotionH1({ children, className }: { children: React.ReactNode, className?: string }) {
    // Basic H1 for server rendering, can be upgraded to client component if animation is vital
    return <h1 className={className}>{children}</h1>
}
