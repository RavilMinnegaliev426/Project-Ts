import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Weather } from "../types";
import { AxiosResponse } from "axios";

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: Responce;
};

type Responce = {
  status: number;
  message: string;
};

const initialState: CurrentWeather = {
  weather: {
    weather: [
      {
        main: "sun",
      },
    ],
    main: {
      temp: 0,
      pressure: 0,
      feels_like: 0,
      humidity: 0,
    },
    name: "loadin...",
    timezone: 0,
    wind: {
      speed: 0,
      deg: 0,
    },
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

export const CurrentWeatherSlice = createSlice({
  name: "current_weather",
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },

    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default CurrentWeatherSlice.reducer;
