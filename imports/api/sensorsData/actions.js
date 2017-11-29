import {
  getData,
  getCurrentData,
} from './methods.js';

const get = (baseUrl, config, token) => new Promise((resolve, reject) => {
  getData.call({ baseUrl, ...config, token }, (err, res) => {
    if (err) {
      const error = new Error(err.reason || err);
      console.log(err);
      reject(error);
    }
    resolve(res);
  });
});

const getCurrent = (sensor, userName, token) => new Promise((resolve, reject) => {
  getCurrentData.call({ sensor, userName, token }, (err, res) => {
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
