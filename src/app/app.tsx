import Main from '../pages/main.tsx';
import Favorites from '../pages/favorites.tsx';
import Offer from '../pages/offer.tsx';
import Login from '../pages/login.tsx';
import {AppRoute, AuthorizationStatus} from '../const.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from './private-route.tsx';
import NotFound from '../pages/not-found.tsx';

type AppOffersCount = {
  offersCount: number;
}

function App({offersCount}: AppOffersCount): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offersCount={offersCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer/>}
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
