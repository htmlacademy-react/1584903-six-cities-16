import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import Settings from './app/settings.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App
    offersCount={Settings.OffersCount}
  />
);
