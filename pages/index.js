import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import useTractLocation from '../hooks/useTractLocation';
import { fetchStores } from '../utils/fetchStores';

export default function Home({ clothes, foundStores }) {
  const { handleTrackLocation, locationErrorMsg, isFindingLocation } =
    useTractLocation();

  const [location, setLocation] = useState('');

  const [products, setProducts] = useState(clothes);
  const [stores, setStores] = useState(foundStores);

  useEffect(() => {
    const getUsersStores = async () => {
      if (location) {
        try {
          const fetchUserStores = await fetchStores(location);
          console.log('Sanity Check');
          console.log(fetchUserStores);
        } catch (err) {
          console.log('get location error', err);
        }
      }
    };
    return () => getUsersStores();
  }, [location]);

  const handleOnHeroButtonClick = () => {
    handleTrackLocation();

    console.log({ location, locationErrorMsg });
  };

  return (
    <main>
      <Head>
        <title>Coughee Coffee</title>
      </Head>
      <Hero
        isFindingLocation={isFindingLocation}
        buttonText="View stores nearby"
        handleOnClick={handleOnHeroButtonClick}
      />
      <Quote />
      <ProductList products={products} stores={stores} />
    </main>
  );
}

export function Quote() {
  return (
    <section className="py-12 marker:overflow-hidden md:py-20 lg:py-10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-4xl leading-10 font-medium text-gray-900">
              <p>
                &ldquo; It is not how much we have, but how much we enjoy, that
                makes happiness.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    Judith Black
                  </div>

                  <svg
                    className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">
                    CEO, Coughee
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps(context) {
  let res = await fetch('https://fakestoreapi.com/products?limit=10');
  let clothes = await res.json();

  const foundStores = await fetchStores('35.689487%2C139.691711');

  return {
    props: { clothes, foundStores }
  };
}
