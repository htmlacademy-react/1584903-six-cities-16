import {useParams} from 'react-router-dom';
import {getMockNearOfferCardsById, getMockOfferById} from '../types/offer.ts';
import NotFound from './not-found.tsx';
import OfferContainer from '../components/app/offer-container/offer-container.tsx';
import {OfferCard} from '../components/app/offer-card/offer-card.tsx';
import Map from '../components/app/map/map.tsx';

export default function Offer(): JSX.Element {
  const {id: offerId} = useParams();

  const nearOfferCards = getMockNearOfferCardsById(offerId);
  const currentOffer = getMockOfferById(offerId);

  if (!currentOffer) {
    return <NotFound />;
  }
  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                currentOffer.images.map((image) => (
                  <div key={image} className="offer__image-wrapper">
                    <img className="offer__image" src={image} alt="Photo studio"/>
                  </div>
                ))
              }
            </div>
          </div>
          <OfferContainer offer={currentOffer} />
          <Map offers={nearOfferCards} city={currentOffer.city} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOfferCards.map((offerCard) => <OfferCard key={offerCard.id} className='near-places' offer={offerCard} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
