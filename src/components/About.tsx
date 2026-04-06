'use client';
import ParticleBackground from './ParticleBackground';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-4xl mx-auto">
                <ParticleBackground />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        About <span className="text-gradient">Me</span>
                    </h2>

                    <div className="glass p-8 md:p-12 rounded-2xl">
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            I am a motivated <span className="text-sky-400 font-medium">Full-Stack Developer</span> with a newly completed Master of Computer Applications. With proven expertise in modern web technologies, AI-driven applications, and architecting scalable real estate platforms, my journey in tech is driven by a passion for building scalable, real-world software solutions.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            Highly skilled in the <span className="text-purple-400 font-medium">MERN stack, Next.js, and PHP</span>, I excel at bridging legacy systems with modern architectures to streamline deployments. I am known for strong logical thinking, adaptability, and a commitment to high-quality code and platform security, alongside academic achievements such as a centum in C++ and the title &quot;Coding Maestro&quot;.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Currently, I am exploring the intersection of web development and AI, working on projects like <span className="text-white font-medium">Streamify AI</span> to break language barriers in communication.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
