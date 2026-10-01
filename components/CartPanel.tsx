"use client";

import { useEffect, useId, useRef, useState } from "react";
import { formatInr } from "@/lib/products";
import { useCart } from "./CartProvider";

export default function CartPanel() {
  const {
    lines,
    open,
    setOpen,
    remove,
    setQty,
    clear,
    count,
    subtotal,
    liveMessage,
  } = useCart();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [checkoutMsg, setCheckoutMsg] = useState(false);

  useEffect(() => {
    if (!open) {
      setCheckoutMsg(false);
      return;
    }
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, setOpen]);

  useEffect(() => {
    if (!open || !panelRef.current) return;
    const root = panelRef.current;
    function trap(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const focusables = root.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    root.addEventListener("keydown", trap);
    return () => root.removeEventListener("keydown", trap);
  }, [open, lines, checkoutMsg]);

  return (
    <>
      <div className="sr-only cart-success-pulse" role="status" aria-live="polite" aria-atomic="true">
        {liveMessage}
      </div>

      {open ? (
        <div className="cart-overlay" role="presentation">
          <button
            type="button"
            className="cart-backdrop"
            aria-label="Close demo cart"
            onClick={() => setOpen(false)}
          />
          <div
            ref={panelRef}
            id="cart-panel"
            className="cart-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div className="cart-panel-head">
              <h2 id={titleId}>Demo cart</h2>
              <p className="cart-panel-sub">
                {count === 0
                  ? "Empty — add a jar from Products."
                  : `${count} item${count === 1 ? "" : "s"} · concept prices (fake INR)`}
              </p>
              <button
                ref={closeRef}
                type="button"
                className="cart-close"
                aria-label="Close demo cart"
                onClick={() => setOpen(false)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="cart-panel-body">
              {lines.length === 0 ? (
                <p className="cart-empty">
                  Your demo cart is empty. Browse{" "}
                  <a
                    href="#products"
                    onClick={() => setOpen(false)}
                  >
                    Products
                  </a>{" "}
                  and tap <strong>Add to cart</strong>.
                </p>
              ) : (
                <ul className="cart-lines">
                  {lines.map((line) => (
                    <li key={line.product.id} className="cart-line">
                      <div className="cart-swatch" aria-hidden="true">
                        {line.product.variant === "Crunchy" ? "🥜" : "🫙"}
                      </div>
                      <div className="cart-line-meta">
                        <p className="cart-line-name">{line.product.name}</p>
                        <p className="cart-line-price">
                          {formatInr(line.product.priceInr)}{" "}
                          <span className="price-fake">concept</span>
                        </p>
                        <div className="cart-qty">
                          <button
                            type="button"
                            aria-label={`Decrease quantity of ${line.product.name}`}
                            onClick={() =>
                              setQty(line.product.id, line.qty - 1)
                            }
                          >
                            −
                          </button>
                          <span aria-live="polite">{line.qty}</span>
                          <button
                            type="button"
                            aria-label={`Increase quantity of ${line.product.name}`}
                            onClick={() =>
                              setQty(line.product.id, line.qty + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="cart-remove"
                        aria-label={`Remove ${line.product.name} from cart`}
                        onClick={() => remove(line.product.id)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="cart-panel-foot">
              {lines.length > 0 ? (
                <p className="cart-subtotal">
                  Subtotal{" "}
                  <strong>{formatInr(subtotal)}</strong>{" "}
                  <span className="price-fake">fake concept price</span>
                </p>
              ) : null}
              {checkoutMsg ? (
                <p className="cart-blocked cart-success-pulse" role="status" aria-live="polite">
                  Concept demo — no payment collected.
                </p>
              ) : null}
              <button
                type="button"
                className="btn-checkout"
                disabled={lines.length === 0}
                onClick={() => setCheckoutMsg(true)}
              >
                Checkout
              </button>
              {lines.length > 0 ? (
                <button type="button" className="btn-clear-cart" onClick={clear}>
                  Clear cart
                </button>
              ) : null}
              <p className="cart-footnote">
                Demo cart only. INR prices are fake concept labels. No payment.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
