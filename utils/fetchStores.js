const optionsGetHeaders = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: process.env.NEXT_PUBLIC_FOUR_SQUARE_API
  }
};

export const fetchStores = async (location) => {
  const response = await fetch(
    `https://api.foursquare.com/v3/places/search?ll=${location}&limit=15&categories=13000&open_now=true`,
    optionsGetHeaders
  );
  const stores = await response.json();
  return stores.results;
};

export const getImages = async (fsq_id) => {
  const response = await fetch(
    `https://api.foursquare.com/v3/places/${fsq_id}/photos`,
    optionsGetHeaders
  );
  const data = await response.json();
  return data;
};
