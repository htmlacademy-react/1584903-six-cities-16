import {OfferCardType} from '../../types/offer.ts';
import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state.ts';
import {offers} from '../../mocks/offers.tsx';

export type SortOption = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

type RentalState = {
  currentCity: string;
  offers: OfferCardType[];
  sortOption: SortOption;
}

const initialState: RentalState = {
  currentCity: 'Paris',
  offers: [],
  sortOption: 'Popular',
};

const rentalSlice = createSlice({
  name: 'rental',
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    setOffers: (state, action: PayloadAction<OfferCardType[]>) => {
      state.offers = action.payload;
    },
    setSortOption: (state, action: PayloadAction<SortOption>) => {
      state.sortOption = action.payload;
    },
  }
});

export const {setCurrentCity, setOffers, setSortOption} = rentalSlice.actions;

export const getOffers = () => (dispatch: AppDispatch) => {
  dispatch(setOffers(offers));
};

export const selectedSortedOffers = createSelector(
  (state: State) => state.offers,
  (state: State) => state.sortOption,
  (offerCards, sortOption) => {
    switch (sortOption) {
      case 'Price: low to high':
        return [...offerCards].sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return [...offerCards].sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return [...offerCards].sort((a, b) => b.rating - a.rating);
      default:
        return offerCards;
    }
  }
);

export const {reducer} = rentalSlice;
