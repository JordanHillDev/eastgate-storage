import { PricingCard } from "../pricingCard";
import { sizeOptions } from "@/global/constants/sizeOptions";

export default function About() {
  return (
    <div className="max-w-screen-xl px-6 py-40" id="about">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          We have the size and price to match your needs
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Call now for help getting your stuff stored
        </p>
      </div>
      <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
        {sizeOptions.map((ea) => (
          <PricingCard option={ea} key={ea.size} />
        ))}
      </div>
    </div>
  );
}
