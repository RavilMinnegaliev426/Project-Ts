export type Weather = {
  main: {
    temp: number;
    pressure: number;
    feels_like: number;
    humidity: number;
  };
  weather: [
    {
      main: string;
    }
  ];
  wind: {
    speed: number;
    deg: number;
  };

  name: string;
  timezone: number;
};
export type CardWeather = {
  daily: {
    time: Array<string>;
    weathercode: Array<number>;
    temperature_2m_max: Array<number>;
    temperature_2m_min: Array<number>;
    sunset: Array<string>;
    windspeed_10m_max: Array<number>;
    winddirection_10m_dominant: Array<number>;
  };
};
