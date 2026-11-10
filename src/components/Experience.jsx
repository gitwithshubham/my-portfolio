
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
    experience,
    education,
    certifications,
} from "../data/experience";

function Timeline({ title, items }) {
    const [open, setOpen] = useState(null);

    if (!items.length) return null;

    return (
        <div>
            <h3>{title}</h3>

            {items.map((it) => (
                <div key={it.id} className="tl-item">
                    <button
                        className="tl-head"
                        aria-expanded={open === it.id}
                        onClick={() =>
                            setOpen(open === it.id ? null : it.id)
                        }
                    >
                        <span>
                            <strong>{it.role}</strong> · {it.org}
                            <br />
                            <small className="muted">{it.period}</small>
                        </span>

                        <ChevronDown
                            size={18}
                            style={{
                                transform:
                                    open === it.id ? "rotate(180deg)" : "none",
                            }}
                        />
                    </button>

                    {open === it.id && it.details && (
                        <p className="tl-body">{it.details}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="section two-col">
            <Timeline title="Experience" items={experience} />

            <Timeline title="Education" items={education} />

            {certifications.length > 0 && (
                <div className="full">
                    <h3>Certifications</h3>

                    <ul className="certs">
                        {certifications.map((c) => (
                            <li key={c.id} className="cert-card">
                                <span className="tag">{c.issuer}</span>
                                <br />
                                {c.title}

                                {c.pdf && (
                                    <a
                                        href={c.pdf}
                                        className="cert-visit"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visit Certificate ↗
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}
