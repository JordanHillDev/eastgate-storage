const styles = {
  footer: `
  bg-background`,
  container: `
  mx-auto 
  w-full 
  max-w-screen-xl 
  p-4 
  py-6 
  lg:py-8    
  `,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Jordan Hill
            </a>
            . All Rights Reserved.
          </span>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
