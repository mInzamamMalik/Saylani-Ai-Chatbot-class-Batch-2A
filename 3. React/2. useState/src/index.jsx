import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from "react";

let num1 = 0;



function Hi() {


  const [data, setData] = useState(0);



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


      <br />
      <br />
      <br />
      <br />


      <h1>normal javascript variable</h1>
      {num1}

      <button onClick={() => {

        num1++
        console.log("num1: ", num1);

      }}>plus</button>

      <button onClick={() => {

        num1--
        console.log("num1: ", num1);

      }}>minus</button>









    </div>;
}

      ReactDOM.render(<Hi />, document.querySelector('#root'));