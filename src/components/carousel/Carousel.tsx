"use client";
import { useState } from "react";
import Image from "next/image";
import Swipe from "react-easy-swipe";
import type { CarouselImage } from "@/global/constants/carouselImages";

type CarouselProps = {
  images: CarouselImage[];
};

const styles = {
  carouselButton: `
  absolute 
  top-0 
  z-10 
  flex 
  items-center 
  justify-center 
  h-full 
  px-4 
  cursor-pointer 
  group 
  focus:outline-none`,
  arrowContainer: `
  inline-flex 
  items-center 
  justify-center 
  w-10 h-10 
  rounded-full 
  bg-white/30 
  group-hover:bg-white/50 
  group-focus:ring-4 
  group-focus:ring-white 
  group-focus:outline-none`,
  arrow: `
  w-4 
  h-4 
  text-white 
  `,
};

export default function Carousel({ images }: CarouselProps) {
  const [currSlide, setCurrSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currSlide === images.length - 1 ? 0 : currSlide + 1;
    setCurrSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currSlide === 0 ? images.length - 1 : currSlide - 1;
    setCurrSlide(newSlide);
  };

  return (
    <div id="default-carousel" className="relative w-full max-w-3xl" data-carousel="slide">
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden md:h-96">
        <div>
          <Swipe onSwipeLeft={handleNextSlide} onSwipeRight={handlePrevSlide}>
            {images.map((ea, i) => {
              if (i === currSlide) {
                return (
                  <Image
                    key={ea.img.src}
                    src={ea.img.src}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                    alt={ea.alt}
                    height={200}
                    width={400}
                  />
                );
              }
            })}
          </Swipe>
        </div>
      </div>
      {/* <!-- Slider controls --> */}
      <button type="button" className={`${styles.carouselButton} left-0`} data-carousel-prev onClick={handlePrevSlide}>
        <span className={styles.arrowContainer}>
          <svg
            className={styles.arrow}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className={`${styles.carouselButton} right-0`} data-carousel-next onClick={handleNextSlide}>
        <span className={styles.arrowContainer}>
          <svg
            className={styles.arrow}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
