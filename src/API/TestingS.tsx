import { useState, useEffect } from "react";
import axios from "axios";
export function TestingS() {
  const [data, setData]: any = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=14eb8319ec32a270aaceb55aa393688b"
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  let a;
  data.main != undefined ? (a = data.main.temp) : (a = "loading");
  return <div>{a}</div>;
}
