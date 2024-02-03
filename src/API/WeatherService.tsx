import axios, { AxiosResponse } from "axios";
import { Weather } from "../store/types";

export async function getCurrentWeather(
  city: string
): Promise<AxiosResponse<Weather>> {
  return axios.get<Weather>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=14eb8319ec32a270aaceb55aa393688b&lang=ru`
  );
}
