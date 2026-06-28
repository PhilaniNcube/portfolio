import Hero from '../components/Hero';
import About from '../components/About';
import CaseStudy from '../components/CaseStudy';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <CaseStudy />
      <Contact />
    </main>
  );
}