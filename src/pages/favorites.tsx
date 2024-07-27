import {OfferCardType} from '../types/offer.ts';
import FavoriteEmpty from '../components/app/favorite-empty/favorite-empty.tsx';
import FavoriteContainer from '../components/app/favorite-container/favorite-container.tsx';

type FavoritesOfferProps = {
  favoriteOfferCards: OfferCardType[];
}

function Favorites({favoriteOfferCards}: FavoritesOfferProps): JSX.Element {
  return (
    <main className={`page__main page__main--favorites${favoriteOfferCards.length ? '' : 'page__main--favorites-empty'}`}>
      <div className="page__favorites-container container">
        {favoriteOfferCards.length ? <FavoriteContainer favoriteOfferCards={favoriteOfferCards} /> : <FavoriteEmpty />}
      </div>
    </main>
  );
}

export default Favorites;
