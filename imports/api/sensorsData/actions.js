import {
  getData,
} from './methods.js';

const get = (baseUrl, config) => new Promise((resolve, reject) => {
  getData.call({ baseUrl, ...config }, (err, res) => {
    if (err) {
      const error = new Error(err.reason || err);
      console.log(err);
      reject(error);
    }
    resolve(res);
  });
});

const actions = {
  get,
};

export { actions };
