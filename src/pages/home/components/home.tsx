import React from "react";
import { useEffect } from "react";
import s from "./home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";
import { useCustomDispatch } from "../../../hooks/storeHooks";
import { useSelector } from "react-redux";
import { selectCurrentWeatherData } from "../../../hooks/selectCurrentWeatherData";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import { setAnswerCardStateCity } from "../../../store/slices/CardAnswerSlice";

const Home = () => {
  const dispatch = useCustomDispatch();
  const { weather } = useSelector(selectCurrentWeatherData);
  dispatch(setAnswerCardStateCity(weather.name));
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};

export { Home };
