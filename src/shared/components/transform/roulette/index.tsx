import React, { useState, useEffect, useCallback } from 'react';
import './index.scss';

type RouletteListType = {
  id: number;
  image: string;
  value: string;
};

type RouletteType = {
  width?: number;
  height: number;
  rotateX?: number;
  list?: RouletteListType[];
};

function Roulette(props: RouletteType) {
  const { width, height, rotateX, list } = props;

  return (
    <div className="slot-container" style={{ height: `${height}px` }}>
      <ul
        className="slot-list"
        style={{
          width: `${width}%`,
          height: `${height}px`,
          //   perspective: `1000px`,
          animation: `roll2 10s 3 linear`,
        }}>
        {list &&
          list.map((slot, index) => {
            return (
              <li
                key={index}
                className="slot"
                style={{
                  transform: `rotateX(${(360 / list.length) * index}deg) translateZ(${height}px)`,
                }}>
                <span>{slot.value}</span>
                {/* <img src={slot.image} alt="slotImg" /> */}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Roulette;
