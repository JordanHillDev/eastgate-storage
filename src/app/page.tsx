import { Carousel } from "@/components/carousel";
import { NavBar } from "@/components/navbar";
import Image from "next/image";
import { carouselImages } from "@/global/constants/carouselImages";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Carousel images={carouselImages} />
    </main>
  );
}
