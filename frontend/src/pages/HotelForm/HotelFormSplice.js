import { createSlice } from '@reduxjs/toolkit';
import { getError } from '../../Utils/error';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
    loading: false,
    success: '',
    error: '',
};

export const hotelSlice = createSlice({
    name: 'bookHotel',
    initialState,
    reducers: {
        start: (state) => {
            state.loading = true;
        },
        success: (state, action) => {
            state.loading = false;
            state.success = action.payload;
        },
        fail: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { start, success, fail } = hotelSlice.actions;

export const bookHotel = (formData) => async (dispatch, getState) => {
    dispatch(start());
    try {
        const { data } = await axios.post('http://localhost:8000/hotel/details', formData);
        toast.success('Hotel booked successfully');
        dispatch(success(data));
    } catch (err) {
        toast.error('Sorry something went wrong, ' + JSON.stringify(getError(err)));
        dispatch(fail(getError(err)));
    }
};

export default hotelSlice.reducer;
