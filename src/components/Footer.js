import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="bg-white shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2030{" "}
          <Link to="/" className="hover:underline">
            Cinemate
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.instagram.com/manishmbagul?igsh=MTR5MmE3eXM5MDhtYg=="
              target="_blank"
              className="hover:underline me-4 md:me-6"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/manish-bagul-277087334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="hover:underline me-4 md:me-6"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/manishmbagul?igsh=MTR5MmE3eXM5MDhtYg=="
              target="_blank"
              className="hover:underline me-4 md:me-6"
              rel="noreferrer"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/manishmbagul?igsh=MTR5MmE3eXM5MDhtYg=="
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
