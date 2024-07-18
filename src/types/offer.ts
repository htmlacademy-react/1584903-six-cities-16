export type HousingType = 'apartment' | 'room' | 'house' | 'hotel';

export type OfferType = {
  id: string;
  src: string[];
  isPremium: boolean;
  amount: number;
  title: string;
  type: HousingType;
  isFavourite: boolean;
  description: string;
  rating: number;
  amountBedrooms: string;
  maxGuests: string;
  ownerInfo: string;
  city: string;
};

export type MainOffers = OfferType[];
