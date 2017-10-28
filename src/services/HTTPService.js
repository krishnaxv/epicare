import { assign, extend, forOwn, has, replace } from 'lodash';

export const interpolateURL = (URL, options) => {
  let returnURL = '';
  forOwn(options, (value, key) => {
    returnURL = replace(URL, `:${key}`, value);
  });
  return returnURL;
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

    let config = assign(options, {
      headers: {
        'Content-Type': 'application/json'
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
  }
};

export default HTTPService;
