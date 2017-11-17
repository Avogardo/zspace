import { FullPageLoader } from '/imports/components/Loaders';
import { compose } from 'react-komposer';

import Main from './Main.jsx';

import {
  actions as tableActions,
} from '/imports/api/tableData';

const composer = (props, onData) => {
tableActions.addNewRow("https://avogardo.grafana.net/api/datasources/proxy/4/query?db=pomiary_test&q=SELECT%20*%20FROM%20%22pomiary_test%22%20WHERE%20(%22sensor%22%20%3D%20%27T9%27)%20AND%20time%20%3E%3D%201510771287176ms%20and%20time%20%3C%3D%201510773279067ms&epoch=ms").then(r => {
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
