import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import "./App.css";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}`);
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="loader">
      <Audio
        height="100"
        width="80"
        radius="9"
        color="black"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
