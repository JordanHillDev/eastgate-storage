import { NAV_HEIGHT } from "@/global/constants/navHeight";
import { Carousel } from "../carousel";
import { carouselImages } from "@/global/constants/carouselImages";

const styles = {
  hero: `
  bg-background 
  pt-0
  lg:w-full
  `,
  grid: `
  grid 
  max-w-screen-xl 
  px-0
  lg:px-4 
  mx-auto 
  lg:gap-8 
  xl:gap-0 
  lg:grid-cols-12
  `,
  textContainer: `
  col-span-5
  mr-auto
  px-4
  md:px-0
  pr-10 
  place-self-center 
  lg:col-span-7
  `,
  header: `
  max-w-2xl 
  mb-4
  text-4xl 
  font-extrabold 
  tracking-tight 
  leading-none 
  md:text-5xl 
  xl:text-6xl 
  text-text_primary
  pt-5
  lg:pt-0
  xl:pt-0
  `,
  subHeader: `
  max-w-2xl 
  mb-6 
  font-light 
  lg:mb-8 
  md:text-lg 
  lg:text-xl 
  text-text_secondary
  leading-snug
  `,
  button: `
  inline-flex 
  items-center 
  justify-center 
  px-5 
  py-3 
  mr-3 
  text-base 
  font-medium 
  text-center 
  text-white 
  rounded-lg 
  bg-primary 
  hover:bg-primary_dark
  focus:ring-4 focus:ring-primary-300 
  dark:focus:ring-primary-900
  `,
  carousel: `
  lg:mt-0
  col-span-5
  order-first
  lg:order-last
  `,
};

export default function Hero() {
  return (
    <section className={styles.hero} id="home" style={{ paddingTop: NAV_HEIGHT }}>
      <div className={styles.grid}>
        <div className={styles.textContainer}>
          <h1 className={styles.header}>
            Your <span className="text-primary_light">Trusted</span> <br />
            Self Storage<span className="text-primary_light"> Solution</span>
          </h1>
          <p className={styles.subHeader}>
            Providing you with a reliable, secure, and convenient self-storage facility that caters to all your storage
            needs.
          </p>
          <a href="#contact" className={styles.button}>
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className={styles.carousel}>
          <Carousel images={carouselImages} />
        </div>
      </div>
    </section>
  );
}
