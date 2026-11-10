
import { useState } from "react";
import { site } from "../config/site";

export default function Contact() {
    const [f, setF] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [err, setErr] = useState("");

    const set = (k) => (e) =>
        setF({ ...f, [k]: e.target.value });

    const submit = (e) => {
        e.preventDefault();

        if (
            !f.name.trim() ||
            !/^\S+@\S+\.\S+$/.test(f.email) ||
            f.message.trim().length < 10
        ) {
            setErr(
                "Please enter your name, a valid email and a message (10+ characters)."
            );
            return;
        }

        setErr("");

        const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`;

        window.location.href =
            `mailto:${site.contact.email}?subject=${encodeURIComponent(
                "Portfolio enquiry from " + f.name
            )}&body=${encodeURIComponent(body)}`;
    };

    const socials = Object.entries(site.contact).filter(
        ([k, v]) => k !== "email" && v
    );

    return (
        <section id="contact" className="section two-col">
            <div>
                <h2 className="section-title">
                    Let's work together
                </h2>

                <a
                    className="big accent-link"
                    href={`mailto:${site.contact.email}`}
                >
                    {site.contact.email}
                </a>

                <p className="chips">
                    {socials.map(([k, v]) => (
                        <a
                            key={k}
                            className="chip"
                            href={v}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {k}
                        </a>
                    ))}
                </p>
            </div>

            <form onSubmit={submit} noValidate>
                <label>
                    Name
                    <input
                        value={f.name}
                        onChange={set("name")}
                        autoComplete="name"
                    />
                </label>

                <label>
                    Email
                    <input
                        type="email"
                        value={f.email}
                        onChange={set("email")}
                        autoComplete="email"
                    />
                </label>

                <label>
                    Message
                    <textarea
                        rows="5"
                        value={f.message}
                        onChange={set("message")}
                    />
                </label>

                {err && (
                    <p role="alert" className="error">
                        {err}
                    </p>
                )}

                <button className="btn" type="submit">
                    Send via email app
                </button>
            </form>
        </section>
    );
}
