import Main from '../pages/main.tsx';
import Favourites from '../pages/favourites.tsx';
import Offer from '../pages/offer.tsx';
import Login from '../pages/login.tsx';

type AppOffersCount = {
  offersCount: number;
}

function App({offersCount}: AppOffersCount): JSX.Element {
  return (
    <>
      <Main offersCount={offersCount} />
      <Favourites />
      <Offer />
      <Login />
    </>
  );
}

export default App;
