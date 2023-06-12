import React from "react";
import { useState } from "react";
import s from "./Header.module.scss";
import { GlobalImageSelector } from "../accets/image/global/globalImageSelector";
import Select from "react-select";
import { useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { Theme } from "../context/ThemeContext";
import { useCustomDispatch } from "../hooks/storeHooks";
import { fetchCurrentWeather } from "../store/thunks/fetchCurrentWeather";
import { fetchCurrentWeatherCard } from "../store/thunks/fetchCurrenWeatherCard";
import { setAnswerCardStateCity } from "../store/slices/CardAnswerSlice";
import { useSelector } from "react-redux";
import { SelectTabs } from "../hooks/selectTabs";
import { tabslatitude, tabslongitude } from "../store/slices/TabsSlice";

type Props = {};

interface E {
  value: string;
  label: string;
  name: string;
  latitude: number;
  longitude: number;
}

const Header = (props: Props) => {
  const theme = useTheme();
  const options = [
    {
      value: "city_1",
      label: "Нижний новгород",
      name: "Nizhniy Novgorod",
      latitude: 56.32,
      longitude: 43.8,
    },
    {
      value: "city_2",
      label: "Санкт-Петербург",
      name: "Saint Petersburg",
      latitude: 59.94,
      longitude: 30.31,
    },
    {
      value: "city_3",
      label: "Москва",
      name: "Moscow",
      latitude: 55.75,
      longitude: 37.62,
    },
    {
      value: "city_4",
      label: "Париж",
      name: "Paris",
      latitude: 48.85,
      longitude: 2.35,
    },
    {
      value: "city_5",
      label: "Лондон",
      name: "London",
      latitude: 51.51,
      longitude: -0.13,
    },
    {
      value: "city_6",
      label: "Ижевск",
      name: "izhevsk",
      latitude: 53.2333,
      longitude: 56.85,
    },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(71, 147, 255, 0.2);",
      width: "194px",
      hight: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };
  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  }

  const dispatch = useCustomDispatch();
  let obj = {
    value: "city_1",
    label: "Нижний новгород",
    name: "Nizhniy Novgorod",
    latitude: 56.32,
    longitude: 43.8,
  };
  const { tabsNumber } = useSelector(SelectTabs);

  useEffect(() => {
    dispatch(fetchCurrentWeather(`${obj.name}`));
    dispatch(fetchCurrentWeatherCard(obj.latitude, obj.longitude, tabsNumber));
  }, []);

  function Click(e: E) {
    dispatch(tabslatitude(e.latitude));
    dispatch(tabslongitude(e.longitude));
    dispatch(fetchCurrentWeather(e.name));
    dispatch(fetchCurrentWeatherCard(e.latitude, e.longitude, tabsNumber));
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalImageSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalImageSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options}
          styles={colorStyles}
          options={options}
          onChange={(e) => Click(e!)}
        />
      </div>
    </header>
  );
};
export { Header };
