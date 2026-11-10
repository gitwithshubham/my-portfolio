
import { site } from "../config/site";

export default function About() {
    return (
        <section id="about" className="section two-col">
            <div>
                <h2 className="section-title">About</h2>
                <p className="big">{site.about}</p>
            </div>

            <div>
                {site.skillGroups.map((g) => (
                    <div key={g.title}>
                        <h3>{g.title}</h3>

                        <p className="chips">
                            {g.items.map((s) => (
                                <span key={s} className="chip on">
                                    {s}
                                </span>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
