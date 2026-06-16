"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Mail, ChevronRight, Terminal, Database, PenTool, Award, Home as HomeIcon, User, Briefcase } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.9 5.9 0 0 0 19 5.5a5.9 5.9 0 0 0-.2-3.5s-1.5-.5-5 1.5a14.1 14.1 0 0 0-9 0c-3.5-2-5-1.5-5-1.5a5.9 5.9 0 0 0-.2 3.5 5.9 5.9 0 0 0-1.5 2.3c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 3 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
import ProjectCard from "@/components/ProjectCard";
import { projects, skills, certificates } from "@/data/mockData";

export default function Home() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], footer[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* Floating Left Sidebar Navigation */}
      <nav className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-6 py-8 px-4 bg-zinc-900/40 backdrop-blur-xl border border-zinc-700/50 rounded-full z-50 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <a href="#home" className={`p-3 rounded-full transition-all group relative ${activeSection === 'home' ? 'text-orange-400 bg-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'text-zinc-400 hover:text-orange-400 hover:bg-orange-500/10'}`}>
          <HomeIcon size={24} />
          <span className="absolute left-full ml-4 px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
            Home
          </span>
        </a>
        <a href="#about" className={`p-3 rounded-full transition-all group relative ${activeSection === 'about' ? 'text-orange-400 bg-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'text-zinc-400 hover:text-orange-400 hover:bg-orange-500/10'}`}>
          <User size={24} />
          <span className="absolute left-full ml-4 px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
            About Me
          </span>
        </a>
        <a href="#projects" className={`p-3 rounded-full transition-all group relative ${activeSection === 'projects' ? 'text-orange-400 bg-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'text-zinc-400 hover:text-orange-400 hover:bg-orange-500/10'}`}>
          <Briefcase size={24} />
          <span className="absolute left-full ml-4 px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
            Projects
          </span>
        </a>
        <a href="#certificates" className={`p-3 rounded-full transition-all group relative ${activeSection === 'certificates' ? 'text-orange-400 bg-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'text-zinc-400 hover:text-orange-400 hover:bg-orange-500/10'}`}>
          <Award size={24} />
          <span className="absolute left-full ml-4 px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
            Certificates
          </span>
        </a>
        <a href="#contact" className={`p-3 rounded-full transition-all group relative ${activeSection === 'contact' ? 'text-orange-400 bg-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'text-zinc-400 hover:text-orange-400 hover:bg-orange-500/10'}`}>
          <Mail size={24} />
          <span className="absolute left-full ml-4 px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
            Contact
          </span>
        </a>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-32 lg:pl-32">

        {/* Hero Section */}
        <motion.section
          id="home"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-12 min-h-[80vh] justify-center pt-12 md:pt-24 mb-20"
        >
          {/* Left side: Browser Image */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 shrink-0">
            <div className="bg-zinc-800/80 rounded-2xl border border-zinc-700/50 overflow-hidden shadow-2xl relative">
              {/* Browser Header */}
              <div className="h-10 bg-zinc-900/80 flex items-center px-4 gap-2 border-b border-zinc-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              {/* Image Container */}
              <div className="relative w-full aspect-[4/4] sm:aspect-[4/3] bg-zinc-800">
                <Image src="/profile1.jpg" alt="Cheeraphan Ajohnsingha" fill className="object-cover object-top" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-base md:text-lg text-zinc-300 mb-8 bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50 w-full text-left">
              <p><strong className="text-orange-300">Age:</strong> 28 Years Old</p>
              <p><strong className="text-orange-300">University:</strong> Mahanakorn University of Technology</p>
              <p><strong className="text-orange-300">Faculty:</strong> Engineering and Technology</p>
              <p><strong className="text-orange-300">Major:</strong> Computer Engineering & AI</p>
            </div>


          </motion.div>

          {/* Right side: Text Content */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

            <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-900/80 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6">
              Available for new opportunities
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 drop-shadow-md mb-2">
              Cheeraphan <br className="hidden lg:block" />Ajohnsingha
            </h1>
            <hr />
            <p className="text-orange-200 font-semibold italic mt-2 text-xl md:text-2xl tracking-wide mb-6">
              &quot;Never let go of your dreams&quot;
            </p>

            <hr />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Bridging <span className="text-orange-400">Engineering</span>, Data, & Design.
            </h2>

            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Accelerated 2.5-year Computer Engineering graduate with a specialization in Data Science, crafting precise logical solutions with a creative edge.
            </p>



            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <a href="#projects" className="bg-orange-500 text-zinc-950 hover:bg-orange-400 px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-colors text-lg">
                View Projects
                <ChevronRight size={20} />
              </a>
              <a href="#contact" className="bg-zinc-900/50 text-orange-300 border border-orange-500/30 hover:border-orange-500 hover:text-orange-400 px-8 py-4 rounded-lg font-bold transition-colors text-lg backdrop-blur-sm">
                Contact Me
              </a>
            </div>

          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Terminal className="text-indigo-400" />
              My Journey
            </h3>
            <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
              <p>
                My path into tech wasn&apos;t conventional. Starting in an Arts-Language high school track, I developed an eye for aesthetics and communication.
              </p>
              <p>
                I transitioned to a vocational certificate in Business Computer, discovering my knack for systems and logic, which ultimately drove me to conquer a rigorous, accelerated 2.5-year Computer Engineering degree.
              </p>
              <p>
                This diverse background makes me highly adaptable. I don&apos;t just write code; I design systems with the end-user in mind, leveraging data to drive decisions and creativity to build engaging experiences.
              </p>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-6 border-b border-zinc-800 pb-4">Core Competencies</h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="flex items-center gap-2 font-medium"><Terminal size={16} className="text-indigo-400" /> Development</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.development.map(skill => (
                    <span key={skill} className="bg-zinc-800 px-3 py-1 rounded-md text-sm border border-zinc-700">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="flex items-center gap-2 font-medium"><Database size={16} className="text-emerald-400" /> Data & Backend</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.dataBackend.map(skill => (
                    <span key={skill} className="bg-zinc-800 px-3 py-1 rounded-md text-sm border border-zinc-700">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="flex items-center gap-2 font-medium"><PenTool size={16} className="text-pink-400" /> Design</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map(skill => (
                    <span key={skill} className="bg-zinc-800 px-3 py-1 rounded-md text-sm border border-zinc-700">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
            <p className="text-zinc-400 text-lg">A selection of my recent engineering, data, and design projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </motion.section>

        {/* Certificates Section */}
        <motion.section
          id="certificates"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="pt-12"
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Award className="text-yellow-400" size={32} />
              Licenses & Certifications
            </h2>
            <p className="text-zinc-400 text-lg">Continuous learning and professional development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group flex flex-col bg-zinc-900/50 border border-zinc-800 hover:border-yellow-500/50 rounded-2xl transition-all hover:shadow-[0_0_30px_-10px_rgba(250,204,21,0.2)] overflow-hidden hover:-translate-y-1"
              >
                <div
                  className="relative w-full aspect-[4/3] bg-zinc-800 border-b border-zinc-800 overflow-hidden cursor-zoom-in group/image"
                  onClick={() => cert.image && setSelectedCert(cert.image)}
                >
                  {/* @ts-ignore */}
                  {cert.image ? <Image src={cert.image} alt={cert.title} fill className="object-cover transition-transform duration-500 group-hover/image:scale-110" /> : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent pointer-events-none"></div>
                </div>
                <div className="relative z-10 p-6 flex flex-col flex-grow">
                  <div className="absolute top-4 right-4 text-yellow-500 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Award size={24} />
                  </div>
                  <div className="text-sm text-yellow-500 font-bold tracking-wider uppercase mb-2">{cert.issuer}</div>
                  <h3 className="text-xl font-bold mb-2 text-zinc-100 group-hover:text-yellow-400 transition-colors">{cert.title}</h3>
                  <p className="text-zinc-400 mb-6 text-sm leading-relaxed">{cert.description}</p>
                  <div className="text-sm text-zinc-500 flex items-center gap-2 mt-auto">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(250,204,21,0.8)]"></div>
                    {cert.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact & Footer */}
        <motion.footer
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-zinc-800 pt-16 pb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-2">Let&apos;s build together.</h2>
              <p className="text-zinc-400">Open for opportunities and collaborations.</p>
            </div>

            <div className="flex items-center gap-4">
              <a href="mailto:cheerapan.97@hotmail.com" className="p-3 bg-zinc-900 border border-zinc-800 hover:border-orange-500 hover:text-orange-400 rounded-full transition-all hover:-translate-y-1">
                <Mail size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 hover:border-orange-500 hover:text-orange-400 rounded-full transition-all hover:-translate-y-1">
                <GithubIcon size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 hover:border-orange-500 hover:text-orange-400 rounded-full transition-all hover:-translate-y-1">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>

          <div className="text-center text-zinc-600 text-sm">
            <p>© {new Date().getFullYear()} Developer Portfolio. Built with Next.js & Tailwind CSS.</p>
          </div>
        </motion.footer>

      </main >

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-[80vh] bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedCert} alt="Certificate Full View" fill className="object-contain" />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors z-10"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
