import {
  getData,
  getCurrentData,
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

const getCurrent = (sensor, userName) => new Promise((resolve, reject) => {
  getCurrentData.call({ sensor, userName }, (err, res) => {
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
  getCurrent,
};

export { actions };
