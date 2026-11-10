import { useEffect, useState } from "react";
import { Menu, X, Zap, ZapOff } from "lucide-react";
import { site } from "../config/site";

export default function Header({ links, motion, setMotion }) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("");
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) =>
                entries.forEach(
                    (e) => e.isIntersecting && setActive(e.target.id)
                ),
            { rootMargin: "-45% 0px -50% 0px" }
        );

        links.forEach((l) => {
            const el = document.getElementById(l.id);
            if (el) io.observe(el);
        });

        return () => io.disconnect();
    }, [links]);

    return (
        <header className="header">
            <a href="#top" className="wordmark">
                {site.displayName}<span>.</span>
            </a>
            <nav
                className={open ? "nav open" : "nav"}
                aria-label="Main"
            >
                {links.map((l) => (
                    <a
                        key={l.id}
                        href={`#${l.id}`}
                        className={active === l.id ? "active" : ""}
                        onClick={() => setOpen(false)}
                    >
                        {l.label}
                    </a>
                ))}
            </nav>

            <div className="header-actions">
                <button
                    className="icon-btn"
                    onClick={() => setMotion(!motion)}
                    aria-pressed={motion}
                    aria-label="Toggle motion"
                >
                    {motion ? <Zap size={18} /> : <ZapOff size={18} />}
                    <span className="hide-sm">Motion</span>

                </button>
                <a href="#contact" className="btn small hide-sm">
                    Contact
                </a>

                <button
                    className="icon-btn menu-btn"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-label="Menu"
                >

                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
        </header>
    );
}