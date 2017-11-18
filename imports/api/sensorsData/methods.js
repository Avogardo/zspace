import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import {
  TableDataSchema,
} from './schema.js';
import { HTTP } from 'meteor/http';

export const getData = new ValidatedMethod({
  name: 'get.data',
  validate: TableDataSchema.validator({ clean: true }),
  run({ name }) {
    if (Meteor.isServer) {
      return httpGetAsync(name);
    }
  },
});

const httpGetAsync = (url) =>
  new Promise((resolve, reject) => {
      HTTP.call('GET', url, {
        headers:{
          Authorization: "Bearer eyJrIjoiblFuS1J3cmRMaDlRbk02NG5sS3VsVUJmajhKa0xYTVciLCJuIjoiYXZvZ2FyZG8iLCJpZCI6MX0=",
        }
    }, (error, result) => {
      if (error) {
          reject(error);
      } else {
          resolve(result);
      }
    });
  });
