import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { EasterEgg } from "@/components/EasterEgg";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { AIUsage } from "@/components/AIUsage";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <EasterEgg />
        <Experience />
        <Skills />
        <Projects />
        <AIUsage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
