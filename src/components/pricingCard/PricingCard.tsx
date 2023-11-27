export type PricingOption = {
  size: string;
  price: number;
  features: string[];
  mostPopular?: boolean;
};

export type PricingCardProps = {
  option: PricingOption;
};

const styles = {
  container: `
  flex 
  flex-col 
  p-6 
  mx-auto 
  w-72
  text-center  
  rounded-lg 
  border-2 
  shadow 
  xl:p-8 
  bg-gray-800 
  text-white
  relative`,
  size: `
  mb-4 
  text-4xl 
  font-extrabold`,
  priceContainer: `
  flex 
  justify-center 
  items-baseline 
  my-8`,
  price: `
  "mr-2 
  text-5xl 
  font-extrabold`,
  pricePeriod: `
  font-bold
  text-gray-400`,
  list: `
  mb-8 
  space-y-4 
  text-left`,
  listItem: `
  flex 
  items-center 
  space-x-3`,
  mostPopular: `
  bg-primary 
  rounded-t
  font-semibold
  mb-2
  absolute
  top-0
  left-0
  w-full`,
};

export default function PricingCard({ option }: PricingCardProps) {
  return (
    <div className={`${styles.container} ${option.mostPopular ? "border-primary" : "border-gray-400"}`}>
      {option.mostPopular && (
        <div className={styles.mostPopular}>
          <h1>Most Popular</h1>
        </div>
      )}
      <h3 className={styles.size}>{option.size}</h3>
      <div className={styles.priceContainer}>
        <span className={styles.price}>${option.price}</span>
        <span className={styles.pricePeriod}>/month</span>
      </div>
      <ul role="list" className={styles.list}>
        {option.features.map((ea) => (
          <li className={styles.listItem} key={ea}>
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{ea}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
