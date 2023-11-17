import { Map } from "../map";

const openHours = [
  { day: "Monday", opens: "6:00 AM", closes: "10:00 PM" },
  { day: "Tuesday", opens: "6:00 AM", closes: "10:00 PM" },
  { day: "Wednesday", opens: "6:00 AM", closes: "10:00 PM" },
  { day: "Thursday", opens: "6:00 AM", closes: "10:00 PM" },
  { day: "Friday", opens: "6:00 AM", closes: "10:00 PM" },
  { day: "Saturday", opens: "6:00 AM", closes: "10:00 PM" },
  { day: "Sunday", opens: "6:00 AM", closes: "10:00 PM" },
];

const styles = {
  section: `
  bg-background
  w-full
  md:max-w-screen-md
  lg:max-w-screen-xl
  px-6 
  py-6
  md:py-40`,
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
  text-sm
  font-light`,
};

export default function Location() {
  return (
    <section className={styles.section} id="location">
      <div className={styles.grid}>
        <div className={styles.map}>
          <Map />
        </div>
        <address itemScope itemType="http://schema.org/LocalBusiness" className={styles.address}>
          <p itemProp="name" className="text-text_primary text-base">
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
          <a href="tel:+18655910610" itemProp="telephone" className={`${styles.addressItem} mt-4`}>
            (865)-365-1798
          </a>
          <p itemProp="description" className="mt-8 mb-2 text-lg underline">
            Open Hours
          </p>
          <div className={styles.addressItem}>
            {openHours.map((day) => (
              <p
                key={day.day}
                itemScope
                itemType="https://schema.org/OpeningHoursSpecification"
                className="flex w-[250px]"
              >
                <span itemProp="dayOfWeek" content={day.day} className="text-sm">
                  {day.day}
                </span>
                <time itemProp="opens" dateTime={day.opens} className="text-sm ml-auto font-light">
                  {day.opens}
                </time>
                <span className="text-gray-400 text-sm"> - </span>
                <time itemProp="closes" dateTime={day.closes} className="text-sm font-light">
                  {day.closes}
                </time>
              </p>
            ))}
          </div>
        </address>
      </div>
    </section>
  );
}
