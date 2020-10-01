import React from "react";
import styled from "@emotion/styled";

//retrieve icon image from api, -> insert into weatherIconLink to use the icon.
var icon = "";

const Icon = ({ temp, condition }) => {
  const Icon = styled.img`
    width: 45%;
  `;
  let weatherIconLink = "http://openweathermap.org/img/w/";
  const weatherConditions = {
    Clear: "01d.png",
    Clouds: "03d.png",
    Drizzle: "09d.png",
    Rain: "10d.png",
    Thunderstorm: "11d.png",
    Snow: "13d.png"
  };
  let atmosphereConditions = [
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado"
  ];
  if (atmosphereConditions.includes(condition)) {
    icon = "50d.png";
  } else {
    icon = weatherConditions[condition];
  }
  weatherIconLink += icon;
  return <Icon className="icon" src={weatherIconLink} alt="Weather Icon" />;
};

export default Icon;
