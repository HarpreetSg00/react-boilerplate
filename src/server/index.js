import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import appRoutes from '../client/Routes';
import renderer from './helpers/renderer';
import storeServer from './helpers/store';

require('dotenv').config();

const app = express();

// eslint-disable-next-line func-names
app.get('*.js', function (req, res, next) {
  const aUrl = req.url.split('?');
  req.url = `${aUrl[0]}.gz?${__VERSION__}`;
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'application/javascript');
  next();
});

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = storeServer();
  const promises = matchRoutes(appRoutes, req.path).map(({ route, match }) => {
    if (route.loadData) {
      return route.loadData({ store });
    }
    if (route.loadDataWithMatch) {
      return route.loadDataWithMatch({ store, match });
    }
    return null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

const port = process.env.PORT || 3005;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is Listning on: ${port}`);
});
