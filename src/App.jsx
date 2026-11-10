import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { site } from "./config/site";
import { projects } from "./data/projects";

import {
  experience,
  education,
  certifications,
} from "./data/experience";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [motion, setMotion] = useState(() => {
    try {
      const saved = localStorage.getItem(site.storageKey);
      if (saved !== null) return saved === "on";
    } catch { }
    return !window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        site.storageKey,
        motion ? "on" : "off"
      );
    } catch { }
  }, [motion]);

  const hasWork = projects.length > 0;
  const hasExp =
    experience.length +
    education.length +
    certifications.length >
    0;

  const links = [
    hasWork && { id: "work", label: "Work" },
    { id: "about", label: "About" },
    hasExp && { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ].filter(Boolean);

  return (
    <MotionConfig reducedMotion={motion ? "user" : "always"}>
      <Header
        links={links}
        motion={motion}
        setMotion={setMotion}
      />

      <main>
        <Hero hasWork={hasWork} motionOn={motion} />
        {hasWork && <ProjectGrid />}
        <About />
        {hasExp && <Experience />}
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
