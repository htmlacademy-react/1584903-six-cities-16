import {configureStore} from '@reduxjs/toolkit';
import {reducer} from '../features/rental/rentalSlice.ts';

export const store = configureStore({reducer});
