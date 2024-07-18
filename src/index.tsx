import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import Settings from './app/settings.tsx';
import {offers} from './mocks/offers.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App
    offersCount={Settings.OffersCount}
    offers={offers}
  />
);
