import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import SectionReveal from '@/components/SectionReveal';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionReveal>
        <Skills />
      </SectionReveal>
      <SectionReveal>
        <Projects />
      </SectionReveal>
      <SectionReveal>
        <Experience />
      </SectionReveal>
      <SectionReveal>
        <Contact />
      </SectionReveal>
    </div>
  );
}
