import {
  addRow,
} from './methods.js';

const addNewRow = (name, callback = () => {}) => new Promise((resolve, reject) => {
    addRow.call({ name }, (err, res) => {
        console.log(name);
        if (err) {
            const error = new Error(err.reason || err);
            console.log(err);
            reject(error);
        }
        console.log(res);
        resolve(res);
    });
});







  // addRow.call({ name }, callback);

const actions = {
  addNewRow,
};

export { actions };
