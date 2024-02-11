//app/store/slices/defaultCitySlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  defaultCity: null,
};

const defaultCitySlice = createSlice({
  name: 'defaultCity',
  initialState,
  reducers: {
    setDefaultCity: (state, action) => {
      state.defaultCity = action.payload;
    },
  },
});

export const { setDefaultCity } = defaultCitySlice.actions;

export const selectDefaultCity = (state) => state.defaultCity.defaultCity;

export default defaultCitySlice.reducer;