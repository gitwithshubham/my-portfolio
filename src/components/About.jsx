
import { site } from "../config/site";

export default function About() {
    const highlights = [
        {
            title: "Education",
            description: "B.Tech in Computer Science Engineering at S'O'A University (ITER), Bhubaneswar."
        },
        {
            title: "Full-Stack Development",
            description: "Built projects including a Credit Risk Analytics Dashboard, URL Shortener and AI-assisted Expense Tracker."
        },
        {
            title: "AI & Cloud Computing",
            description: "Completed an internship through Edunet Foundation and IBM SkillsBuild."
        },
        {
            title: "Data Analytics",
            description: "Completed Data Analytics internship through VOIS and Edunet Foundation."
        }
    ];

    return (
        <section id="about" className="section two-col about-section">

            <div className="about-intro">
                <h2 className="section-title">About</h2>

                <p className="big">{site.about}</p>

                <div className="about-highlights">
                    <h3>Professional Highlights</h3>

                    <div className="about-highlight-grid">
                        {highlights.map((item) => (
                            <div className="about-highlight" key={item.title}>
                                <span>{item.title}</span>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="about-skills">
                {site.skillGroups.map((g) => (
                    <div className="about-skill-group" key={g.title}>
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
