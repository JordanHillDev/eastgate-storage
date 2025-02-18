"use client";

import { NAV_HEIGHT } from "@/global/constants/navHeight";
import { useRouter } from "next/navigation";

const styles = {
  section: `
  bg-background
  `,
  container: `  
  px-4 
  mx-auto 
  max-w-screen-md
  `,
  header: `
  mb-4 
  text-3xl 
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
  const router = useRouter();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (res.ok) {
        router.push("/success");
        console.log("yay success");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="contact" className={styles.section} style={{ paddingTop: NAV_HEIGHT }}>
      <div className={styles.container}>
        <h2 className={styles.header}>Contact Us</h2>
        <p className={styles.subheader}>
          Ready to experience the convenience and security of Eastgate Storage Units? Contact us today to reserve your
          unit and discover a storage solution that fits your lifestyle.
        </p>
        <form name="contact" className="space-y-8" onSubmit={handleFormSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input type="text" name="name" id="name" className={styles.formInput} required autoComplete="name" />
          </div>
          <div>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input type="email" name="email" id="email" className={styles.formInput} required autoComplete="email" />
          </div>
          <div>
            <label htmlFor="phoneNumber" className={styles.formLabel}>
              Phone Number
            </label>
            <input type="text" name="phoneNumber" id="phoneNumber" className={styles.formInput} required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className={styles.formLabel}>
              Your message
            </label>
            <textarea
              id="message"
              name="message"
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
