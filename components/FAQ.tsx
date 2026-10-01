"use client";

import { useId, useState } from "react";

const FAQS = [
  {
    q: "Is this a real store I can buy from?",
    a: "No. Nutty is a self-initiated concept demo. The cart and INR prices are fake labels so you can try the shopping flow — nothing is charged or shipped.",
  },
  {
    q: "What is in Nutty peanut butter?",
    a: "Concept copy only: roasted peanuts and a pinch of salt. A real brand would publish verified ingredients and nutrition facts before selling.",
  },
  {
    q: "Do you ship across India?",
    a: "Not in this demo. There is no warehouse, payment, or fulfilment. Explore the jar and cart as a design concept only.",
  },
  {
    q: "Creamy or Crunchy — which should I try?",
    a: "Creamy for smooth toast and bowls; Crunchy if you want peanut pieces. Both are concept SKUs with labelled fake prices.",
  },
] as const;

export default function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section section-faq" aria-labelledby="faq-title">
      <div className="section-inner">
        <p className="section-label">FAQ</p>
        <h2 id="faq-title">Questions, answered honestly</h2>
        <p className="section-lead">
          Straight answers about this concept demo — no fake claims.
        </p>

        <div className="faq-list">
          {FAQS.map((item, i) => {
            const panelId = `${baseId}-panel-${i}`;
            const btnId = `${baseId}-btn-${i}`;
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`faq-item${isOpen ? " open" : ""}`}
              >
                <h3>
                  <button
                    type="button"
                    id={btnId}
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="faq-panel"
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
