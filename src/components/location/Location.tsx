import { Map } from "../map";

const styles = {
  section: `
  bg-background
  w-full
  md:max-w-screen-md
  lg:max-w-screen-xl
  mt-auto`,
  grid: `
  grid 
  max-w-screen-xl
  mx-auto
  px-4 
  py-8 
  gap-8
  md:grid-cols-12`,
  map: ` 
  col-span-7
  h-[300px]`,
  address: `
  col-span-5
  text-4xl 
  font-extrabold   
  md:text-5xl 
  xl:text-6xl 
  text-text_primary`,
  addressItem: `
  text-text_primary
  text-lg`,
};

export default function Location() {
  return (
    <section className={styles.section} id="location">
      <div className={styles.grid}>
        <div className={styles.map}>
          <Map />
        </div>
        <address itemScope itemType="http://schema.org/LocalBusiness" className={styles.address}>
          <p itemProp="name" className={styles.addressItem}>
            Eastgate Storage
          </p>
          <p itemProp="streetAddress" className={styles.addressItem}>
            719 Eastgate Rd
          </p>
          <p className={styles.addressItem}>
            <span itemProp="addressLocality">Sevierville</span>,<span itemProp="addressRegion">TN</span>
            <span> </span>
            <span itemProp="postalCode">37862</span>
          </p>
          <p itemProp="description" className={`${styles.addressItem} mt-8`}>
            Open Daily:{" "}
            <time itemProp="openingHours" dateTime="06:00">
              6AM
            </time>
            -
            <time itemProp="openingHours" dateTime="22:00">
              10PM
            </time>
          </p>
        </address>
      </div>
    </section>
  );
}
