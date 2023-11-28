import storageNight from "public/images/storageNight.jpeg";
import storageDay from "public/images/storageDay.jpg";
import storageCar from "public/images/storageCar.jpeg";

import type { StaticImageData } from "next/image";

export type CarouselImage = {
  img: StaticImageData;
  alt: string;
};

export const carouselImages: CarouselImage[] = [
  {
    img: storageDay,
    alt: "Storage units during the day",
  },
  {
    img: storageCar,
    alt: "Car inside storage unit",
  },
  {
    img: storageNight,
    alt: "Storage units during the night",
  },
];
