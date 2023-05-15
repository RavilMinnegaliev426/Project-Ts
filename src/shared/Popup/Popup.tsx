import React from "react";
import s from "./Popup.module.scss";
import { Item } from "../../pages/home/components/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../pages/home/components/components/ThisDayInfo/ThisDayItem";
import { GlobalSVGSelector } from "../../accets/image/global/globalImageSelector";

interface Props {
  items: Item[];
}

export const Popup = () => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>Среда</div>
          <div className={s.img}>
            <GlobalSVGSelector id="sun" />
          </div>
          <div className={s.day__time}>
            Время:<span>21:54</span>
          </div>
          <div className={s.day__city}>
            Город: <span>Санкт-Петербург</span>
          </div>
        </div>
        <div className={s.this__Day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSVGSelector id="close" />
        </div>
      </div>
    </>
  );
};
