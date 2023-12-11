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

export default function Prices() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>One size doesn't fit all when it comes to storage.</h2>
        <p className={styles.subheader}>
          That's why we offer four different size options to accomodate your varying needs. From small units for a few
          boxes to larger spaces for furniture and more, we have the perfect size for you. Our affordable monthly plans
          ensure that you get the storage you need without breaking the bank.
        </p>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[600px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Size
              </th>
              <th scope="col" className="px-6 py-3">
                Dimensions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Small
              </th>
              <td className="px-6 py-4">10' X 5'</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Medium
              </th>
              <td className="px-6 py-4">10' X 10'</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Large
              </th>
              <td className="px-6 py-4">10' X 20'</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Extra Large
              </th>
              <td className="px-6 py-4">10' X 25'</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
