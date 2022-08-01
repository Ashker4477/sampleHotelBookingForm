import { configureStore } from '@reduxjs/toolkit';
import hotelSlice from '../pages/HotelForm/HotelFormSplice';

export const store = configureStore({
    reducer: {
        hotelBook: hotelSlice,
    },
});
