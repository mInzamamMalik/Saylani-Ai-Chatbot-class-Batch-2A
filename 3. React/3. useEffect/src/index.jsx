import React from 'react';
import ReactDOM from 'react-dom';

import { useState, useEffect } from "react";
import axios from "axios";

let num1 = 0;



function Hi() {


  const [data, setData] = useState(0);

  useEffect(() => {
    const getWeather = () => { // get current weather 
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`)
        .then(function (response) {

          console.log("data: ", response.data);

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    getWeather();

  }, [])



  return <div>


    <h1>State variable</h1>
    {data}

    <button onClick={() => {

      setData(data + 1)

    }}>plus</button>

    <button onClick={() => {

      setData(data - 1)

    }}>minus</button>


    {(data % 2 === 0) ? <b>Even</b> : <i>Odd</i>}


  </div>;
}

ReactDOM.render(<Hi />, document.querySelector('#root'));