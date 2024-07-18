import {MainOffers} from '../types/offer.ts';
import OfferCard from '../cards/offer-card.tsx';

type OffersListProps = {
  list: MainOffers;
}

function OfferList(props: OffersListProps): JSX.Element {
  const {list} = props;
  return (
    <>
      {
        list.map((offer, id) => {
          const keyValue = `${id}-${offer.src[0]}`;
          return (
            <OfferCard
              offer={offer}
              id={id}
              key={keyValue}
            />
          );
        })
      }
    </>
  );
}

export default OfferList;
