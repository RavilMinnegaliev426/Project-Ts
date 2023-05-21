import { RootState } from "../store/store";
export const selectCurrentWeatherData = (state: RootState) =>
  state.CurrentWeatherSlice;
