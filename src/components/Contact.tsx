'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { submitContactForm } from '@/actions/contact';
import ParticleBackground from './ParticleBackground';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setMessage(null);

        try {
            const result = await submitContactForm(formData);

            if (result.error) {
                setMessage({ type: 'error', text: result.error });
            } else if (result.success) {
                setMessage({ type: 'success', text: result.success });
                // Optional: Reset form here if needed, but native form reset is tricky with controlled inputs unless we switch to uncontrolled or use a ref.
                // For simplicity, we'll just show the success message.
                (document.getElementById('contact-form') as HTMLFormElement)?.reset();
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10" />
            <ParticleBackground />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-slate-400">Have a project in mind or want to collaborate?</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Let&apos;s Talk</h3>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            I&apos;m currently open to internships, full-time opportunities, and collaborative software projects.
                            Feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Email</p>
                                    <a href="mailto:santhoshkumar.g9845@gmail.com" className="text-white hover:text-sky-400 transition-colors cursor-target">
                                        santhoshkumar.g9845@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Phone</p>
                                    <a href="tel:9353864326" className="text-white hover:text-purple-400 transition-colors cursor-target">
                                        +91 9353864326
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Location</p>
                                    <p className="text-white">Bengaluru, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass p-8 rounded-2xl"
                    >
                        <form id="contact-form" action={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                                <input
                                    name="subject"
                                    type="text"
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                                    placeholder="Your message here..."
                                />
                            </div>

                            {message && (
                                <div className={`p-4 rounded-lg flex items-center gap-2 text-sm ${message.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                                    }`}>
                                    {message.type === 'success' ? <CheckCircle2 size={18} /> : null}
                                    {message.text}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium py-3 rounded-lg hover:shadow-lg hover:shadow-sky-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-target"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
