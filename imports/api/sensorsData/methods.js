import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import {
  TableDataSchema,
  currentDataSchema,
} from './schema.js';
import { HTTP } from 'meteor/http';

export const getData = new ValidatedMethod({
  name: 'get.data',
  validate: TableDataSchema.validator({ clean: true }),
  run({ baseUrl, roomId, name, title, sensor, query, isLive, className, period, token }) {
    if (Meteor.isServer) {
      return httpGetAsync(baseUrl, roomId, name, title, sensor, query, isLive, className, period, token);
    }
  },
});

const httpGetAsync = (baseUrl, roomId, name, title, sensor, query, className, isLive, period, token) => {
  let url = baseUrl + query;
  if (isLive) {
    const currentDate = new Date();
    const unixTime = currentDate.getTime();

    url = baseUrl + query + (unixTime - period) + `ms and time <= ${unixTime}ms&epoch=ms`;
  }

  return new Promise((resolve, reject) => {
      HTTP.call('GET', url, {
        headers: {
          Authorization: token,
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

export const getCurrentData = new ValidatedMethod({
  name: 'get.current.data',
  validate: currentDataSchema.validator({ clean: true }),
  run({ sensor, userName, token }) {
    if (Meteor.isServer) {
      return httpGetCurrentAsync(sensor, userName, token);
    }
  },
});

const httpGetCurrentAsync = (sensor, userName, token) => {
  const currentDate = new Date();
  const unixTime = currentDate.getTime();
  const backTime = currentDate - 1617389;

  url = `https://${userName}.grafana.net/api/datasources/proxy/4/query?db=pomiary_test&q=SELECT "value" FROM "pomiary_test" WHERE ("sensor" = '${sensor}') AND time >= ${backTime}ms and time <= ${unixTime}ms&epoch=ms`;

  return new Promise((resolve, reject) => {
      HTTP.call('GET', url, {
        headers:{
          Authorization: token,
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
