import { RootState } from "../store/store";
export const selectCurrentWeatherDataCard = (state: RootState) =>
  state.CurrentWeatherCardSlice;
