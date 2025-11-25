'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sky-400 font-medium mb-4 tracking-wide">HELLO, I&apos;M</h2>
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight whitespace-nowrap">
                        <span className="text-gradient">Santhoshkumar G</span>
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-slate-300 mb-8">
                        Full Stack Developer & <br />
                        <span className="text-teal-400">AI Enthusiast</span>
                    </h3>
                    <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                        Building scalable, real-world software solutions with modern web technologies and AI integration.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full font-medium hover:shadow-lg hover:shadow-sky-500/25 transition-all flex items-center gap-2 group"
                        >
                            Contact Me
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/resume.pdf" // Placeholder for resume
                            className="px-8 py-3 glass rounded-full font-medium hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            Download Resume
                            <Download size={18} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 glass flex items-center justify-center bg-slate-900">
                            {/* Placeholder for Profile Image */}
                            <span className="text-6xl">👨‍💻</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
