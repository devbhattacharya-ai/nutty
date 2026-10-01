"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/products";

export type CartLine = {
  product: Product;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  liveMessage: string;
  add: (product: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");

  const add = useCallback((product: Product, qty = 1) => {
    const n = Math.max(1, Math.floor(qty));
    setLines((prev) => {
      const existing = prev.find((l) => l.product.id === product.id);
      if (existing) {
        return prev.map((l) =>
          l.product.id === product.id ? { ...l, qty: l.qty + n } : l,
        );
      }
      return [...prev, { product, qty: n }];
    });
    setLiveMessage(
      `Added ${n} ${product.name} to demo cart. Concept pricing only — no payment.`,
    );
    setOpen(true);
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => {
      const line = prev.find((l) => l.product.id === id);
      if (line) {
        setLiveMessage(`Removed ${line.product.name} from demo cart.`);
      }
      return prev.filter((l) => l.product.id !== id);
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    if (qty < 1) {
      setLines((prev) => {
        const line = prev.find((l) => l.product.id === id);
        if (line) {
          setLiveMessage(`Removed ${line.product.name} from demo cart.`);
        }
        return prev.filter((l) => l.product.id !== id);
      });
      return;
    }
    setLines((prev) => {
      const next = prev.map((l) =>
        l.product.id === id ? { ...l, qty } : l,
      );
      const line = next.find((l) => l.product.id === id);
      if (line) {
        setLiveMessage(`${line.product.name} quantity set to ${qty}.`);
      }
      return next;
    });
  }, []);

  const clear = useCallback(() => {
    setLines([]);
    setLiveMessage("Demo cart cleared.");
  }, []);

  const count = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty, 0),
    [lines],
  );

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.product.priceInr * l.qty, 0),
    [lines],
  );

  const value = useMemo(
    () => ({
      lines,
      count,
      subtotal,
      open,
      setOpen,
      liveMessage,
      add,
      remove,
      setQty,
      clear,
    }),
    [lines, count, subtotal, open, liveMessage, add, remove, setQty, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
