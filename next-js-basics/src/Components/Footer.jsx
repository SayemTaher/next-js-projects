import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <Link href="#">
                <h1>FlixBUS</h1>
              </Link>
              <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                Join 31,000+ others and never miss out on new tips, tutorials,
                and more.
              </p>
              <div className="flex mt-6 -mx-2">
                <Link href="#" aria-label="Reddit">
                  <svg
                    className="w-5 h-5 fill-current mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="Facebook">
                  <svg
                    className="w-5 h-5 fill-current mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.2108 5.91404C14.9965 5.89871 15.7811 5.96986 16.549 6.12604V8.59404H15.335C14.8859 8.52355 14.4327 8.68117 14.1186 9.01894C13.8044 9.35671 13.6704 9.83574 13.759 10.302V12.002H16.421L16.001 14.892H13.759V21.881C18.6146 21.1143 22.1934 16.9251 22.194 12.002C22.194 6.47504 17.528 2.00204 12.001 2.00204C6.47395 2.00204 1.80795 6.47504 2.00195 12.002Z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="Github">
                  <svg
                    className="w-5 h-5 fill-current mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.021C2 16.427 4.871 20.164 8.838 21.5C9.338 21.583 9.528 21.311 9.528 21.074C9.528 20.864 9.52 20.184 9.516 19.387C6.728 19.994 6.14 17.904 6.14 17.904C5.682 16.687 5.032 16.351 5.032 16.351C4.181 15.796 5.096 15.808 5.096 15.808C6.04 15.878 6.532 16.769 6.532 16.769C7.36 18.244 8.714 17.803 9.242 17.576C9.321 16.929 9.57 16.482 9.846 16.258C7.67 16.033 5.387 15.153 5.387 11.426C5.387 10.395 5.74 9.571 6.318 8.943C6.215 8.718 5.895 7.708 6.42 6.406C6.42 6.406 7.182 6.162 9.5 7.548C10.903 7.161 12.366 7.009 13.82 7.005C15.274 7.009 16.737 7.161 18.142 7.548C20.459 6.162 21.22 6.406 21.22 6.406C21.746 7.708 21.426 8.718 21.322 8.943C21.902 9.571 22.254 10.395 22.254 11.426C22.254 15.167 19.966 16.03 17.782 16.258C18.134 16.554 18.453 17.178 18.453 18.066C18.453 19.343 18.442 20.509 18.442 21.074C18.442 21.311 18.63 21.588 19.139 21.5C23.104 20.163 26 16.427 26 12.021C26 6.484 21.523 2 16 2H12Z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="Twitter">
                  <svg
                    className="w-5 h-5 fill-current mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 3C22.0424 3.67504 20.9821 4.19208 19.86 4.539C19.2577 3.8375 18.4573 3.34668 17.567 3.123C16.6767 2.89932 15.7395 2.95554 14.8821 3.2849C14.0248 3.61426 13.2884 4.19846 12.773 4.968C12.2576 5.73754 11.9873 6.65816 12 7.59V8.539C10.2426 8.57563 8.50127 8.18585 6.93101 7.39544C5.36074 6.60504 4.01032 5.43872 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22129 20.9723 6.94296 20.92 6.67C21.9406 5.66354 22.6608 4.39276 23 3Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  About
                </h3>
                <Link href="#">
                  <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Company
                  </p>
                </Link>
                <Link href="#">
                  <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Community
                  </p>
                </Link>
                <Link href="#">
                  <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Careers
                  </p>
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Blog
                </h3>
                <Link href="#">
                  <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Tech
                  </p>
                </Link>
                <Link href="#">
                  <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Music
                  </p>
                </Link>
                <Link href="#">
                  <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Videos
                  </p>
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Products
                </h3>
                <Link href="#">
                  <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Mega cloud
                  </p>
                </Link>
                <Link href="#">
                  <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Aperion UI
                  </p>
                </Link>
                <Link href="#">
                  <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Meraki UI
                  </p>
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Contact
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  +1 526 654 8965
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  example@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-800 dark:text-white">
            © Meraki UI All rights reserved 2021
          </p>
        </div>
      </div>
    </footer>
  );
}
