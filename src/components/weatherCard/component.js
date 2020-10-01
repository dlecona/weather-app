import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import Location from "./location";
import Condition from "./condition";
import Icon from "./icon";

const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
  let highColor,
    lowColor = 0;
  let bg = null;

  if (temp > 12) {
    //Hot Weather
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 225;
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${Math.abs(lowColor)}, 0)
    );`;
  } else if (temp <= 12) {
    //Cold Weather
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 225;
    bg = `linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${Math.abs(lowColor)}, 255)
    );`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location getWeather={getWeather} city={city} country={country} />
        <Icon temp={temp} condition={condition} />
        <Condition temp={temp} condition={condition} />
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
