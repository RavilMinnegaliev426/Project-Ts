import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import s from "./home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";
import { getCurrentWeather } from "../../../API/WeatherService";
import {
  useCustomDispatch,
  useCustomSelector,
} from "../../../hooks/storeHooks";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import { useSelector } from "react-redux";
import { selectCurrentWeatherData } from "../../../hooks/selectCurrentWeatherData";

const Home = () => {
  const dispatch = useCustomDispatch();
  const { weather } = useSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather("Nizhny Novgorod"));
  }, []);
  return (
    <div className={s.home}>
      {/* <div>{data}</div> */}
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};

export { Home };
