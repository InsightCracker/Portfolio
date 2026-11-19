import Section from "./Section.jsx";
import { about, background } from "../data/site.js";

export default function About() {
  const timeline = background.filter((entry) => entry.visible);

  return (
    <Section id="about" title="About">
      <p className="lead">{about.lead}</p>
      {about.body.map((paragraph) => (
        <p className="prose" key={paragraph}>
          {paragraph}
        </p>
      ))}

      <h3 className="sub">Background</h3>
      <ol className="timeline">
        {timeline.map((entry) => (
          <li className="timeline__item" key={`${entry.period}-${entry.title}`}>
            <span className="timeline__when">{entry.period}</span>
            <div>
              <p className="timeline__title">{entry.title}</p>
              <p className="timeline__org">{entry.org}</p>
              {entry.note ? <p className="timeline__note">{entry.note}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
