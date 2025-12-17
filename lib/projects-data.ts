interface Project {
    slug: string;
    title: string;
    client: string;
    location: string;
    description: string;
    fullDescription: string;
    challenges: string[];
    solutions: string[];
    outcome: string;
    image: string;
    folderPath: string; // New property for dynamic gallery loading
    gallery: string[]; // Keeping this for backward compatibility or as fallback
    tags: string[];
    safetyStats?: { label: string; value: string }[];
}

export const projects: Project[] = [
    {
        slug: "piping-works-installation",
        title: "Piping Works, Installation, Testing & Commissioning",
        client: "BPCL – LOBP, Rasayni",
        location: "Rasayni, Mumbai, India",
        description: "Executed comprehensive piping works including installation, testing, and commissioning of equipment along with associated mechanical works.",
        fullDescription: `
            Our team executed a turnkey piping solution for BPCL's LOBP facility at Rasayni. The scope involved the complete lifecycle of industrial piping—from fabrication and erection to hydro-testing and final commissioning.
            
            The project demanded high-precision alignment for mechanical equipment and strict adherence to ASME B31.3 process piping codes. We mobilized a specialized workforce to handle both carbon steel and stainless steel piping networks, ensuring zero-leak operations under high-pressure environments.
        `,
        challenges: [
            "Strict shutdown windows requiring 24/7 distinct shifts.",
            "High-precision alignment for rotary equipment connection.",
            "Coordination with ongoing plant operations in hazardous zones."
        ],
        solutions: [
            "Implemented localized pre-fabrication to minimize site welding.",
            "Deployed advanced NDT (Non-Destructive Testing) for joint verification.",
            "Used automated torque tools for flange management."
        ],
        outcome: "Delivered a leak-free, certified piping network 3 days ahead of schedule, enhancing the plant's fluid transfer efficiency by 15%.",
        image: "/images/piping/home-card.png",
        folderPath: "piping",
        gallery: [], // Loaded dynamically
        tags: ["Mechanical", "Piping", "Commissioning"],
        safetyStats: [
            { label: "Safe Man Hours", value: "25,000+" },
            { label: "LTI Free", value: "100%" }
        ]
    },
    {
        slug: "sprinkler-system-installation",
        title: "Sprinkler System & Associated Mechanical Works",
        client: "BPCL – LOBP, Rasayni",
        location: "Rasayni, Mumbai, India",
        description: "Completed installation of fire sprinkler systems and associated mechanical works, ensuring compliance with industrial safety norms.",
        fullDescription: `
            Fire safety is paramount in petrochemical facilities. We installed a comprehensive fire sprinkler network covering critical storage and processing zones. 
            
            The project included the erection of main headers, distribution lines, and high-velocity water spray systems. Our engineering team ensured that the hydraulic calculations met NFPA standards, providing an optimized safety shield for the facility's assets.
        `,
        challenges: [
            "Working at heights of over 15 meters in active zones.",
            "Integration with legacy fire alarm signaling systems.",
            "Zero-tolerance policy for hot work permit violations."
        ],
        solutions: [
            "Utilized specialized articulated boom lifts for safe height access.",
            "Prefabricated sprinkler spools to reduce on-site welding by 40%.",
            "Conducted rigorous hydraulic pressure testing before commissioning."
        ],
        outcome: "A fully certified, robust fire suppression system providing 100% coverage to critical assets.",
        image: "/images/sprinkler/home-card.png",
        folderPath: "sprinkler",
        gallery: [], // Loaded dynamically
        tags: ["Safety", "Fire Protection", "Mechanical"],
        safetyStats: [
            { label: "System Pressure", value: "12 Bar" },
            { label: "Coverage", value: "15,000 sq.ft" }
        ]
    },
    {
        slug: "roofing-sheeting-structural",
        title: "Roofing Sheeting & Miscellaneous Structural Works",
        client: "BPCL – LOBP, Rasayni",
        location: "Rasayni, Mumbai, India",
        description: "Delivered roofing sheeting solutions along with miscellaneous structural works, providing durable weather protection and structural integrity.",
        fullDescription: `
            We provided a complete structural envelope solution, involving the erection of heavy steel structures and the installation of industrial-grade roofing sheets.
            
            The project aimed to upgrade the facility's weather protection while adding new structural capabilities for overhead cranes. We used high-tensile steel and premium Galvalume sheets to ensure longevity and resistance to corrosive industrial environments.
        `,
        challenges: [
            "Heavy monsoon winds and adverse weather during installation.",
            "Live load restrictions on existing columns.",
            "Logistical challenges moving long-span sheets in tight areas."
        ],
        solutions: [
            "Modular structural pre-assembly on the ground.",
            "Use of high-grade weather-resistant fasteners and sealants.",
            "Implemented a staged installation process to maintain roof integrity."
        ],
        outcome: "A durable, weather-proof infrastructure with a 20-year warranty on sheeting, ensuring long-term asset protection.",
        image: "/images/structural/home-card.png",
        folderPath: "structural",
        gallery: [], // Loaded dynamically
        tags: ["Structural", "Roofing", "Construction"],
        safetyStats: [
            { label: "Steel Erected", value: "450 Tons" },
            { label: "Roof Area", value: "12,000 sq.m" }
        ]
    },
    {
        slug: "pulse-air-system",
        title: "Pulse Air System Installation",
        client: "BPCL – LOBP, Rasayni",
        location: "Rasayni, Mumbai, India",
        description: "Successfully installed a pulse air system for finished product tanks, improving product handling efficiency and operational reliability.",
        fullDescription: `
            To optimize the mixing and storage of finished petroleum products, we installed an advanced Pulse Air System. This technology replaces mechanical mixers, using compressed air pulses to agitate liquids.
            
            Our scope included the installation of air receiver tanks, control panels, and the intricate stainless steel injection piping inside the storage tanks.
        `,
        challenges: [
            "Confined space entry requirements for tank internal works.",
            "Precision calibration of air pulse timing sequences.",
            "Ensuring absolute cleanliness to prevent product contamination."
        ],
        solutions: [
            "Automated pulse control systems for consistent mixing.",
            "Non-intrusive installation techniques to preserve tank integrity.",
            "Rigorous chemical cleaning and passivation protocols."
        ],
        outcome: "50% reduction in energy costs compared to mechanical mixers and improved product homogeneity.",
        image: "/images/pulse-air/home-card.png",
        folderPath: "pulse-air",
        gallery: [], // Loaded dynamically
        tags: ["Industrial", "Automation", "Installation"],
        safetyStats: [
            { label: "Energy Saving", value: "50%" },
            { label: "Maintenance", value: "Zero" }
        ]
    }
];
