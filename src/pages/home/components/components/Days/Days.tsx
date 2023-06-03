import React, { useEffect } from "react";
import s from "./Days.module.scss";
import { Card } from "./Card";
import { Tabs } from "./Tabs";
import { selectCurrentWeatherDataCard } from "../../../../../hooks/selectCurrentWeatherDataCard";
import { useSelector } from "react-redux";
import { useCustomDispatch } from "../../../../../hooks/storeHooks";

type Props = {};

export interface dayMas {
  id: number;
  time: string;
  weathercode: number;
  temp_max: number;
  temp_min: number;
  sunset: string;
  sunrise: string;
  probability: number;
  wind_max: number;
  wind_dominant: number;
}

export const Days = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weatherCard } = useSelector(selectCurrentWeatherDataCard);
  const time = weatherCard.daily.time;
  const weathercode = weatherCard.daily.weathercode;
  const temp_max = weatherCard.daily.temperature_2m_max;
  const temp_min = weatherCard.daily.temperature_2m_min;
  const sunset = weatherCard.daily.sunset;
  const sunrise = weatherCard.daily.sunrise;
  const probability = weatherCard.daily.precipitation_probability_max;
  const wind_max = weatherCard.daily.windspeed_10m_max;
  const wind_dominant = weatherCard.daily.winddirection_10m_dominant;

  let dayMassive = [];
  for (let i = 0; i < time.length; i++) {
    dayMassive.push({
      id: i,
      time: time[i],
      weathercode: weathercode[i],
      probability: probability[i],
      temp_max: temp_max[i],
      temp_min: temp_min[i],
      sunset: sunset[i],
      sunrise: sunrise[i],
      wind_max: wind_max[i],
      wind_dominant: wind_dominant[i],
    });
  }

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {dayMassive.map((day: dayMas) => (
          <Card {...day} key={day.id} />
        ))}
      </div>
    </>
  );
};
