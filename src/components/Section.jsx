export default function Section({ id, title, intro, wide = false, children }) {
  return (
    <section id={id} className={wide ? "sec sec--wide" : "sec"} aria-labelledby={`${id}-title`}>
      <div className="wrap sec__grid">
        <header className="sec__head">
          <h2 id={`${id}-title`} className="sec__title">
            {title}
          </h2>
          {intro ? <p className="sec__intro">{intro}</p> : null}
        </header>
        <div className="sec__body">{children}</div>
      </div>
    </section>
  );
}
