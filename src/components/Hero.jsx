
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, ArrowDown, Sparkles } from "lucide-react";
import { site } from "../config/site";

const ease = [0.22, 1, 0.36, 1];

export default function Hero({ hasWork, motionOn }) {
    const { scrollY } = useScroll();
    const parallax = useTransform(scrollY, [0, 600], [0, 45]);

    return (
        <section id="top" className="hero">
            <div className="hero-topline">
                <div>
                    <span>{site.profession}</span>
                    <p>{site.roleLine2}</p>
                </div>

                <span className="availability">
                    <i aria-hidden="true" />
                    {site.availability}
                </span>
            </div>

            <div className="hero-layout">
                <div className="hero-bg-word" aria-hidden="true">
                    P O R T F O L I O
                </div>

                <motion.div
                    className="hero-left"
                    initial={{ opacity: 0, x: -35 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease }}
                >
                    <p className="hero-greeting">Hello, I'm</p>

                    <h1 className="hero-name">{site.fullName}.</h1>

                    <h2>{site.profession}</h2>

                    <p className="hero-description">{site.intro}</p>

                    {hasWork && (
                        <a href="#work" className="hero-work-btn">
                            See my work
                            <ArrowDown size={18} />
                        </a>
                    )}

                    <p className="hero-location">
                        <MapPin size={14} aria-hidden="true" />
                        {site.location}
                    </p>
                </motion.div>

                {site.portrait && (
                    <motion.div
                        className="hero-portrait-area"
                        style={motionOn ? { y: parallax } : undefined}
                    >
                        <motion.img
                            className="hero-portrait"
                            src={site.portrait}
                            alt={`Portrait of ${site.fullName}`}
                            fetchPriority="high"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease, delay: 0.2 }}
                        />
                    </motion.div>
                )}

                <motion.aside
                    className="hero-right"
                    aria-label="Professional highlights"
                    initial={{ opacity: 0, x: 35 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease }}
                >
                    <div className="hero-purpose">
                        <Sparkles size={25} aria-hidden="true" />
                        <p>
                            Every project.
                            <br />
                            A purpose.
                        </p>
                    </div>

                    <div className="hero-stat">
                        <strong>8.84</strong>
                        <span>CGPA<br />OUT OF 10</span>
                    </div>

                    <div className="hero-stat">
                        <strong>03+</strong>
                        <span>DEVELOPMENT<br />PROJECTS</span>
                    </div>

                    <div className="hero-stat">
                        <strong>02</strong>
                        <span>INTERNSHIPS<br />COMPLETED</span>
                    </div>
                </motion.aside>
            </div>
        </section>
    );
}
