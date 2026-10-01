"use client";

import { useState } from "react";
import { PRODUCTS, formatInr, type Product } from "@/lib/products";
import { useCart } from "./CartProvider";

function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <article className="product-card">
      <div className="product-card-top">
        <span className="product-badge">{product.variant}</span>
        <span className="product-size">{product.size}</span>
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-blurb">{product.blurb}</p>
      <ul className="product-tags">
        {product.badges.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p className="product-price">
        {formatInr(product.priceInr)}{" "}
        <span className="price-fake">fake concept price</span>
      </p>
      <div className="product-actions">
        <div className="qty-control" role="group" aria-label={`Quantity for ${product.name}`}>
          <button
            type="button"
            aria-label={`Decrease quantity of ${product.name}`}
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <span aria-live="polite">{qty}</span>
          <button
            type="button"
            aria-label={`Increase quantity of ${product.name}`}
            onClick={() => setQty((q) => q + 1)}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="btn-add"
          onClick={() => {
            add(product, qty);
            setQty(1);
          }}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section
      id="products"
      className="section section-products"
      aria-labelledby="products-title"
    >
      <div className="section-inner">
        <p className="section-label">Products</p>
        <h2 id="products-title">Pick your jar</h2>
        <p className="section-lead">
          Concept SKUs with quantity controls and a demo cart. Prices are fake
          INR labels — no payment.
        </p>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
