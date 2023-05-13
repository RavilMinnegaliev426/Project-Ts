import React from "react";
import s from "./Header.module.scss";
import { GlobalImageSelector } from "../accets/image/global/globalImageSelector";
import Select from "react-select";
type Props = {};

const Header = (props: Props) => {
  const options = [
    { value: "city_1", label: "Нижний новгород" },
    { value: "city_2", label: "Санкт-Петербург" },
    { value: "city_3", label: "Москва" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2);",
      width: "194px",
      hight: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
  };
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalImageSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalImageSelector id="change-theme" />
        </div>
        <Select defaultValue={options} styles={colorStyles} options={options} />
      </div>
    </header>
  );
};
export { Header };
