import s from "./Days.module.scss";
import { GlobalSVGSelector } from "../../../../../accets/image/global/globalImageSelector";
import { dayMas } from "./Days";
import { useCustomDispatch } from "../../../../../hooks/storeHooks";
import {
  setAnswerCardState,
  setAnswerCardStateDays,
  setAnswerState,
} from "../../../../../store/slices/CardAnswerSlice";

export const Card = (day: dayMas) => {
  const days2 = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
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
  const dispatch = useCustomDispatch();
  function handekClick(day: dayMas) {
    dispatch(setAnswerCardState(day));
    dispatch(setAnswerCardStateDays(days2[date1.getDay()]));
    dispatch(setAnswerState(true));
  }
  return (
    <div className={s.card} onClick={() => handekClick(day)}>
      <div className={s.day}>{days2[date1.getDay()]}</div>
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
