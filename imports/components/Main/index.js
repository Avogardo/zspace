import { FullPageLoader } from '/imports/components/Loaders';
import { compose } from 'react-komposer';

import Main from './Main.jsx';

import {
  actions as sensorsActions,
} from '/imports/api/sensorsData';

const composer = (props, onData) => {
    const baseUrl = 'https://avogardo.grafana.net/api/datasources/proxy/4/query?';

    const api = {
        getTestData: `${baseUrl}db=pomiary_test&q=SELECT * FROM "pomiary_test" WHERE ("sensor" = 'T9') AND time >= 1510771287176ms and time <= 1510773279067ms&epoch=ms`,
    }

sensorsActions.addNewRow(api.getTestData).then(r => {
    console.log(r.data.results[0].series[0]);
}).catch(e => {
    console.log(e);
})

  onData(null, {

  });
};

export default compose(
  composer,
  FullPageLoader,
)(Main);
