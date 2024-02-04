import { AppDispatch } from "../store";
import { getCurrentWeather } from "../../API/WeatherService";
import { CurrentWeatherSlice } from "../slices/CurrentWeatherSlice";

export const fetchCurrentWeather = (payload: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(CurrentWeatherSlice.actions.fetchCurrentWeather);
      const res = await getCurrentWeather(payload);
      if (res.status === 200) {
        dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherError(res));
      }
    } catch (error) {
      throw error;
    }
  };
};
