import React from "react";
import s from "./Days.module.scss";
import { GlobalSVGSelector } from "../../../../../accets/image/global/globalImageSelector";
import { dayMas } from "./Days";

export const Card = (day: dayMas) => {
  console.log(day);
  const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  let date1 = new Date(day.time);
  const month = [
    "Янв",
    "Фев",
    "Март",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сент",
    "Окт",
    "Нояб",
    "Дек",
  ];
  return (
    <div className={s.card}>
      <div className={s.day}>{days[date1.getDay()]}</div>
      <div className={s.day__info}>{`${date1.getDate()} ${
        month[date1.getMonth()]
      }`}</div>
      <div className={s.img}>
        <GlobalSVGSelector id={day.weathercode} />
      </div>
      <div className={s.temp__day}>{Math.round(day.temp_max)}°</div>
      <div className={s.temp__night}>{Math.round(day.temp_min)}°</div>
      <div className={s.info}>Ветер {day.wind_max} М/c</div>
    </div>
  );
};
