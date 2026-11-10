import { site } from "../config/site";
export default function Footer() {
    return (
        <footer className="footer">
            <span>
                © {new Date().getFullYear()} {site.fullName}
            </span>

            <a href="#top">Back to top ↑</a>
        </footer>
    );
}