import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <footer className="py-8 px-6 border-t border-white/5 text-center">
        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} Avinesh Harikrishnan. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
