import React from "react";
import s from "./Days.module.scss";
import { GlobalSVGSelector } from "../../../../../accets/image/global/globalImageSelector";
import { dayMas } from "./Days";

export const Card = (day: dayMas) => {
  console.log(day);
  return (
    <div className={s.card}>
      <div className={s.day}>{day.time}</div>
      <div className={s.day__info}>{day.time}</div>
      <div className={s.img}>
        <GlobalSVGSelector id={day.weathercode} />
      </div>
      <div className={s.temp__day}>{day.temp_max}</div>
      <div className={s.temp__night}>{day.temp_min}</div>
      <div className={s.info}>{day.sunset}</div>
    </div>
  );
};
