import Image from 'next/image';
import Link from 'next/link';

export default function ProductList({ products = [], stores = [] }) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Our Locations</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {stores.map((store) => (
            <div key={store.fsq_id}>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <Image
                    src={products[0].image}
                    alt={store.categories[0].name}
                    layout="fill"
                    className="w-full h-full object-top object-cover"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {store.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {store.location.address}, {store.location.locality}
                  </p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {(store.distance / 1609.344).toString().slice(0, 4)} miles
                    away
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href={{
                    pathname: `/coffee-store/${store.fsq_id}`
                  }}
                >
                  <a className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200">
                    View Details
                    <span className="sr-only">, {store.name}</span>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
