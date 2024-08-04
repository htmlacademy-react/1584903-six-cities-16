import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {offers} from './mocks/offers.tsx';
import 'leaflet/dist/leaflet.css';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App
      offers={offers}
    />
  </Provider>
);
