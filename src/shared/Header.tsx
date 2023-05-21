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

type Props = {};

const Header = (props: Props) => {
  const theme = useTheme();
  const options = [
    { value: "city_1", label: "Нижний новгород", name: "Nizhniy Novgorod" },
    { value: "city_2", label: "Санкт-Петербург", name: "Saint Petersburg" },
    { value: "city_3", label: "Москва", name: "Moscow" },
    { value: "city_4", label: "Париж", name: "Paris" },
    { value: "city_5", label: "Лондон", name: "London" },
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
  const [valueE, setValueE] = useState("Nizhniy Novgorod");
  useEffect(() => {
    dispatch(fetchCurrentWeather(`${valueE}`));
  }, [valueE]);

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
          onChange={(e) => setValueE(e!.name)}
        />
      </div>
    </header>
  );
};
export { Header };
