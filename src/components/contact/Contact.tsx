const styles = {
  section: `
  bg-background
  `,
  container: `
  py-8 
  lg:py-16 
  px-4 
  mx-auto 
  max-w-screen-md
  `,
  header: `
  mb-4 
  text-4xl 
  tracking-tight 
  font-extrabold 
  text-center 
  text-text_primary
  `,
  subheader: `
  mb-8 
  lg:mb-16 
  font-light 
  text-center 
  text-text_secondary 
  sm:text-xl
  `,
  formLabel: `
  block 
  mb-2 
  text-sm 
  font-medium 
  text-text_secondary
  `,
  formInput: `
  shadow-sm-light 
  bg-gray-700 
  border 
  border-text_secondary 
  text-white 
  text-md 
  rounded-lg 
  focus:outline-none 
  focus:border-primary_light
  focus:ring-1 
  focus:ring-primary_light
  block 
  w-full 
  p-2.5 
  placeholder-gray-400 
  `,
  submitButton: `
  py-3 
  px-5 
  text-sm 
  font-medium 
  text-center 
  text-white 
  rounded-lg 
  bg-primary  
  sm:w-fit 
  hover:bg-primary_dark
  focus:ring-4 
  focus:outline-none 
  focus:ring-primary-300 
  `,
};

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h2 className={styles.header}>Contact Us</h2>
        <p className={styles.subheader}>
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let
          us know.
        </p>
        <form name="contact" method="POST" data-netlify="true" className="space-y-8">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input type="name" id="name" className={styles.formInput} required />
          </div>
          <div>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input type="email" id="email" className={styles.formInput} required />
          </div>
          <div>
            <label htmlFor="phoneNumber" className={styles.formLabel}>
              Phone Number
            </label>
            <input type="text" id="phoneNumber" className={styles.formInput} required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className={styles.formLabel}>
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className={styles.formInput}
              placeholder="Let us know how we can help"
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}