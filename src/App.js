import React, { useState, useEffect } from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="sydney, au" />
      <WeatherEngine location="london, gb" />
      <WeatherEngine location="alaska, us" />
    </div>
  );
}

export default App;
