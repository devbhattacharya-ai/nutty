export type Product = {
  id: string;
  name: string;
  variant: string;
  size: string;
  /** Concept INR price — labeled fake in UI */
  priceInr: number;
  blurb: string;
  badges: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "creamy-340",
    name: "Nutty Creamy",
    variant: "Creamy",
    size: "340g",
    priceInr: 299,
    blurb: "Silky peanut butter for toast, bowls, and brighter breakfasts.",
    badges: ["No added sugar", "Rich in protein", "100% natural"],
  },
  {
    id: "crunchy-340",
    name: "Nutty Crunchy",
    variant: "Crunchy",
    size: "340g",
    priceInr: 319,
    blurb: "Same simple peanuts with a satisfying crunch in every spoon.",
    badges: ["No added sugar", "Real peanut pieces", "100% natural"],
  },
];

export function formatInr(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}
