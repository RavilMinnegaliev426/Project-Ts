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
