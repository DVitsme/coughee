import Image from 'next/image';
import React from 'react';
import coffeeShop from '../public/static/images/coffee-shop.jpg';

const Hero = () => {
  return (
    <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
              Coughee's Coffee
            </span>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
              <span className="block text-gray-900">
                Something to brighten your
              </span>
              <span className="block text-indigo-600">Morning Routine</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            April is earth month, but our commitment to reducing our
            environmental impact is year round. Try these tips on your next
            Coughee visit.
          </p>
          <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <p className="text-base font-medium text-gray-900">
              Discover Your Local Coffee Shops
            </p>
            <form action="#" method="POST" className="mt-3 sm:flex">
              <button
                type="submit"
                className="mt-3 w-full px-6 py-3 grow border border-transparent text-base capitalize justify-center font-medium rounded-md text-white bg-indigo-800 shadow-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:inline-flex sm:items-center sm:w-auto"
              >
                View stores nearby
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-500">
              We care about the protection of your data. Read our&nbsp;
              <a href="#" className="font-medium text-gray-900 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
            <div className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Image src={coffeeShop} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
