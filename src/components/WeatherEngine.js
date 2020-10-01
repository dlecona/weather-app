import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

import WeatherCard from "./weatherCard/component";

const WeatherEngine = ({ location }) => {
  //init our state variables
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    //displays and stores specific city weathers
    temp: null,
    city: null,
    condition: null,
    country: null
  });

  //defining the data fetching func
  const getWeather = async q => {
    setQuery(""); //reset query to be empty
    setLoading(true); //set loading to true while fetching results
    //Attempt to retrieve the data requested, if possible, catch error if not
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=e3b5c85ec4046c0014493ffe7a050476`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
      <div style={{ color: "black" }}>
        There has been an error! <br />
        <button onClick={() => setError(false)}>Reset!</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "240px",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <PulseLoader size={15} color="purple" />
      </div>
    );
  }

  return (
    <WeatherCard
      temp={weather.temp}
      condition={weather.condition}
      city={weather.city}
      country={weather.country}
      getWeather={getWeather}
    />
  );
};
export default WeatherEngine;
