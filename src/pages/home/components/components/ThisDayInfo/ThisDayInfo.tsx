import React from "react";
import cloud from "../../../../../accets/Image-cart/cloud.png";
import s from "./ThisDayInfo.module.scss";
import ThisDayItem from "./ThisDayItem";
import { selectCurrentWeatherData } from "../../../../../hooks/selectCurrentWeatherData";
import { useSelector } from "react-redux";
type Props = {};

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}
export const ThisDayInfo = (props: Props) => {
  const { weather } = useSelector(selectCurrentWeatherData);
  const wind = `${weather.wind.speed} м/с угол направления ветра: ${weather.wind.deg}`;
  const precipitation = `${weather.main.humidity}%`;
  const pressure = `${Math.round(
    weather.main.pressure * 0.750062
  )} мм ртутного столба - нормальное`;
  const temp = `${weather.main.temp}° - ощущается как ${Math.round(
    weather.main.feels_like
  )}°`;
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: temp,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: pressure,
    },
    {
      icon_id: "precipitation",
      name: "Влажность",
      value: precipitation,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: wind,
    },
  ];
  return (
    <div className={s.this__Day_info}>
      <div className={s.this__Day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="cloud"></img>
    </div>
  );
};
