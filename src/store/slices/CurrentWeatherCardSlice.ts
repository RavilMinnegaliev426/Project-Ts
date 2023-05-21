import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardWeather } from "../types";
import { AxiosResponse } from "axios";

type CurrentWeatherCard = {
  weatherCard: CardWeather;
  isLoading: boolean;
  response: Responce;
};

type Responce = {
  status: number;
  message: string;
};

const initialState: CurrentWeatherCard = {
  weatherCard: {
    daily: {
      time: [],
      weathercode: [],
      temperature_2m_max: [],
      temperature_2m_min: [],
      sunset: [],
      windspeed_10m_max: [],
      winddirection_10m_dominant: [],
    },
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

export const CurrentWeatherCardSlice = createSlice({
  name: "current_weather_card",
  initialState,
  reducers: {
    fetchCurrentWeatherCard(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<CardWeather>>
    ) {
      state.isLoading = false;
      state.weatherCard = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },

    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<CardWeather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default CurrentWeatherCardSlice.reducer;
