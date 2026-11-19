import Section from "./Section.jsx";
import { skillGroups } from "../data/site.js";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="What I use across finance, data and the web." wide>
      <div className="skills">
        {skillGroups.map((group) => (
          <div className="skills__group" key={group.title}>
            <h3 className="skills__title">{group.title}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
