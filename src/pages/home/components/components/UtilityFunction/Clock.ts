import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectCurrentWeatherData } from "../../../../../hooks/selectCurrentWeatherData";
export const Clock = function () {
  const { weather } = useSelector(selectCurrentWeatherData);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const getUTCHours = time.getUTCHours();
  let getUTCMinutes = String(time.getUTCMinutes());
  if (getUTCMinutes.length < 2) {
    getUTCMinutes = "0" + getUTCMinutes;
  }
  let getUTCSeconds = String(time.getUTCSeconds());
  if (getUTCSeconds.length < 2) {
    getUTCSeconds = "0" + getUTCSeconds;
  }
  const UTC = weather.timezone / 3600;
  let utcTime = UTC + getUTCHours;
  let str = toString();
  if (utcTime < 0) {
    str = `${Math.abs(utcTime)}:${getUTCMinutes}:${getUTCSeconds}`;
    return str;
  }
  if (utcTime >= 24) {
    utcTime = utcTime - 24;
    str = `${utcTime}:${getUTCMinutes}:${getUTCSeconds}`;
    return str;
  }
  str = `${utcTime}:${getUTCMinutes}:${getUTCSeconds}`;
  return str;
};
