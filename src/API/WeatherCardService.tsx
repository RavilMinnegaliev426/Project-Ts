import React from "react";
import axios, { AxiosResponse } from "axios";
import { CardWeather } from "../store/types";

export async function getCardCurrentWeather(
  latitude: number,
  longitude: number
): Promise<AxiosResponse<CardWeather>> {
  return axios.get<CardWeather>(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunset,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=Europe%2FLondon`
  );
}
