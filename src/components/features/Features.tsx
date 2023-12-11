import { Prices } from "../prices";
import { NAV_HEIGHT } from "@/global/constants/navHeight";

const styles = {
  section: `
    bg-background
  `,
  container: `
  py-8 
  px-4 
  mx-auto 
  max-w-screen-xl 
  sm:py-16 
  lg:px-6
  `,
  headerContainer: `
  max-w-screen-md 
  mb-8 
  lg:mb-16
  `,
  header: `
  mb-4 
  text-3xl 
  tracking-tight 
  font-extrabold 
  text-text_primary 
  `,
  subheader: `
  text-text_secondary 
  sm:text-xl 
  `,
  highlighted: `
    text-primary_light
  `,
  featuresGrid: `
  space-y-8 
  md:grid 
  md:grid-cols-2 
  lg:grid-cols-3 
  md:gap-12
  md:space-y-0
  `,
  iconContainer: `
  flex 
  justify-center 
  items-center 
  mb-4 
  w-10 
  h-10 
  rounded-full 
  bg-primary
  lg:h-12 
  lg:w-12 
  `,
  icon: `
  w-5
  h-5 
  text-primary_light
  lg:w-6 lg:h-6 
  `,
  featureTitle: `
  mb-2 
  text-xl 
  font-bold 
  text-text_primary
  `,
  featureDescription: `
  text-text_secondary
  leading-6
  `,
};

export default function Features() {
  return (
    <section className={styles.section} style={{ paddingTop: NAV_HEIGHT }} id="about">
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.header}>
            We understand that life comes with its fair share of transitions and changes
          </h2>
          <p className={styles.subheader}>
            And sometimes, you need a little extra space to accomodate those shifts. That's where we come in.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          <div>
            <div className={styles.iconContainer}>
              <svg
                className={styles.icon}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Locally Owned and Operated</h3>
            <p className={styles.featureDescription}>
              We take pride in being an integral part of our community. Our friendly staff is dedicated to offering
              personalized service, ensuring that your storage experience with us is seamless and stress-free.
            </p>
          </div>
          <div>
            <div className={styles.iconContainer}>
              <svg
                className={styles.icon}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Secure and Well-Lit Environment</h3>
            <p className={styles.featureDescription}>
              Your peace of mind is our top priority. Our facility is equipped with state-of-the-art security features,
              including 24/7 surveillance cameras and well-lit areas, ensuring a safe environment for your belongings.
              You can trust Eastgate Storage to keep your items secure at all times.
            </p>
          </div>
          <div>
            <div className={styles.iconContainer}>
              <svg
                className={styles.icon}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="m19.848 15.968-4.4-7a1 1 0 0 0-1.6-.131l-2.164 2.448L7.872 4.51A1.028 1.028 0 0 0 6.985 4a1 1 0 0 0-.871.537l-6 11.5A1 1 0 0 0 1 17.5h18a1 1 0 0 0 .847-1.532ZM12.5 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Convenient RV Parking</h3>
            <p className={styles.featureDescription}>
              Whether you're an avid adventurer or simply need a place to store your recreational vehicle, we've got you
              covered. Our facility offers dedicated RV parking spaces, providing a secure home for your motorhome,
              camper, or trailer.
            </p>
          </div>
          <div>
            <div className={styles.iconContainer}>
              <svg
                className={styles.icon}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M19.9 6.58c0-.009 0-.019-.006-.027l-2-4A1 1 0 0 0 17 2h-4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.3c-.03.165-.047.332-.051.5a3.25 3.25 0 1 0 6.5 0A3.173 3.173 0 0 0 7.7 12h4.6c-.03.165-.047.332-.051.5a3.25 3.25 0 1 0 6.5 0 3.177 3.177 0 0 0-.049-.5h.3a1 1 0 0 0 1-1V7a.99.99 0 0 0-.1-.42ZM16.382 4l1 2H13V4h3.382ZM4.5 13.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm11 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Ground Level Access and Drive-Up Convenience</h3>
            <p className={styles.featureDescription}>
              No need to worry about navigating stairs or elevators - all our storage units are conveniently located on
              the ground level. Drive your car right up to your unit and enjoy hassle-free unloading. Our exterior
              roll-up doors make accessing your belongings quick and easy.
            </p>
          </div>
        </div>
      </div>
      <Prices />
    </section>
  );
}
