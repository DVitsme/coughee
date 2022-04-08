const optionsGetHeaders = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: process.env.FOUR_SQUARE_API
  }
};

export const fetchStores = async () => {
  const response = await fetch(
    'https://api.foursquare.com/v3/places/search?ll=39.088590%2C-76.939470&limit=15&categories=13000&open_now=true',
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
