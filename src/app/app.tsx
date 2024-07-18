import Main from '../pages/main';
import Favorites from '../pages/favorites';
import Offer from '../pages/offer';
import Login from '../pages/login';
import {AppRoute, AuthorizationStatus} from '../const';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from './private-route';
import NotFound from '../pages/not-found';
import {MainOffers} from '../types/offer';

type AppOffersProps =
 {
  offersCount: number;
  offers: MainOffers;
}

function App({offersCount, offers}: AppOffersProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offersCount={offersCount} offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer offers={offers}/>}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
