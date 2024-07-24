import {OfferCardType} from '../types/offer.ts';

export const getMarkupRating = (rating: number) => {
  const ratingInPercent = `${(Math.floor(rating) / 5) * 100}%`;
  return {width: ratingInPercent};
};

export const upFirstLetter = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

type OffersByCityType = {
  [key: string]: OfferCardType[];
}

export const getOfferCardsByCity = (offerCards: OfferCardType[]) => {
  const cardsByCity: OffersByCityType = {};

  for (const card of offerCards) {
    if (!cardsByCity[card.city.name]) {
      cardsByCity[card.city.name] = [];
    }
    cardsByCity[card.city.name].push(card);
  }
  return cardsByCity;
};
