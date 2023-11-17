import type { PricingOption } from "@/components/pricingCard/PricingCard";

export const sizeOptions: PricingOption[] = [
  { size: "5x10", price: 65, features: ["small things", "boxes"] },
  { size: "10x10", price: 110, features: ["small things", "boxes"] },
  { size: "10x20", price: 175, features: ["small things", "boxes"], mostPopular: true },
  { size: "10x25", price: 200, features: ["small things", "boxes"] },
];
