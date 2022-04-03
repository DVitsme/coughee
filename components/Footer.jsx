import React from 'react';
import Link from 'next/link';

function Footer() {
  const currentYear = new Date();

  return (
    <footer className="pt-16">
      <div className="w-full bg-indigo-700 py-12">
        <div className="container mx-auto xl:flex text-center xl:text-left lg:text-left">
          <div className="xl:w-3/6 sm:w-full mb-6 xl:mb-0">
            <p className="text-white text-center xl:text-left">
              &#169;{currentYear.getFullYear()} The Coughee Company. All Rights
              Reserved
            </p>
          </div>
          <div className="xl:w-3/6 sm:w-full">
            <ul className="xl:flex lg:flex md:flex sm:flex justify-around">
              <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                <Link href="/about">
                  <a>Services</a>
                </Link>
              </li>
              <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
