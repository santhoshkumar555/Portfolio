'use client';

import { motion } from 'framer-motion';
import GlareHover from './GlareHover';

const skillCategories = [
    {
        title: "Programming",
        skills: ["C++", "Java", "JavaScript", "TypeScript"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Web Technologies",
        skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Database",
        skills: ["MongoDB", "MySQL"],
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "APIs & Tools",
        skills: ["Stripe API", "WebRTC", "Git", "Wix Studio", "GNews API"],
        color: "from-orange-500 to-red-500"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-slate-400">My technical toolkit and areas of expertise</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlareHover
                                width="100%"
                                height="100%"
                                borderRadius="0.75rem" // rounded-xl
                                background="rgba(255, 255, 255, 0.03)"
                                borderColor="rgba(255, 255, 255, 0.1)"
                                glareOpacity={0.3}
                                className="glass"
                            >
                                <div className="p-6 w-full h-full flex flex-col items-start">
                                    <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-white/5 rounded-full text-sm text-slate-300 border border-white/10"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </GlareHover>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
