import { AppDispatch } from "../store";
import { getCardCurrentWeather } from "../../API/WeatherCardService";
import { CurrentWeatherCardSlice } from "../slices/CurrentWeatherCardSlice";

export const fetchCurrentWeatherCard = (
  latitude: number,
  longitude: number,
  tabsNumber: number
) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(CurrentWeatherCardSlice.actions.fetchCurrentWeatherCard);
      const res = await getCardCurrentWeather(latitude, longitude, tabsNumber);
      if (res.status === 200) {
        dispatch(
          CurrentWeatherCardSlice.actions.fetchCurrentWeatherSuccess(res)
        );
      } else {
        dispatch(CurrentWeatherCardSlice.actions.fetchCurrentWeatherError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
