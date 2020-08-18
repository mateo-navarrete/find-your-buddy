import axios from 'axios';

export const getAnimalData = (api, cb) => {
  axios
    .get(api, {
      headers: {
        'content-type': 'application/vnd.api+json',
        Authorization: process.env.REACT_API_KEY,
      },
    })
    .then(res => cb(res.data))
    .catch(err => console.error(err));
};
