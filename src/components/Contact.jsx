import { useState } from "react";
import Section from "./Section.jsx";
import { site, socials, services } from "../data/site.js";

const linkedin = socials.find((s) => s.label === "LinkedIn");

export default function Contact({ service, onServiceChange }) {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "sending", message: "Sending your message." });
    try {
      // Netlify Forms picks up this POST because the form is in the built HTML.
      const body = new URLSearchParams(new FormData(form)).toString();
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!response.ok) throw new Error(`Status ${response.status}`);
      form.reset();
      onServiceChange("");
      setStatus({ state: "success", message: "Message sent. I'll reply to you by email." });
    } catch {
      setStatus({
        state: "error",
        message: `The message didn't send. Email ${site.email} instead.`,
      });
    }
  }

  return (
    <Section id="contact" title="Contact" intro="Open to full-time roles and freelance projects.">
      <div className="contact__block">
        <h3 className="sub">Hiring for a role?</h3>
        <p className="prose">Download my CV or message me on LinkedIn.</p>
        <div className="actions">
          <a className="btn btn--solid" href={site.cv} download>
            Download CV
          </a>
          <a className="btn btn--line" href={linkedin.href} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <div className="contact__block">
        <h3 className="sub">Have a project?</h3>
        <p className="prose">
          Pick a topic and tell me what you need. I reply by email.
        </p>
        <form
          className="form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Leave this empty
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <div className="form__row">
            <div className="field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" autoComplete="email" required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="c-topic">Topic</label>
            <select
              id="c-topic"
              name="topic"
              value={service}
              onChange={(event) => onServiceChange(event.target.value)}
              required
            >
              <option value="" disabled>
                Choose a topic
              </option>
              {services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Something else">Something else</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message" rows="6" required />
          </div>

          <div className="form__foot">
            <button className="btn btn--solid" type="submit" disabled={status.state === "sending"}>
              Send message
            </button>
            <p className="form__status" role="status" data-state={status.state}>
              {status.message}
            </p>
          </div>
        </form>
      </div>

      <dl className="facts contact__direct">
        <div className="facts__row">
          <dt>Email</dt>
          <dd>
            <a className="link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </dd>
        </div>
        <div className="facts__row">
          <dt>Phone</dt>
          <dd>
            <a className="link" href={site.phoneHref}>
              {site.phone}
            </a>
          </dd>
        </div>
        <div className="facts__row">
          <dt>WhatsApp</dt>
          <dd>
            <a className="link" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
              Send a message
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </dd>
        </div>
        <div className="facts__row">
          <dt>Location</dt>
          <dd>{site.location}</dd>
        </div>
      </dl>
    </Section>
  );
}
