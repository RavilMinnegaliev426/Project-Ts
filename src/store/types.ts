export type Weather = {
  main: {
    temp: number;
  };
  weather: [
    {
      main: string;
    }
  ];
  name: string;
  timezone: number;
};
