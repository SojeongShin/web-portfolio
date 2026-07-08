import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white dark:bg-zinc-950">
      <Header />
      <main className="flex-1">
        <Hero />
        <Research />
        <Publications />
        <Projects />
        <Experience />
        <Skills />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
