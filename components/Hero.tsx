import JarVisual from "./JarVisual";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">The breakfast upgrade</p>
          <h1 id="hero-heading">GOOD DAYS START NUTTY</h1>
          <p className="hero-support">
            <strong>Creamy. Nutritious. Naturally Delicious.</strong> Real
            peanuts. Real nutrition. A healthier breakfast for brighter days.
          </p>
          <a className="btn-primary" href="#products">
            Shop now <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-visual">
          <JarVisual />
        </div>
      </div>
    </section>
  );
}
