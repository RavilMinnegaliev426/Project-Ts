import React from "react";
import { useState } from "react";
import s from "./Header.module.scss";
import { GlobalImageSelector } from "../accets/image/global/globalImageSelector";
import Select from "react-select";
import { useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { Theme } from "../context/ThemeContext";

type Props = {};

const Header = (props: Props) => {
  const theme = useTheme();
  const options = [
    { value: "city_1", label: "Санкт-Петербург" },
    { value: "city_2", label: "Нижний новгород" },
    { value: "city_3", label: "Москва" },
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
        <Select defaultValue={options} styles={colorStyles} options={options} />
      </div>
    </header>
  );
};
export { Header };
