'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const experiences = [
    {
        type: 'work',
        role: 'Full Stack Developer',
        company: 'HomeAdda',
        period: 'Sept 2025 – March 2026',
        description: [
            'Architected robust server-side logic using Node.js, PHP, and Python, while seamlessly integrating REST APIs and JWT.',
            'Designed and managed complex database systems using MongoDB and SQL to support comprehensive property search systems.',
            'Bridged legacy technologies like PHP with modern JavaScript frameworks, significantly enhancing security and development workflows.'
        ]
    },
    {
        type: 'work',
        role: 'Intern',
        company: 'HomeAdda',
        period: 'July 2025 – Aug 2025',
        description: [
            'Developed modern, responsive frontend interfaces utilizing React.js, Next.js, and Tailwind CSS.',
            'Streamlined deployment processes via Vercel, Netlify, and FTP, and managed version control through Git.',
            'Conducted rigorous API testing using Postman to ensure stable backend interactions.'
        ]
    },
    {
        type: 'work',
        role: 'Web Development Intern',
        company: 'Zidio Development',
        period: 'Aug 2025 – Nov 2025',
        description: [
            'Assisted in developing and maintaining client-facing web applications.',
            'Improved UI consistency, optimized responsiveness, and enhanced cross-device compatibility.',
            'Performed debugging, manual testing, and documentation of multiple modules.'
        ]
    }
];

const education = [
    {
        degree: 'Master of Computer Applications (MCA)',
        institution: 'Bangalore University, HIMS',
        period: '2023 – 2026',
        score: 'CGPA: 7.70'
    },
    {
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'Bangalore University, SIMS',
        period: '2020 – 2023',
        score: 'CGPA: 8.48'
    }
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <ParticleBackground />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Experience & <span className="text-gradient">Education</span>
                    </h2>
                    <p className="text-slate-400">My academic journey and professional milestones</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="text-sky-400" size={24} />
                            <h3 className="text-2xl font-bold">Experience</h3>
                        </div>

                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative pl-8 border-l-2 border-slate-800"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-sky-500 rounded-full" />
                                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                                    <p className="text-sky-400 font-medium mb-2">{exp.company}</p>
                                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                    <ul className="list-disc list-inside text-slate-400 space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="text-purple-400" size={24} />
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>

                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative pl-8 border-l-2 border-slate-800"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full" />
                                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                                    <p className="text-purple-400 font-medium mb-2">{edu.institution}</p>
                                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                                        <Calendar size={14} />
                                        {edu.period}
                                    </div>
                                    {edu.score && (
                                        <p className="text-slate-400 font-medium">{edu.score}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
