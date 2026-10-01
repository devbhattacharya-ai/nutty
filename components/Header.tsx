"use client";

import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

const NAV = [
  { href: "#top", label: "Home" },
  { href: "#story", label: "Our Story" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Nutty" },
  { href: "#faq", label: "FAQ" },
] as const;

export default function Header() {
  const { count, open, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a href="#top" className="logo" onClick={closeMenu}>
          <span className="logo-word">NUTTY</span>
          <span className="logo-sub">PEANUT BUTTER</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <ul className="nav-links">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-utils">
          <button
            type="button"
            className="icon-btn bag-btn"
            aria-label={`Open demo cart${count ? `, ${count} items` : ", empty"}`}
            aria-controls="cart-panel"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              <path d="M6 8h12l-1 12H7L6 8Z" />
              <path d="M9 8V7a3 3 0 0 1 6 0v1" />
            </svg>
            <span className="bag-badge" aria-hidden="true">
              {count}
            </span>
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`nav-mobile${menuOpen ? " open" : ""}`}
        hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          <ul className="nav-links">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cart"
                onClick={() => {
                  closeMenu();
                  setOpen(true);
                }}
              >
                Demo cart
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
