import {UserType} from './user-type.ts';
import {newOffers, offers} from '../mocks/offers.tsx';

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type OfferTemplateType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: LocationType;
  };
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type OfferCardType = OfferTemplateType & {
  previewImage: string;
};

export type OfferType = OfferCardType & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserType;
  images: string[];
  maxAdults: number;
};


export const getMockOfferCards = () => offers;
export const getMockFavoriteOfferCards = () => offers.filter((offerCard) => offerCard.isFavorite);
export const getMockNearOfferCardsById = (offerId: string | undefined) => newOffers.filter((offer) => offer.id !== offerId).slice(0, 3);
export const getMockOfferById = (offerId: string | undefined) => newOffers.find((offer) => offer.id === offerId);
