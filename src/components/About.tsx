'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-4xl mx-auto">
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
                            I am a motivated <span className="text-sky-400 font-medium">MCA student</span> with hands-on experience in full-stack development, AI-driven applications, and modern web technologies.
                            My journey in tech is driven by a passion for building scalable, real-world software solutions.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            With a strong foundation in <span className="text-purple-400 font-medium">C++ and Java</span>, and expertise in the <span className="text-teal-400 font-medium">MERN stack and Next.js</span>,
                            I thrive in solving complex logical problems. I pride myself on my adaptability and academic excellence, including scoring a centum in C++ and earning the title &quot;Coding Maestro&quot;.
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
