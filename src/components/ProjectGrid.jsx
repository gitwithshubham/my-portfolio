import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { projects } from "../data/projects";
import ProjectDialog from "./ProjectDialog";

const PAGE = 6;
export default function ProjectGrid() {
    const [cat, setCat] = useState("All");
    const [q, setQ] = useState("");
    const [shown, setShown] = useState(PAGE);
    const [selected, setSelected] = useState(null);
    const cats = [
        "All",
        ...new Set(projects.map((p) => p.category).filter(Boolean)),
    ];

    const list = projects
        .filter(
            (p) =>
                (cat === "All" || p.category === cat) &&
                `${p.title} ${p.summary} ${p.tools.join(" ")}`
                    .toLowerCase()
                    .includes(q.toLowerCase())
        )
        .sort((a, b) => Number(b.featured) - Number(a.featured));
    return (
        <section id="work" className="section">
            <h2 className="section-title">Selected Work</h2>
            <div className="toolbar">
                <div className="filters" role="group" aria-label="Filter by category">
                    {cats.map((c) => (
                        <button
                            key={c}
                            className={cat === c ? "chip on" : "chip"}
                            onClick={() => {
                                setCat(c);
                                setShown(PAGE);
                            }}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                <label className="search">
                    <Search size={16} />
                    <input
                        type="search"
                        placeholder="Search projects"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        aria-label="Search projects"
                    />
                </label>

            </div>
            {list.length === 0 ? (
                <p className="muted">
                    No projects match your search.
                </p>
            ) : (
                <div className="grid">
                    {list.slice(0, shown).map((p, i) => (
                        <motion.button
                            key={p.id}
                            className="card"
                            onClick={() => setSelected(p)}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                                delay: (i % 3) * 0.08,
                            }}
                        >
                            {p.coverImage ? (
                                <img
                                    src={p.coverImage}
                                    alt={p.title}
                                    loading="lazy"
                                    width="640"
                                    height="400"
                                />
                            ) : (
                                <div className="ph">
                                    {p.title[0]}
                                </div>
                            )}

                            <div className="card-body">
                                <span className="tag">
                                    {p.category}
                                    {p.year && ` · ${p.year}`}
                                </span>
                                <h3>{p.title}</h3>
                                <p>{p.summary}</p>
                            </div>

                        </motion.button>
                    ))}
                </div>
            )}

            {shown < list.length && (
                <button
                    className="btn ghost center"
                    onClick={() => setShown(shown + PAGE)}
                >
                    Load more
                </button>
            )}

            <AnimatePresence>
                {selected && (
                    <ProjectDialog
                        project={selected}
                        onClose={() => setSelected(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

