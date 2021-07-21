import axios from 'axios';

const placesBaseUrl = 'http://localhost:4000/places';

export const getPlaces = async () => {
  try {
    const placesResult = await axios.get(placesBaseUrl);
    return placesResult.data;
  } catch (err) {
    console.log(err);
  }
};
