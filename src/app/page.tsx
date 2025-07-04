
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import {AboutSection} from '@/components/AboutSection';
import {ProjectsSection} from '@/components/ProjectsSection';
import {ContactSection} from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="p-8 space-y-16">
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
