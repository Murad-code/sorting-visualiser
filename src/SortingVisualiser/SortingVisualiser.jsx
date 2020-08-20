import React, { useState, useEffect } from "react";
import "./SortingVisualiser.scss";

import { mergeSort } from '../SortingAlgorithms/MergeSort.jsx';
import { bubbleSort } from '../SortingAlgorithms/BubbleSort.jsx';
import { insertionSort } from '../SortingAlgorithms/InsertionSort.jsx';


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

const mergeSortAnimation = () => {
  // animations array is actually split every three values which each contain an array of two values [i, j]. The first and second value are repeated to animate the flash (changing colour) of the bars and the third value contains values for sorting the actual bars.
  const animations = mergeSort(arr)
  const arrayBars = document.getElementsByClassName('array-bar');
  for (let i = 0; i < animations.length; i++) {


      const isColourChange = i % 3 !== 2; // Every 3rd value is the sorting animation so every other time it is a colour change animation

      if (isColourChange) {
          const [barOneIndex, barTwoIndex] = animations[i];
          console.log(barTwoIndex);
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;

          const colour = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR; // To animate the flashing bars
          setTimeout(() => {
              barOneStyle.backgroundColor = colour;
              barTwoStyle.backgroundColor = colour;
          }, i * ANIMATION_SPEED);
      }
      // This happens on the third value in the array (.push k in sortingAlgorithms doMerge function)
      else {
          setTimeout(() => {
              const [barOneIndex, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIndex].style;
              barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED);
      }
  }
}

const bubbleSortAnimation = () => {
  const animations = bubbleSort(arr)
  const arrayBars = document.getElementsByClassName('array-bar');
  for (let i = 0; i < animations.length; i++) {
      const isColourChange = i % 3 !== 1; // Every 2nd value is the sorting animation so every other time it is a colour change animation
      console.log('isColourChange: ' + isColourChange);
      if (isColourChange) {
          const [barOneIndex, barTwoIndex] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;

          const colour = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR; // To animate the flashing bars
          setTimeout(() => {
              barOneStyle.backgroundColor = colour;
              barTwoStyle.backgroundColor = colour;
          }, i * ANIMATION_SPEED);
      }
      else {
          setTimeout(() => {
              // Sorting the bars 
              const [barOneIndex, barOneHeight, barTwoIndex, barTwoHeight] = animations[i];

              const barOneStyle = arrayBars[barOneIndex].style;
              const barTwoStyle = arrayBars[barTwoIndex].style;

              barOneStyle.height = `${barOneHeight}px`;
              barTwoStyle.height = `${barTwoHeight}px`;
          }, i * ANIMATION_SPEED);
      }
  }
}

const insertionSortAnimation = () => {
  const animations = insertionSort(arr);
  for (let i = 0; i < animations.length; i++) {
      const isColourChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
      const arrayBars = document.getElementsByClassName('array-bar');
      if (isColourChange === true) {
          const colour = (animations[i][0] === "comparision1") ? SECONDARY_COLOUR : PRIMARY_COLOUR;
          // eslint-disable-next-line
          const [temp, barOneIndex, barTwoIndex] = animations[i];
          console.log(barOneIndex)
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          setTimeout(() => {
              barOneStyle.backgroundColor = colour;
              barTwoStyle.backgroundColor = colour;
          }, i * ANIMATION_SPEED);
      }
      else {
          // eslint-disable-next-line
          const [temp, barIndex, newHeight] = animations[i];
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
              barStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED);
      }
  }
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
        <button onClick={mergeSortAnimation}>Merge Sort</button>
        <button onClick={bubbleSortAnimation}>Bubble Sort</button>
        <button>Quick Sort</button>
        <button onClick={insertionSortAnimation}>Insertion Sort</button>
      </div>
    </div>
  );
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}