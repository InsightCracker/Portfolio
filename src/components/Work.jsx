import { useState } from "react";
import Section from "./Section.jsx";
import { dataere, projects, clientWork } from "../data/site.js";

const NewTab = () => <span className="sr-only"> (opens in a new tab)</span>;

function Item({ item }) {
  return (
    <li className="proj">
      {item.image ? (
        <div className="frame proj__img">
          <img
            src={item.image.src}
            width={item.image.width}
            height={item.image.height}
            alt={item.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}
      <h4 className="proj__title">{item.title}</h4>
      <p className="proj__stack">{item.tags.join(", ")}</p>
      <p className="proj__text">{item.description}</p>
      {item.result ? <p className="proj__result">{item.result}</p> : null}
      <p className="proj__links">
        {item.repo ? (
          <a className="link" href={item.repo} target="_blank" rel="noopener noreferrer">
            View on GitHub
            <NewTab />
          </a>
        ) : null}
        {item.demo ? (
          <a className="link" href={item.demo} target="_blank" rel="noopener noreferrer">
            View live dashboard
            <NewTab />
          </a>
        ) : null}
        {item.url ? (
          <a className="link" href={item.url} target="_blank" rel="noopener noreferrer">
            Visit site
            <NewTab />
          </a>
        ) : null}
      </p>
    </li>
  );
}

export default function Work() {
  const [filter, setFilter] = useState("all");

  // Client sites only appear once you mark them visible in src/data/site.js.
  const clients = clientWork
    .filter((c) => c.visible)
    .map((c) => ({
      id: c.id,
      title: c.title,
      categories: ["web"],
      image: c.image,
      alt: c.alt,
      tags: c.stack,
      description: [c.summary, c.built].filter(Boolean).join(" "),
      result: c.result,
      url: c.url,
    }));

  const items = [...clients, ...projects];
  const filters = [
    { id: "all", label: "All" },
    { id: "finance", label: "Finance" },
    { id: "data", label: "Data" },
    ...(clients.length ? [{ id: "web", label: "Web" }] : []),
  ];
  const shown = filter === "all" ? items : items.filter((i) => i.categories.includes(filter));

  return (
    <Section id="work" title="Work" intro="A featured build, then analysis and client projects." wide>
      <article className="feature" aria-labelledby="dataere-title">
        <div className="frame feature__img">
          <img
            src={dataere.image.src}
            width={dataere.image.width}
            height={dataere.image.height}
            alt={dataere.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="feature__text">
          <h3 id="dataere-title" className="feature__title">
            {dataere.name}
          </h3>
          <p className="feature__lede">{dataere.summary}</p>
          <ul className="feature__list">
            {dataere.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <dl className="facts">
            {dataere.facts.map((fact) => (
              <div className="facts__row" key={fact.k}>
                <dt>{fact.k}</dt>
                <dd>{fact.v}</dd>
              </div>
            ))}
          </dl>
          <div className="actions">
            <a className="btn btn--solid" href={dataere.live} target="_blank" rel="noopener noreferrer">
              Visit DataEre
              <NewTab />
            </a>
            <a className="btn btn--line" href={dataere.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
              <NewTab />
            </a>
          </div>
        </div>
      </article>

      <h3 className="sub">Projects</h3>
      <div className="filters">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        Showing {shown.length} of {items.length} projects
      </p>
      <ul className="grid">
        {shown.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </Section>
  );
}
