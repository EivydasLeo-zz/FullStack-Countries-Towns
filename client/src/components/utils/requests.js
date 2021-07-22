import axios from 'axios';

const placesBaseUrl = 'http://localhost:4000/places';

const reqOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

export const getPlaces = async () => {
  try {
    const placesResult = await axios.get(placesBaseUrl);
    return placesResult.data;
  } catch (err) {
    console.log(err);
  }
};

export const postNewPlace = async (obj) => {
  try {
    const res = await fetch(`${placesBaseUrl}/new`, {
      method: 'POST',
      body: JSON.stringify(obj),
      ...reqOptions,
    });
    const result = await res.json();
    console.log('New Place Created: ', result);
  } catch (err) {
    console.log('Error occured: ', err);
  }
};

export const deleteOnePlace = async (id) => {
  try {
    const resp = await fetch(`${placesBaseUrl}/delete/${id}`, {
      method: 'DELETE',
      ...reqOptions,
    });
    await resp.json();
  } catch (err) {
    console.log('Delete user failed.. ', err);
  }
};
