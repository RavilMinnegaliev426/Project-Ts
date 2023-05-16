import React from "react";
import s from "./ThisDay.module.scss";
import { GlobalImageSelector } from "../../../../../accets/image/global/globalImageSelector";
type Props = {};

const ThisDay = (props: Props) => {
  return (
    <div className={s.this__Day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>20°</div>
          <div className={s.this__day_name}>tomorrow</div>
        </div>
        <div className={s.sun_wrapper}>
          <GlobalImageSelector id="sun" />
        </div>
      </div>
      <div className={s.bootom__block}>
        <div className={s.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.this__city}>
          Город: <span>Санкт-Петербург</span>
        </div>
      </div>
    </div>
  );
};

export { ThisDay };
