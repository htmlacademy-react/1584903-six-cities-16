import Main from '../../pages/main.tsx';
import Favorites from '../../pages/favorites.tsx';
import Offer from '../../pages/offer.tsx';
import Login from '../../pages/login.tsx';
import {AppRoute, AuthorizationStatus} from '../../const.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from './private-route/private-route.tsx';
import NotFound from '../../pages/not-found.tsx';
import {getMockFavoriteOfferCards, OfferCardType} from '../../types/offer.ts';

type AppOffersProps =
 {
  offers: OfferCardType[];
}

export default function App({offers}: AppOffersProps): JSX.Element {
  const favoriteOfferCards = getMockFavoriteOfferCards();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites favoriteOfferCards={favoriteOfferCards}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}
