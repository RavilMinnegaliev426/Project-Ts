import React, { useState } from "react";
import s from "./Popup.module.scss";
import { Item } from "../../pages/home/components/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../pages/home/components/components/ThisDayInfo/ThisDayItem";

import { useSelector } from "react-redux";
import { selectAnswerCard } from "../../hooks/selectCardAnswer";
import {
  GlobalSVGSelector,
  PopupSelector,
} from "../../accets/image/global/globalImageSelector";
import { useCustomDispatch } from "../../hooks/storeHooks";
import {
  setAnswerState,
  setSvgWeather,
} from "../../store/slices/CardAnswerSlice";
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
  console.log(Answer, Days);

  const items = [
    {
      icon_id: "sunrise",
      name: "Время восхода:",
      value: sunSetRise(cardInfo.sunrise),
    },
    {
      icon_id: "sunset",
      name: "Время заката:",
      value: sunSetRise(cardInfo.sunset),
    },
    {
      icon_id: "precipitation",
      name: "Вероятность выпадения осадков:",
      value: `${cardInfo.probability} %`,
    },
    {
      icon_id: "wind",
      name: "Максимальный Ветер:",
      value: `${cardInfo.wind_max} м/c`,
    },
  ];

  function isClose() {
    setActive(!active);
    dispatch(setAnswerState(false));
  }

  function sunSetRise(value: string) {
    console.log(value.slice(-5));
    return value.slice(-5);
  }

  function weatherToCode(value: number) {
    const weather = [
      ["Дождь", 61, 63, 65, 66, 67, 80, 81, 82],
      ["Слабый дождь", 51, 53, 55, 56, 57],
      ["Солнечно", 0, 1],
      ["Облачно", 2, 3],
      ["Туман", 45, 48],
      ["Гроза", 95, 96, 93, 99],
      ["Снежно", 71, 73, 75, 85, 86],
    ];
    for (let i = 0; i < weather.length; i++) {
      if (weather[i].includes(value)) {
        return weather[i][0];
      }
    }

    return;
  }

  return (
    <>
      <div className={Answer ? s.blur : s.blur__active}></div>
      <div className={Answer ? s.popup : s.popup__active}>
        <div className={s.day}>
          <div className={s.day__temp}>{Math.round(cardInfo.temp_max)}°</div>
          <div className={s.day__name}>{Days}</div>
          <div className={s.img}>
            <PopupSelector id={weatherToCode(cardInfo.weathercode)!} />
          </div>
          <div className={s.day__weather}>
            <span>Погода:{weatherToCode(cardInfo.weathercode)}</span>
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
          <PopupSelector id="close" />
        </div>
      </div>
    </>
  );
};
