//app/store/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import citySliceReducer from './slices/citySlice';

const rootReducer = combineReducers({
  weather: citySliceReducer,
});

export default rootReducer;