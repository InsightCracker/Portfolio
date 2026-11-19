import Section from "./Section.jsx";
import { services, site } from "../data/site.js";

export default function Services({ onSelect }) {
  return (
    <Section
      id="services"
      title="Services"
      intro={`Ways I can help, under the ${site.brand} name.`}
      wide
    >
      <ul className="svc-list">
        {services.map((service) => (
          <li className="svc" key={service.title}>
            <div className="svc__main">
              <h3 className="svc__title">{service.title}</h3>
              <p className="svc__for">{service.for}</p>
            </div>
            <ul className="svc__gets">
              {service.gets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className="btn btn--line svc__cta"
              href="#contact"
              aria-label={`Ask about this: ${service.title}`}
              onClick={() => onSelect(service.title)}
            >
              Ask about this
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
