import { Contact } from "@/components/contact";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <Hero />
      <Features />
      <Contact />
      <Location />
    </main>
  );
}
