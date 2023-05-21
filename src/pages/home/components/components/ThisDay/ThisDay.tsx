import React from "react";
import s from "./ThisDay.module.scss";
import { GlobalImageSelector } from "../../../../../accets/image/global/globalImageSelector";
import { Weather } from "../../../../../store/types";
type Props = {
  weather: Weather;
};
interface Clock {
  date: string;
  hours: string;
  minutes: string;
  seconds: string;
}
const ThisDay = ({ weather }: Props) => {
  // const [first, setfirst] = useState(second);

  var date = new Date();
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  return (
    <div className={s.this__Day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.ceil(weather.main.temp)}</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <div className={s.sun_wrapper}>
          <GlobalImageSelector id="sun" />
        </div>
      </div>
      <div className={s.bootom__block}>
        <div className={s.this__time}>
          Время:{" "}
          <span>
            {hours}:{minutes}
          </span>
        </div>
        <div className={s.this__city}>
          Город: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  );
};

export { ThisDay };
