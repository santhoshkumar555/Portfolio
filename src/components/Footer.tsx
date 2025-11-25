import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gradient mb-2">Santhoshkumar G</h3>
                    <p className="text-slate-400 text-sm">
                        Building scalable, real-world software solutions.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a
                        href="https://github.com/santhoshkumar555"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/santhosh-kumar-g-415927370"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:santhoshkumar.g9845@gmail.com"
                        className="text-slate-400 hover:text-red-400 transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                    <a
                        href="tel:9353864326"
                        className="text-slate-400 hover:text-green-400 transition-colors"
                    >
                        <Phone size={20} />
                    </a>
                </div>

                <div className="text-slate-400 text-xs">
                    © {new Date().getFullYear()} Santhoshkumar G. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
