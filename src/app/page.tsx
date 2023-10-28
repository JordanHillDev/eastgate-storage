import { Carousel } from "@/components/carousel";
import { NavBar } from "@/components/navbar";
import Image from "next/image";
import { carouselImages } from "@/global/constants/carouselImages";
import { Map } from "@/components/map";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900">
      <Hero />
      <Map />
    </main>
  );
}
