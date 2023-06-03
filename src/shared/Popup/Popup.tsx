import React, { useState } from "react";
import s from "./Popup.module.scss";
import { Item } from "../../pages/home/components/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../pages/home/components/components/ThisDayInfo/ThisDayItem";

import { useSelector } from "react-redux";
import { selectAnswerCard } from "../../hooks/selectCardAnswer";
import { GlobalSVGSelector } from "../../accets/image/global/globalImageSelector";
import { useCustomDispatch } from "../../hooks/storeHooks";
import { setAnswerState } from "../../store/slices/CardAnswerSlice";
import { Clock } from "../../pages/home/components/components/UtilityFunction/Clock";
interface Props {
  isOpen: boolean;
}
export const Popup = () => {
  const [active, setActive] = useState(true);
  const { cardInfo } = useSelector(selectAnswerCard);
  const { Answer } = useSelector(selectAnswerCard);
  const { Days } = useSelector(selectAnswerCard);
  const { city } = useSelector(selectAnswerCard);

  const dispatch = useCustomDispatch();
  console.log(cardInfo, Answer, Days);
  const items = [
    {
      icon_id: "temp",
      name: "Время заката",
      value: cardInfo.sunrise,
    },
    {
      icon_id: "pressure",
      name: "Время восхода",
      value: cardInfo.sunset,
    },
    {
      icon_id: "precipitation",
      name: "Вероятность выпадения осадков: ",
      value: "12%",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${cardInfo.wind_max} м/c`,
    },
  ];

  function isClose() {
    setActive(!active);
    dispatch(setAnswerState(false));
  }
  return (
    <>
      <div className={Answer ? s.blur : s.blur__active}></div>
      <div className={Answer ? s.popup : s.popup__active}>
        <div className={s.day}>
          <div className={s.day__temp}>{Math.round(cardInfo.temp_max)}°</div>
          <div className={s.day__name}>{Days}</div>
          <div className={s.img}>
            <GlobalSVGSelector id={cardInfo.weathercode} />
          </div>
          <div className={s.day__time}>
            <span></span>
          </div>
          <div className={s.day__city}>
            Город: <span>{city}</span>
          </div>
        </div>
        <div className={s.this__Day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close} onClick={isClose}>
          <GlobalSVGSelector id="close" />
        </div>
      </div>
    </>
  );
};
