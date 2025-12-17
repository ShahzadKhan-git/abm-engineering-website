import { Wrench, Factory, HardHat, PaintBucket, Warehouse, Hammer } from "lucide-react";

export interface Service {
    slug: string;
    title: string;
    description: string;
    icon: any;
    image: string;
    fullDescription: string;
    features: string[];
    metaTitle: string;
    metaDescription: string;
    gallery?: string[];
}

export const servicesData: Service[] = [
    {
        slug: "mechanical-works-piping",
        title: "Mechanical Works & Piping",
        description: "Specialized in industrial piping systems, ensuring leak-proof and durable connections for various fluids and gases.",
        icon: Wrench,
        image: "/images/services/mechanical-hero.png",
        metaTitle: "Mechanical Works & Piping Services | ABM Engineering",
        metaDescription: "Expert mechanical works and industrial piping services. Precision installation, leak testing, and maintenance for complex piping systems.",
        fullDescription: `
            At ABM Engineering, our **Mechanical Works & Piping** division specializes in delivering high-performance piping solutions for industrial applications. We understand that piping systems are the lifelines of any processing plant, requiring absolute precision and integrity.
            
            Our team of skilled pipefitters and welders handles complex layouts with ease, ensuring seamless flow and safety for various fluids, gases, and steam. We utilize advanced welding techniques and rigorous testing protocols to guarantee leak-proof connections and long-term durability.

            ### Our Engineering Approach
            We approach every piping project with a focus on safety and efficiency. From material selection to isometric drawing analysis and final hydro-testing, every step is monitored for quality compliance. We work with Carbon Steel (CS), Stainless Steel (SS), and Alloy Steel piping to meet diverse operational needs.
        `,
        features: [
            "Industrial Process Piping Installation",
            "High-Pressure Pipeline Systems",
            "Fabrication of Spools & Supports",
            "Hydro-Testing & Leak Detection",
            "Routine Maintenance & Upgrades",
            "Shutdown/Turnaround Services"
        ],
        gallery: [
            "/images/services/mechanical-gallery-1.png",
            "/images/services/mechanical-gallery-2.png"
        ]
    },
    {
        slug: "structural-fabrication",
        title: "Structural Fabrication",
        description: "Custom structural steel fabrication for industrial buildings, warehouses, and heavy machinery supports.",
        icon: Factory,
        image: "/images/services/structural-hero.png",
        metaTitle: "Structural Steel Fabrication Services | ABM Engineering",
        metaDescription: "Top-tier structural steel fabrication for industrial and commercial projects. Custom beams, trusses, and platforms engineered for strength.",
        fullDescription: `
            **Structural Fabrication** is the backbone of sturdy construction, and ABM Engineering is a leader in fabricating high-quality steel structures. We operate a fully equipped workshop capable of handling heavy steel sections, plate work, and complex assemblies.

            Our fabrication process is driven by precision engineering. We use modern cutting, drilling, and welding equipment to ensure that every beam, column, and truss meets exact specifications. Whether it's for a new industrial shed, a multi-story structure, or equipment supports, we deliver components that are ready for seamless on-site erection.

            ### Quality Assurance
            Quality is paramount in structural work. All our welders are certified, and our fabrication goes through strict dimensional checks and non-destructive testing (NDT) to ensure structural integrity and load-bearing capacity.
        `,
        features: [
            "Heavy Steel Structure Fabrication",
            "Custom Platforms & Walkways",
            "Industrial Shed Trusses & Columns",
            "Equipment Support Structures",
            "CNC Cutting & Precision Drilling",
            "Certified Welding Processes"
        ],
        gallery: [
            "/images/services/structural-gallery-1.png",
            "/images/services/structural-gallery-2.png"
        ]
    },
    {
        slug: "erection-services",
        title: "Erection Services",
        description: "Safe and efficient erection of steel structures and machinery using advanced lifting equipment.",
        icon: HardHat,
        image: "/images/services/erection-hero.png",
        metaTitle: "Steel Structure Erection Services | ABM Engineering",
        metaDescription: "Safe and efficient steel erection services. We handle complex heavy lifting and on-site assembly with strict safety protocols.",
        fullDescription: `
            **Erection** is where the pieces come together, and ABM Engineering ensures this critical phase is executed safely and efficiently. Our erection teams are experts in rigging, lifting, and assembling heavy steel structures and machinery at heights.

            We meticulously plan every lift, conducting risk assessments and using the right cranes and lifting gear. Our supervisors coordinate closely with safety officers to maintain a zero-incident environment while meeting tight project schedules.

            ### On-Site Expertise
            From bolted connections to site welding, our team ensures perfect alignment and stability. We have successfully erected PEB structures, pipe racks, chimney stacks, and heavy industrial machinery across various challenging sites.
        `,
        features: [
            "Structural Steel Erection",
            "Heavy Machinery Installation",
            "Crane Rigging & Lift Planning",
            "High-Altitude Assembly Safety",
            "Alignment & Bolt Torqueing",
            "Site Welding & Modification"
        ],
        gallery: [
            "/images/services/erection-gallery-1.png",
            "/images/services/erection-gallery-2.png"
        ]
    },
    {
        slug: "painting-fabrication",
        title: "Painting & Finishing",
        description: "Industrial grade painting and coating services to protect structures from corrosion and weathering.",
        icon: PaintBucket,
        image: "/images/services/painting-hero.png",
        metaTitle: "Industrial Painting & Fabrication Finishing | ABM Engineering",
        metaDescription: "Protect your assets with our industrial painting and coating services. Sandblasting and anti-corrosion solutions for long-lasting durability.",
        fullDescription: `
            Durability is determined by the finish. ABM Engineering offers comprehensive **Painting & Finishing** services to protect your steel assets from corrosion, chemical attack, and harsh environmental conditions.

            Our protective coating services include surface preparation via sandblasting or grit blasting to achieve the required profile. We apply high-performance epoxy, polyurethane, and zinc-rich primers that significantly extend the lifespan of your structures.

            ### Aesthetic & Functional
            Beyond protection, we ensure a professional aesthetic finish for all fabricated items. Whether it's color-coding for safety piping or branding colors for structural steel, we deliver a smooth, uniform, and durable coat.
        `,
        features: [
            "Sandblasting & Surface Preparation",
            "Anti-Corrosion Coating (Epoxy/PU)",
            "Industrial Spray Painting",
            "Maintenance Repainting",
            "Color Coding for Piping Systems",
            "Fireproofing Coatings"
        ],
        gallery: [
            "/images/services/painting-gallery-1.png",
            "/images/services/painting-hero.png"
        ]
    },
    {
        slug: "peb-roofing-shed",
        title: "PEB Roofing Shed",
        description: "Design and installation of Pre-Engineered Building (PEB) roofing sheds for factories and warehouses.",
        icon: Warehouse,
        image: "/images/services/peb-hero.png",
        metaTitle: "PEB Roofing Shed Manufacturers | ABM Engineering",
        metaDescription: "Complete PEB roofing solutions for warehouses and factories. Fast installation, durable materials, and cost-effective turnover.",
        fullDescription: `
            **Pre-Engineered Buildings (PEB)** are the modern solution for rapid industrial construction. ABM Engineering specializes in the design, supply, and installation of PEB Roofing Sheds that are cost-effective, durable, and quick to erect.

            Our PEB solutions are perfect for factories, warehouses, cold storages, and workshops. We use high-tensile steel and premium roofing sheets (Galvalume/Color-coated) to ensure weather resistance and thermal efficiency.

            ### Custom Solutions
            We customize every shed to your specific dimensions and load requirements. Options include skylights for natural lighting, turbo ventilators for air circulation, and insulation for temperature control.
        `,
        features: [
            "Turnkey PEB Shed Construction",
            "Roofing Sheet Installation",
            "Wall Cladding & Z-Purlins",
            "Skylights & Polycarbonate Sheets",
            "Turbo Ventilators & Gutters",
            "Warehouse & Factory Experts"
        ],
        gallery: [
            "/images/services/peb-hero.png",
            "/images/services/structural-gallery-1.png"
        ]
    },
    {
        slug: "general-engineering",
        title: "General Engineering",
        description: "Comprehensive engineering support for miscellaneous works, maintenance, and civil upgrades.",
        icon: Hammer,
        image: "/images/services/general-hero.png",
        metaTitle: "General Engineering Services | ABM Engineering",
        metaDescription: "Versatile general engineering services for maintenance, civil upgrades, and miscellaneous fabrication works.",
        fullDescription: `
            Every project has unique needs that go beyond standard categories. Our **General Engineering** division handles the miscellaneous yet critical tasks that keep your operations running smoothly.

            From civil upgrades like equipment foundations and flooring to small-scale fabrication repairs and facility maintenance, we provide a versatile workforce ready to tackle any engineering challenge.

            ### Reliable Support
            We act as your reliable partner for ongoing plant maintenance and ad-hoc engineering works, ensuring that specialized expertise is always just a call away.
        `,
        features: [
            "Plant Maintenance Support",
            "Civil Foundations & Flooring",
            "Miscellaneous Steel Works",
            "Utility Piping Repairs",
            "Safety Guard Rails & Ladders",
            "On-Call Engineering Manpower"
        ],
        gallery: [
            "/images/services/general-hero.png",
            "/images/services/mechanical-gallery-1.png"
        ]
    }
];
