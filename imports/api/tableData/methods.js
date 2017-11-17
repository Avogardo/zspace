import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import {
  TableDataSchema,
} from './schema.js';
import { HTTP } from 'meteor/http';

export const addRow = new ValidatedMethod({
  name: 'row.add',
  validate: TableDataSchema.validator({ clean: true }),
  run({ name }) {

    if (Meteor.isServer) {
      // const g = "https://avogardo.grafana.net/api/datasources/proxy/4/query?db=pomiary_test&q=SELECT%20*%20FROM%20%22pomiary_test%22%20WHERE%20(%22sensor%22%20%3D%20%27T9%27)%20AND%20time%20%3E%3D%201510771287176ms%20and%20time%20%3C%3D%201510773279067ms&epoch=ms"
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
      }, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });