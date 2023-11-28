import { NAV_HEIGHT } from "@/global/constants/navHeight";

export default function Success() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background " style={{ marginTop: NAV_HEIGHT }}>
      <div className="bg-gray-800 border border-gray-700 p-8 flex flex-col justify-center mt-[20%] w-[350px] rounded relative">
        <div className="w-20 h-20 bg-green-500 rounded-full absolute left-0 right-0 bottom-0 top-[-40px] mx-auto flex items-center justify-center">
          <svg
            className="w-8 h-8 text-text_primary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        </div>
        <h2 className="text-white text-center text-4xl mb-4 mt-4">Success!</h2>
        <p className="text-text_secondary">
          Your message has been sent to Eastgate Storage. We will contact you shortly.
        </p>
        <div className="mx-auto mt-8 items-center">
          <a href="/" className="bg-primary text-text_primary px-4 py-2 rounded hover:bg-primary_dark flex gap-4">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Return to Eastgate Storage
          </a>
        </div>
      </div>
    </main>
  );
}
