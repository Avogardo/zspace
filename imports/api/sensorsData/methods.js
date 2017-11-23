import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import {
  TableDataSchema,
} from './schema.js';
import { HTTP } from 'meteor/http';

export const getData = new ValidatedMethod({
  name: 'get.data',
  validate: TableDataSchema.validator({ clean: true }),
  run({ baseUrl, roomId, name, title, sensor, query, isLive, className, period }) {
    if (Meteor.isServer) {
      return httpGetAsync(baseUrl, roomId, name, title, sensor, query, isLive, className, period);
    }
  },
});

const httpGetAsync = (baseUrl, roomId, name, title, sensor, query, className, isLive, period) => {
  let url = baseUrl + query;
  if (isLive) {
    const currentDate = new Date();
    const unixTime = currentDate.getTime();

    url = baseUrl + query + (unixTime - period) + `ms and time <= ${unixTime}ms&epoch=ms`;
  }

  return new Promise((resolve, reject) => {
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
}
