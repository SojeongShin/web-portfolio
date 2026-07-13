import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Awards from "@/components/Awards";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white dark:bg-zinc-950">
      <Header />
      <main className="flex-1">
        <Hero />
        <Research />
        <Awards />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
