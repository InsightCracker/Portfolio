import { site, socials } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot__inner">
        <p>
          © {site.year} {site.name}.
        </p>
        <ul className="foot__links">
          {socials.map((s) => (
            <li key={s.label}>
              <a className="link" href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
