import {OfferCardType} from '../../types/offer.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch} from '../../types/state.ts';
import {offers} from '../../mocks/offers.tsx';

export type SortOption = 'Popular' | 'PriceLowToHigh' | 'PriceHighToLow';

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

export const {reducer} = rentalSlice;
