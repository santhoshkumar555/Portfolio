'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Streamify AI",
        description: "A real-time multilingual communication platform enabling chat and video interactions with AI-powered translation and grammar correction.",
        tags: ["Next.js", "WebRTC", "Tailwind CSS", "AI/ML APIs"],
        links: {
            demo: "https://streamify-ai.onrender.com/", // Placeholder
            github: "https://github.com/santhoshkumar555/streamify-video-calls.git" // Placeholder
        },
        image: "bg-gradient-to-br from-indigo-500 to-purple-600" // Placeholder gradient
    },
    {
        title: "E-Commerce Website",
        description: "A complete e-commerce solution built with Wix Studio and Stripe integration for secure payments and smooth checkout flow.",
        tags: ["Wix Studio", "Stripe API", "JavaScript"],
        links: {
            demo: "#", // Placeholder
            github: "#" // Placeholder
        },
        image: "bg-gradient-to-br from-emerald-500 to-teal-600" // Placeholder gradient
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
                            className="glass rounded-2xl overflow-hidden group"
                        >
                            {/* Project Image Placeholder */}
                            <div className={`h-48 w-full ${project.image} relative group-hover:scale-105 transition-transform duration-500`}>
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
                                        className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                                    >
                                        <Github size={18} /> Code
                                    </a>
                                    <a
                                        href={project.links.demo}
                                        className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
