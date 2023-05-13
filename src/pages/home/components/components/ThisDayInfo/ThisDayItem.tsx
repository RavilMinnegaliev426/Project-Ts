import React from "react";
import { Item } from "./ThisDayInfo";
import s from "./ThisDayInfo.module.scss";
import { IndicatorSvgSeleccor } from "../../../../../accets/image/global/IndicatorSvgSeleccor";

interface Props {
  item: Item;
}

const ThisDayItem = ({ item }: Props) => {
  const { icon_id, name, value } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSeleccor id={icon_id} />
      </div>
      <div className={s.indicator_name}>{name}</div>
      <div className={s.indicator_value}>{value}</div>
    </div>
  );
};

export default ThisDayItem;
