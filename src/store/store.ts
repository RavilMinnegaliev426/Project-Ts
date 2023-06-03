import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CurrentWeatherSlice from "./slices/CurrentWeatherSlice";
import CurrentWeatherCardSlice from "./slices/CurrentWeatherCardSlice";
import CardAnswerSlice from "./slices/CardAnswerSlice";
const rootReducer = combineReducers({
  CurrentWeatherSlice,
  CurrentWeatherCardSlice,
  CardAnswerSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
