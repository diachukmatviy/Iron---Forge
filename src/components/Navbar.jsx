import { useState, useEffect } from "react";
import s from "./Navbar.module.css";

const NAV_LINKS = ["Programs", "Trainers", "Pricing", "FAQ"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`${s.navbar} ${scrolled ? s.scrolled : ""}`}>
      <div className={s.inner}>
        <a href="#" className={s.logo}>
          IRON FORGE
        </a>

        <div className={s.desktopNav}>
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={s.navLink}>
              {link}
            </a>
          ))}
          <a href="#pricing" className={s.navCta}>
            Start Free
          </a>
        </div>

        <button className={s.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className={`${s.mobileMenu} ${menuOpen ? s.open : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={s.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <a
          href="#pricing"
          className={s.mobileCta}
          onClick={() => setMenuOpen(false)}
        >
          Start Free Trial
        </a>
      </div>
    </nav>
  );
}
