'use client';

import { motion } from 'framer-motion';
import GlareHover from './GlareHover';
import {
    SiCplusplus, SiJavascript, SiTypescript,
    SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss,
    SiMongodb, SiMysql,
    SiStripe, SiWebrtc, SiGit, SiWix
} from 'react-icons/si';
import { FaJava, FaNewspaper } from 'react-icons/fa';

const skillCategories = [
    {
        title: "Programming",
        skills: [
            { name: "C++", icon: SiCplusplus },
            { name: "Java", icon: FaJava },
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript }
        ],
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Web Technologies",
        skills: [
            { name: "React.js", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "Tailwind CSS", icon: SiTailwindcss }
        ],
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Database",
        skills: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "MySQL", icon: SiMysql }
        ],
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "APIs & Tools",
        skills: [
            { name: "Stripe API", icon: SiStripe },
            { name: "WebRTC", icon: SiWebrtc },
            { name: "Git", icon: SiGit },
            { name: "Wix Studio", icon: SiWix },
            { name: "GNews API", icon: FaNewspaper }
        ],
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
                                    <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {category.skills.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg text-sm text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
                                            >
                                                <skill.icon size={16} className={`text-${category.color.split('-')[1]}-400`} />
                                                <span>{skill.name}</span>
                                            </div>
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
