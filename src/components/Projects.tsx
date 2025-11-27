'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const projects = [
    {
        title: "Streamify AI",
        description: "A real-time multilingual communication platform enabling chat and video interactions with AI-powered translation and grammar correction.",
        tags: ["Next.js", "WebRTC", "Tailwind CSS", "AI/ML APIs"],
        links: {
            demo: "https://streamify-ai.onrender.com/",
            github: "https://github.com/santhoshkumar555/streamify-video-calls.git"
        },
        image: "/projects/streamify-ai.png"
    },
    {
        title: "MediMeet",
        description: "A full-stack doctor appointment platform with real-time video consultations, built using Next.js, NeonDB, and Vonage.",
        tags: ["Next.js", "NeonDB", "Tailwind CSS", "Vonage", "Shadcn UI"],
        links: {
            demo: "#", // Placeholder
            github: "https://github.com/santhoshkumar555/medimeet"
        },
        image: "/projects/medimeet.png"
    },
    {
        title: "Job Portal",
        description: "A comprehensive job board application facilitating job postings and application management for seekers and employers.",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        links: {
            demo: "#", // Placeholder
            github: "https://github.com/santhoshkumar555/job-portal"
        },
        image: "/projects/job-portal.png"
    },
    {
        title: "E-Commerce Website",
        description: "A complete e-commerce solution built with Wix Studio and Stripe integration for secure payments and smooth checkout flow.",
        tags: ["Wix Studio", "Stripe API", "JavaScript"],
        links: {
            demo: "#", // Placeholder
            github: "#"
        },
        image: "/projects/ecommerce.png"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-slate-400">Showcasing my latest work and innovations</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <SpotlightCard className="glass rounded-2xl overflow-hidden group h-full p-0 border-0">
                                <div className="h-48 w-full relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-medium rounded-full border border-sky-500/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={project.links.github}
                                            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-target"
                                        >
                                            <Github size={18} /> Code
                                        </a>
                                        <a
                                            href={project.links.demo}
                                            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors cursor-target"
                                        >
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
