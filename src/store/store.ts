import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CurrentWeatherSlice from "./slices/CurrentWeatherSlice";
import CurrentWeatherCardSlice from "./slices/CurrentWeatherCardSlice";
import CardAnswerSlice from "./slices/CardAnswerSlice";
import tabsNumberSlice from "./slices/TabsSlice";
const rootReducer = combineReducers({
  CurrentWeatherSlice,
  CurrentWeatherCardSlice,
  CardAnswerSlice,
  tabsNumberSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
