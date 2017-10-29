import { chain } from 'lodash';

export const getRandomId = () =>
  `_${Math.random()
    .toString(36)
    .substr(2, 7)}`;

export const objectToQueryString = queryObject =>
  chain(queryObject)
    .reduce(
      (queryStringList, value, key) => [...queryStringList, `${key}=${value}`],
      []
    )
    .join('&')
    .value();
