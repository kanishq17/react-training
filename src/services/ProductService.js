import Axios from 'axios';

export const getProducts = () => {
  const endpoint =
    'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
  return Axios.get(endpoint);
};
