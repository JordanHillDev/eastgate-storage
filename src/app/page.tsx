import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { NAV_HEIGHT } from "@/global/constants/navHeight";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <Hero />
      <Features />
      <About />
      <Location />
      <Contact />
    </main>
  );
}
