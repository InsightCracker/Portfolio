import { useEffect, useState } from "react";
import { site, nav } from "../data/site.js";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the link for the section currently in view.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a className="nav__brand" href="#top" onClick={close}>
          {site.name}
        </a>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={open ? "nav__links is-open" : "nav__links"} aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
          <a className="btn btn--line btn--sm" href={site.cv} download onClick={close}>
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
