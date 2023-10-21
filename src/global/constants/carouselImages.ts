import storage1 from "public/images/adam-winger-FJTz_ASf_BI-unsplash.jpg";
import storage2 from "public/images/joshua-coleman-ZVkDLrXGMdw-unsplash.jpg";
import storage3 from "public/images/steve-johnson-S0j-5wSN3YQ-unsplash.jpg";
import storage4 from "public/images/storage1.jpg";

import type { StaticImageData } from "next/image";

export type CarouselImage = {
  img: StaticImageData;
  alt: string;
};

export const carouselImages: CarouselImage[] = [
  {
    img: storage1,
    alt: "Storage Unit",
  },
  {
    img: storage2,
    alt: "Storage Unit",
  },
  {
    img: storage3,
    alt: "Storage Unit",
  },
  {
    img: storage4,
    alt: "Storage Unit",
  },
];
