import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background pt-20">
      <Hero />
      <About />
      <Location />
      <Contact />
    </main>
  );
}
