import { site, hero, ledger } from "../data/site.js";

const FIRST_DELAY = 450; // ms before the first ledger entry is posted
const STEP = 260; // ms between entries

export default function Hero() {
  const rows = Math.max(ledger.debit.items.length, ledger.credit.items.length);
  const [first, ...rest] = site.name.split(" ");

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__name">
            <span>{first}</span> <span>{rest.join(" ")}</span>
          </h1>
          <p className="hero__lede">{hero.lede}</p>
          <p className="hero__status">{hero.status}</p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="#work">
              View work
            </a>
            <a className="btn btn--line" href={site.cv} download>
              Download CV
            </a>
            <a className="btn btn--line" href="#contact">
              Work with me
            </a>
          </div>
        </div>

        <figure className="ledger">
          <table className="ledger__table">
            <caption className="sr-only">{ledger.caption}</caption>
            <thead>
              <tr>
                <th scope="col">
                  <span className="ledger__side" aria-hidden="true">
                    {ledger.debit.side}
                  </span>
                  {ledger.debit.title}
                </th>
                <th scope="col">
                  <span className="ledger__side" aria-hidden="true">
                    {ledger.credit.side}
                  </span>
                  {ledger.credit.title}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: rows }, (_, i) => (
                <tr key={i}>
                  <td className="ledger__cell" style={{ "--d": FIRST_DELAY + i * STEP }}>
                    {ledger.debit.items[i]}
                  </td>
                  <td className="ledger__cell" style={{ "--d": FIRST_DELAY + i * STEP + 130 }}>
                    {ledger.credit.items[i]}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan="2"
                  className="ledger__total ledger__cell"
                  style={{ "--d": FIRST_DELAY + rows * STEP + 150 }}
                >
                  {ledger.total}
                </td>
              </tr>
            </tfoot>
          </table>
        </figure>
      </div>
    </section>
  );
}
