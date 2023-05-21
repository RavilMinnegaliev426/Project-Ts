import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CurrentWeatherSlice from "./slices/CurrentWeatherSlice";
import CurrentWeatherCardSlice from "./slices/CurrentWeatherCardSlice";

const rootReducer = combineReducers({
  CurrentWeatherSlice,
  CurrentWeatherCardSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
