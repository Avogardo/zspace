import {
  getData,
} from './methods.js';

const get = (name, callback = () => {}) => new Promise((resolve, reject) => {
  getData.call({ name }, (err, res) => {
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
