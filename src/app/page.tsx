import { Hero } from "@/components/hero";
import { Location } from "@/components/location";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <Hero />
      <Location />
    </main>
  );
}
