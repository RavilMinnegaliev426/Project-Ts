import React from "react";

type Props = {};

async function Api() {
  const Apikey = "14eb8319ec32a270aaceb55aa393688b";
  let city = "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}`;

  let response = await fetch(url);
  let result = await response.json();

  return console.log(result);
}

Api();
