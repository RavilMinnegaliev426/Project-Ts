import React, { useEffect } from "react";
import s from "./Days.module.scss";
import { Card } from "./Card";
import { Tabs } from "./Tabs";
import { selectCurrentWeatherDataCard } from "../../../../../hooks/selectCurrentWeatherDataCard";
import { useSelector } from "react-redux";
import { fetchCurrentWeatherCard } from "../../../../../store/thunks/fetchCurrenWeatherCard";
import { useCustomDispatch } from "../../../../../hooks/storeHooks";

type Props = {};
export interface dayMasMas {
  time: Array<string>;
  weathercode: Array<number>;
  temp_max: Array<number>;
  temp_min: Array<number>;
  sunset: Array<string>;
  wind_max: Array<number>;
  wind_dominant: Array<number>;
}
export interface dayMas {
  time: string;
  weathercode: number;
  temp_max: number;
  temp_min: number;
  sunset: string;
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
  const wind_max = weatherCard.daily.windspeed_10m_max;
  const wind_dominant = weatherCard.daily.winddirection_10m_dominant;

  let dayMassive = [];
  for (let i = 0; i < time.length; i++) {
    dayMassive.push({
      time: time[i],
      weathercode: weathercode[i],
      temp_max: temp_max[i],
      temp_min: temp_min[i],
      sunset: sunset[i],
      wind_max: wind_max[i],
      wind_dominant: wind_dominant[i],
    });
  }

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {dayMassive.map((day: dayMas) => (
          <Card {...day} key={day.time} />
        ))}
      </div>
    </>
  );
};
