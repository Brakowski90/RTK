

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import API_KEY from "./apiKey"; 

export const fetchWeather = createAsyncThunk('city/fetchWeather', (location) => {
  return axios
    .get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${API_KEY}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error; 
    });
});

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    locations: [],
    status: 'idle' 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'success';
        state.locations.push(action.payload);  
      })
  },
});

export default citySlice.reducer;