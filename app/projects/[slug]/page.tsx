import { projects } from "@/lib/projects-data";
import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";
import ProjectDetailClient from "@/components/ProjectDetailClient";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Dynamic Image Loading Logic
    let galleryImages: string[] = [];
    if (project.folderPath) {
        try {
            const imagesDir = path.join(process.cwd(), "public", "images", project.folderPath);

            if (fs.existsSync(imagesDir)) {
                const files = fs.readdirSync(imagesDir);
                // Filter for image files and exclude the home-card if strictly gallery is needed, 
                // but usually showing all including variations is fine. 
                // Let's filter out system files and maybe specific exclusions if needed.
                // Assuming all files in the folder are images for the project.
                galleryImages = files
                    .filter(file => /\.(png|jpg|jpeg|webp)$/i.test(file))
                    .filter(file => !file.includes("home-card")) // Optional: exclude the main card if desired, but I'll include everything else
                    .map(file => `/images/${project.folderPath}/${file}`);
            }
        } catch (error) {
            console.error(`Error loading images for project ${slug}:`, error);
            // Fallback to existing manual gallery if any
            galleryImages = project.gallery || [];
        }
    } else {
        galleryImages = project.gallery || [];
    }

    // Ensure we have at least some images if folder scan fails or is empty, falling back to manual config
    if (galleryImages.length === 0 && project.gallery && project.gallery.length > 0) {
        galleryImages = project.gallery;
    }

    const otherProjects = projects.filter(p => p.slug !== slug);

    return (
        <ProjectDetailClient
            project={project}
            galleryImages={galleryImages}
            otherProjects={otherProjects}
        />
    );
}
