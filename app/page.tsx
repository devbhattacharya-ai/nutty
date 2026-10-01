import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import FAQ from "@/components/FAQ";
import CartPanel from "@/components/CartPanel";

const WHY = [
  {
    title: "Breakfast-first",
    line: "Built around the morning moment — toast, bowls, and a clearer path to the jar.",
  },
  {
    title: "Simple ingredients",
    line: "Concept promise: peanuts you can pronounce. Real brands must verify every claim.",
  },
  {
    title: "Honest demo path",
    line: "Quantity, cart preview, and fake INR labels show the shop flow without payment.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div id="top">
        <Header />
        <CartPanel />

        <main id="main" tabIndex={-1}>
          <Hero />

          <section
            id="story"
            className="section section-story"
            aria-labelledby="story-title"
          >
            <div className="section-inner story-grid">
              <div>
                <p className="section-label">Our Story</p>
                <h2 id="story-title">The breakfast upgrade</h2>
                <p className="section-lead">
                  Nutty is a bright peanut butter identity built around the
                  breakfast moment. The first screen shows the jar, the promise,
                  and a direct path to explore Creamy — without burying the next
                  step.
                </p>
                <p>
                  This self-initiated concept sells the feeling of a healthier,
                  happier morning: creamy texture, honest peanut flavour, and a
                  shop journey you can try in the demo cart.
                </p>
              </div>
              <figure className="story-figure">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/demo-nutty.jpg"
                  width={1200}
                  height={750}
                  alt="Nutty peanut butter website concept preview — yellow hero with jar"
                />
                <figcaption>Desktop preview · original concept colours</figcaption>
              </figure>
            </div>
          </section>

          <Products />

          <section
            id="why"
            className="section section-why"
            aria-labelledby="why-title"
          >
            <div className="section-inner">
              <p className="section-label">Why Nutty</p>
              <h2 id="why-title">Every detail has a job</h2>
              <p className="section-lead">
                Product-led hero, responsive storytelling, and a demo product
                journey — designed so the jar and the next step stay obvious.
              </p>
              <ul className="why-grid">
                {WHY.map((item) => (
                  <li key={item.title} className="why-card">
                    <h3>{item.title}</h3>
                    <p>{item.line}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <FAQ />

          <section
            id="cart"
            className="section concept-band"
            aria-labelledby="concept-title"
          >
            <div className="section-inner concept-inner">
              <p className="section-label">Concept demo</p>
              <h2 id="concept-title">Self-initiated brand concept</h2>
              <p>
                Nutty is a peanut-butter breakfast demo — not a live client
                store. The cart lets you try quantity and checkout messaging;{" "}
                <strong>no payment is collected</strong>, and INR prices are
                clearly labelled as fake concept pricing.
              </p>
              <a href="#products" className="btn-primary">
                Shop now <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-inner">
            <p className="footer-brand">
              <span className="logo-word">NUTTY</span>
              <span className="logo-sub">PEANUT BUTTER</span>
            </p>
            <p className="footer-note">
              Concept demo · English only · Demo cart only — no payment · Not a
              live client site
            </p>
            <nav aria-label="Footer">
              <ul className="footer-links">
                <li>
                  <a href="#story">Our Story</a>
                </li>
                <li>
                  <a href="#products">Products</a>
                </li>
                <li>
                  <a href="#why">Why Nutty</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#cart">Concept</a>
                </li>
                <li>
                  <a href="#top">Top</a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
