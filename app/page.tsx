"use client";

import { useEffect, useState, useRef } from "react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import SpaceForLife from "@/components/SpaceForLife";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ArrowLeft } from "lucide-react";
import useMeasure from "react-use-measure";

// Services List Component
import { servicesData } from "@/lib/services-data";

function ServicesList() {
  return (
    <section className="py-20 bg-neutral-50" id="services">
      <div className="container mx-auto px-4">
        <SectionHeader title="Our Services" subtitle="Comprehensive engineering and fabrication solutions." className="mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Link href={`/services/${service.slug}`} key={service.slug} className="block group h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-primary">
                    <service.icon size={20} />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow border-b-4 border-transparent group-hover:border-secondary transition-colors">
                  <h3 className="text-xl font-bold text-primary mb-3 flex items-center justify-between">
                    {service.title}
                    <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                  </h3>
                  <p className="text-neutral-600 mb-4 flex-grow text-sm leading-relaxed">{service.description}</p>
                  <span className="text-sm font-bold text-secondary uppercase tracking-wider group-hover:underline">Explore Service</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Crafting / Intro Section
function CraftingSection() {
  return (
    <section className="relative">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Modern Architecture"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Gold Content Area */}
        <div className="w-full lg:w-1/2 bg-secondary p-12 lg:p-24 flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-tight">
            Crafting <br />
            Your Curiosity.
          </h2>
          <p className="text-primary/90 text-lg md:text-xl font-medium mb-12 max-w-lg leading-relaxed">
            ABM Engineering specializes in general construction, design-build, and turnkey projects with expertise in industrial plants, steel structures, and mechanical erection. We build the infrastructure that powers the future.
          </p>

          <Link href="/contact">
            <button className="bg-primary text-white text-sm font-bold py-5 px-10 flex items-center gap-3 hover:bg-white hover:text-primary transition-colors tracking-widest uppercase">
              Schedule Free Meeting
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Process Section
import { ClipboardList, PenTool, Hammer, CheckCircle } from "lucide-react";

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Concept & Strategy",
      description: "We define the scope and feasibility, ensuring every project starts with a solid foundation aligned with your vision.",
      icon: ClipboardList
    },
    {
      number: "02",
      title: "Design & Engineering",
      description: "Our expert engineers create detailed blueprints and structural models, prioritizing safety, efficiency, and aesthetics.",
      icon: PenTool
    },
    {
      number: "03",
      title: "Construction & Fabrication",
      description: "Precision execution where plans become reality. We utilize advanced fabrication techniques and rigorous quality control.",
      icon: Hammer
    },
    {
      number: "04",
      title: "Inspection & Delivery",
      description: "Comprehensive final inspections and systems testing to ensure the facility is turnkey-ready and exceeds standards.",
      icon: CheckCircle
    }
  ];

  const clients = ["INDUSTRIAL PLANT", "UNIVERSITY", "HOSPITAL", "COMMERCIAL COMPLEX"];

  return (
    <section className="bg-primary py-32 text-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Client Logos / Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40 opacity-20 grayscale items-center justify-items-center">
          {clients.map((client, i) => (
            <div key={i} className="text-xl font-bold border border-white/30 p-4 w-full text-center tracking-widest uppercase hover:opacity-100 transition-opacity duration-500 cursor-default">{client}</div>
          ))}
        </div>

        <div className="mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            How Do We Work?
          </motion.h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Our streamlined process ensures transparency, precision, and excellence from the initial concept to the final handover.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-secondary shadow-[0_0_15px_rgba(253,185,19,0.5)]"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative z-10 group"
            >
              <div className="bg-primary border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:border-secondary/50 transition-all duration-300 hover:bg-white/5 hover:-translate-y-2 shadow-lg h-full flex flex-col">

                {/* Number Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 bg-primary border-4 border-primary rounded-full p-1">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-black shadow-[0_0_20px_rgba(253,185,19,0.4)] group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                </div>

                <div className="mt-8 mb-6 flex justify-center md:justify-start">
                  <div className="p-3 bg-white/5 rounded-lg text-secondary group-hover:text-white transition-colors">
                    <step.icon size={32} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                  {step.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed flex-grow">
                  {step.description}
                </p>

                {/* Mobile Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute bottom-[-32px] left-1/2 w-0.5 h-8 bg-white/10">
                    <div className="w-full h-full bg-secondary/30"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/contact">
            <button className="bg-secondary text-primary font-bold py-4 px-10 rounded-full hover:bg-white transition-colors shadow-[0_0_20px_rgba(253,185,19,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              Start Your Project With Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including Oil & Gas, Petrochemical, Power Generation, Combine Cycle Power Plants, and General Manufacturing."
    },
    {
      question: "What kind of services do you offer?",
      answer: "We specialize in Mechanical Works, Piping, Structural Fabrication, Heavy Erection, PEB Roofing, and Industrial Painting & Finishing."
    },
    {
      question: "What is your safety record?",
      answer: "Safety is our core value. We strictly adhere to international safety standards (HSE) and have maintained an excellent safety record across all our project sites."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Huge FAQ Title */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-[100px] md:text-[150px] font-black tracking-tighter text-neutral-900 leading-[0.8]">
              FAQ
            </h2>
          </div>

          {/* Right: Accordion */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                className={`border border-neutral-200 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${openIndex === index ? 'bg-secondary' : 'bg-white hover:border-neutral-300'}`}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className={`text-xl font-bold ${openIndex === index ? 'text-primary' : 'text-neutral-800'}`}>
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={openIndex === index ? 'text-primary' : 'text-neutral-400'}><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>

                <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 p-6 pt-0' : 'grid-rows-[0fr] opacity-0 p-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-primary/80 font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// Projects Section
import { projects } from "@/lib/projects-data";

function ProjectsSection() {
  // Infinite scroll logic
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const animationRef = useRef<any>(null); // To control animation manually

  // Duplicate data for seamless loop
  const duplicatedProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    let controls;
    let finalPosition = -width / 3 - 8; // Adjust based on duplicates and gap

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: 25 * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: 45, // Speed of scroll (seconds)
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    animationRef.current = controls;

    return controls?.stop;
  }, [xTranslation, width, mustFinish, rerender]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (animationRef.current) animationRef.current.stop();

    const cardWidth = 482; // Approx card + gap
    const currentX = xTranslation.get();
    let newX = direction === 'left' ? currentX + cardWidth : currentX - cardWidth;
    const finalPosition = -width / 3 - 8;

    // Clamp start
    if (newX > 0) newX = 0;

    animate(xTranslation, newX, {
      duration: 0.5,
      ease: "easeInOut",
      onComplete: () => {
        // Loop check: if we scrolled past the end, reset seamlessly
        if (newX < finalPosition) {
          xTranslation.set(newX - finalPosition);
        }
        setMustFinish(true);
        setRerender(!rerender);
      }
    });
  };

  return (
    <section className="py-24 bg-neutral-50 overflow-hidden" id="projects">
      <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Projects We’ve Completed</h2>
          <p className="text-neutral-600 max-w-xl text-lg">Delivering reliable engineering solutions for complex industrial environments.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => handleManualScroll('left')} className="rounded-full border-secondary/50 text-secondary hover:bg-secondary hover:text-primary transition-colors">
            <ArrowLeft size={20} />
          </Button>
          <Button variant="outline" size="icon" onClick={() => handleManualScroll('right')} className="rounded-full border-secondary/50 text-secondary hover:bg-secondary hover:text-primary transition-colors">
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>

      <div className="relative w-full">
        <motion.div
          className="flex gap-8 absolute left-0"
          style={{ x: xTranslation }}
          ref={ref}
          onHoverStart={() => {
            setMustFinish(true);
            // xTranslation.stop(); // Optional: completely stop
          }}
          onHoverEnd={() => {
            setMustFinish(true);
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={`${project.slug}-${index}`} className="group relative min-w-[350px] md:min-w-[450px] h-[500px] rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-secondary text-primary text-xs font-bold px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 flex items-center gap-2">
                    <MapPin size={14} /> {project.location}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-neutral-200 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-wider">
                      View Project <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Spacer to give height to the relative container since absolute children don't contribute height */}
        <div className="h-[500px]"></div>
      </div>
    </section>
  );
}

// New Split Layout Contact Section
function ContactSplitSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <section className="flex flex-col lg:flex-row min-h-[600px] lg:mt-32">
      {/* Left: Yellow/Gold Brand Area */}
      <div className="w-full lg:w-1/2 bg-secondary p-12 lg:p-24 flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 font-serif leading-tight">
          Want to Discuss Any New Projects?
        </h2>
        <p className="text-xl text-primary/80 mb-12 font-medium max-w-lg">
          If you have any ideas, questions or would love to discuss a project with one of our engineers, send us a message and we'll get back to you immediately.
        </p>

        <Link href="/contact">
          <button className="bg-primary text-white text-lg font-bold py-4 px-10 flex items-center gap-4 hover:bg-primary/90 transition-colors uppercase tracking-widest group">
            Reach Out
            <span className="group-hover:translate-x-1 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </span>
          </button>
        </Link>
      </div>

      {/* Right: Dark Form Area */}
      <div className="w-full lg:w-1/2 bg-primary p-12 lg:p-24 flex flex-col justify-center lg:-mt-32 relative z-10 shadow-2xl">
        {submitted ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-white">
            <div className="inline-block p-4 rounded-full bg-green-500/20 text-green-400 mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 className="text-3xl font-bold mb-2">Message Sent</h3>
            <p className="text-neutral-400">We will be in touch shortly.</p>
            <button onClick={() => setSubmitted(false)} className="mt-8 text-secondary underline">Send another</button>
          </motion.div>
        ) : (
          <form action="https://formspree.io/f/xldqqqlw" method="POST" onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="text-secondary font-bold text-xs tracking-widest uppercase">Name</label>
              <input required name="name" className="w-full bg-[#0a2342] border-none text-white p-4 focus:ring-1 focus:ring-secondary outline-none placeholder:text-neutral-600" placeholder="Your name" />
            </div>

            <div className="space-y-2">
              <label className="text-secondary font-bold text-xs tracking-widest uppercase">Email</label>
              <input required name="email" type="email" className="w-full bg-[#0a2342] border-none text-white p-4 focus:ring-1 focus:ring-secondary outline-none placeholder:text-neutral-600" placeholder="Your email" />
            </div>

            <div className="space-y-2">
              <label className="text-secondary font-bold text-xs tracking-widest uppercase">Message</label>
              <textarea required name="message" rows={4} className="w-full bg-[#0a2342] border-none text-white p-4 focus:ring-1 focus:ring-secondary outline-none placeholder:text-neutral-600 resize-none" placeholder="Your message" />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-white text-primary font-bold py-4 hover:bg-neutral-100 transition-colors uppercase tracking-widest mt-4">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <CraftingSection />
      <ServicesList />
      <SpaceForLife />
      <ProcessSection />
      <ProjectsSection />
      <FAQSection />
      <ContactSplitSection />
    </>
  );
}
