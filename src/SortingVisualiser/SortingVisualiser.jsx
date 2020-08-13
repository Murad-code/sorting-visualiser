import React, { useState, useEffect } from "react";
import "./SortingVisualiser.scss";

import { bubbleSort } from '../SortingAlgorithms/BubbleSort.jsx';

export function SortingVisualiser() {
  const [arr, setArray] = useState([]);
  let [Num_of_bars, setBars] = useState(105);

  const PRIMARY_COLOUR = '#3bccd6';
  const SECONDARY_COLOUR = 'red';
  const ANIMATION_SPEED = 50; // value is in milliseconds

  useEffect(() => {

    resetArray();
    // eslint-disable-next-line
}, [])


const resetArray = () => {
    console.log('here' + Num_of_bars)
    const array = [];
    for (let i = 0; i < Num_of_bars; i++) {
        array.push(randomIntFromInterval(5, 400));
    }
    setArray(array);
}

  return (
    <div className="array-container">
      <header>
        <h1>Sorting Algorithms Visualiser</h1>
      </header>
      <div className="bar-chart">
        {arr.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ backgroundColor: PRIMARY_COLOUR, height: `${value}px` }}
          ></div>
        ))}
      </div>
      <div className="buttons">
        <button>Generate New Array</button>
        <button>Merge Sort</button>
        <button>Bubble Sort</button>
        <button>Quick Sort</button>
        <button>Insertion Sort</button>
      </div>
    </div>
  );
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}