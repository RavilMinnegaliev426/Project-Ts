import s from "./ThisDay.module.scss";
import { GlobalSVGSelector2 } from "../../../../../accets/image/global/globalImageSelector";
import { Weather } from "../../../../../store/types";
import { Clock } from "../UtilityFunction/Clock";
type Props = {
  weather: Weather;
};

const ThisDay = ({ weather }: Props) => {
  return (
    <div className={s.this__Day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.ceil(weather.main.temp)}°</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <div className={s.sun_wrapper}>
          <GlobalSVGSelector2 id={weather.weather[0].main} />
        </div>
      </div>
      <div className={s.bootom__block}>
        <div className={s.this__time}>
          Время: <span>{Clock()}</span>
        </div>
        <div className={s.this__city}>
          Город: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  );
};

export { ThisDay };
