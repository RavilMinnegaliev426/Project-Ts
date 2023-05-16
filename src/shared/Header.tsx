import React from "react";
import { useState } from "react";
import s from "./Header.module.scss";
import { GlobalImageSelector } from "../accets/image/global/globalImageSelector";
import Select from "react-select";
import { useEffect } from "react";

type Props = {};

const Header = (props: Props) => {
  const options = [
    { value: "city_1", label: "Санкт-Петербург" },
    { value: "city_2", label: "Нижний новгород" },
    { value: "city_3", label: "Москва" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme === "dark" ? "#4f4f4f" : "rgba(71, 147, 255, 0.2);",
      width: "194px",
      hight: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === "dark" ? "#fff" : "#000",
    }),
  };
  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;

    const components = [
      "--body-backgroud",
      "--components-backgroud",
      "--card-backgroud",
      "--card-box-shadow",
      "--text-color",
    ];
    components.forEach((item) => {
      root.style.setProperty(`${item}-default`, `var(${item}-${theme})`);
    });
  }, [theme]);

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
