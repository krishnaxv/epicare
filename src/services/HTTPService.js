import { assign, extend, forOwn, has, replace, reduce, size } from 'lodash';
import { getIdToken } from '../services/firebaseService';
import { objectToQueryString } from '../utils';

export const interpolateURL = (URL, options) =>
  reduce(
    options,
    (returnURL, value, key) => replace(returnURL, `:${key}`, value),
    URL
  );

export const withQueryString = (baseURL, queryObject) => {
  let queryString = objectToQueryString(queryObject);
  if (size(queryString) > 0) {
    queryString = `?${queryString}`;
  }
  return `${baseURL}${queryString}`;
};

const HTTPService = {
  status(response) {
    return response.status >= 200 && response.status < 300
      ? Promise.resolve(response)
      : Promise.reject(new Error(response.statusText));
  },
  json(response) {
    return response.json();
  },
  request(url, options = {}) {
    const URL = `http://10.10.4.50:7070/epicare${url}`;
    return getIdToken()
      .then(accessToken => {
        let config = assign(options, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: accessToken
          },
          method: options.method || 'GET',
          mode: 'cors',
          credentials: 'omit'
        });

        if (has(options, 'body')) {
          config = extend(config, {
            body: JSON.stringify(options.body)
          });
        }

        /**
         * TODO
         * Use `encodeURIComponent`
         */
        return (
          fetch(URL, config)
            // .then(this.headers)
            .then(this.status)
            .then(this.json)
            .then(data => data)
            .catch(error => error)
        );
      })
      .catch(error => Promise.reject(new Error(error)));
  }
};

export default HTTPService;
