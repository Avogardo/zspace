import { FullPageLoader } from '/imports/components/Loaders';
import { compose } from 'react-komposer';

import Main from './Main.jsx';

import {
  actions as sensorsActions,
} from '/imports/api/sensorsData';

const composer = (props, onData) => {
    const baseUrl = 'https://avogardo.grafana.net/api/datasources/proxy/4/query?';

    const api = {
        getTestData: `${baseUrl}db=pomiary_test&q=SELECT "value" FROM "pomiary_test" WHERE ("sensor" = 'H11') AND time >= 1462365579442ms and time <= 1462367602026ms&epoch=ms`,
    }

sensorsActions.addNewRow(api.getTestData).then(r => {
    console.log(r.data.results[0].series[0]);
}).catch(e => {
    console.log(e);
})



const date = new Date().getTime()
console.log(date);
console.log(new Date(date));

console.log(new Date(1462365579442));

  onData(null, {

  });
};

export default compose(
  composer,
  FullPageLoader,
)(Main);
