import React from 'react';
import ReactDOM from 'react-dom';

import { useState, useEffect } from "react";
import axios from "axios";

let num1 = 0;



function Hi() {


  const [data, setData] = useState(0);
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState({});



  const submitHandler = (e) => {
    e.preventDefault();

    console.log("city: " + cityName);

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`)
      .then(function (response) {

        console.log("data: ", response.data);

        setWeather(response.data)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(() => {
    const getWeather = () => { // get current weather 
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`)
        .then(function (response) {

          console.log("data: ", response.data);
          setWeather(response.data)

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
    getWeather();
  }, [])



  return <div>


    <div>State variable</div>
    {data}

    <button onClick={() => {

      setData(data + 1)

    }}>plus</button>

    <button onClick={() => {

      setData(data - 1)

    }}>minus</button>


    {(data % 2 === 0) ? <b>Even</b> : <i>Odd</i>}



    <hr />


    <h1>
      weather app:
    </h1>

    <form onSubmit={submitHandler}>

      <input
        type="text"
        placeholder='enter your city name'
        onChange={(e) => {
          setCityName(e.target.value)
        }}
      />

      <button type="submit">Get Weather</button>

    </form>

    <br />

    {(weather?.name)?

      <div>
        <div>Weather of {weather?.name}</div>
        <div>Current Temp {weather?.main?.temp}</div>
      </div>
      :
      null
    }

  </div>;
}

ReactDOM.render(<Hi />, document.querySelector('#root'));