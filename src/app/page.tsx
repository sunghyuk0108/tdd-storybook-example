'use client';
import React, { useMemo, useState } from 'react';
import { BlurFilter } from '@pixi/filter-blur';
import { Container, PixiComponent, Sprite, Stage, Text } from '@pixi/react';

import { Graphics, LINE_CAP } from '@pixi/graphics';
import '@pixi/events';
import { margin } from 'polished';

interface RectangleProps {
  x: number;
  y: number;
  width: number;
  height: number;
  margin: number;
  color: number | string;
  index: number;
}

const Rectangle = PixiComponent<RectangleProps, Graphics>('Rectangle', {
  create: () => new Graphics(),
  applyProps: (ins, _, props) => {
    ins.x = props.x;
    ins.beginFill(props.color);
    ins.lineStyle({ cap: LINE_CAP.ROUND, width: 0 });
    ins.drawRect(
      props.x + props.margin * props.index,
      props.y,
      props.width,
      props.height,
    );
    ins.endFill();
  },
});

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

console.log(test);

import Roulette from '@/shared/components/transform/roulette';
import Pixi from '@/shared/components/pixi';

const ROULETTE_DUM = [
  { id: 1, image: 'image1', value: '1' },
  { id: 2, image: 'image1', value: '2' },
  { id: 3, image: 'image1', value: '3' },
  { id: 4, image: 'image1', value: '4' },
  { id: 5, image: 'image1', value: '5' },
  { id: 6, image: 'image1', value: '6' },
  { id: 7, image: 'image1', value: '7' },
  { id: 8, image: 'image1', value: '8' },
];

export default function Home() {
  const blurFilter = useMemo(() => new BlurFilter(4), []);
  const [click, setClick] = useState(0);

  const handleClick = () => {
    console.log('마구마구 클릭~~~');
    setClick(prev => prev + 1);
  };

  console.log(click);
  return (
    <main className="main-container">
      <h1>tdd-storybook-example</h1>

      <Stage
        options={{ backgroundColor: 0xffffff }}
        width={300}
        height={300}
        onPointerDown={handleClick}>
        <Sprite
          image="https://pixijs.io/pixi-react/img/bunny.png"
          x={150}
          y={150}
          anchor={{ x: 0.5, y: 0.5 }}
          pointerdown={handleClick}
        />
        {test.map((value, index) => {
          // 각 직사각형의 높이
          const height = 10;
          // y 좌표 계산 (위에서부터 그리기 위해 전체 높이에서 빼기)
          const y = 150 - height * index;
          const testHeight = height * index;
          console.log(y, 'y 값');
          console.log(testHeight, 'height값');
          // 좌표값이 올라가는 만큼 height 값도 비례해서 올라가면되고 margin은 x값에 주면 됨
          return (
            <Rectangle
              key={index}
              x={50} // 고정 x 좌표
              y={y} // 위에서부터 그리기 위한 y 좌표
              width={29} // 고정 너비
              height={testHeight} // 배열 값에 따른 높이
              margin={30}
              color={0x000000} // 색상
              index={index}
            />
          );
        })}

        <Container x={150} y={200}>
          <Text
            text="Hello World"
            anchor={{ x: 0.5, y: 0.5 }}
            filters={[blurFilter]}
          />
        </Container>
      </Stage>

      <div className="roulette-wrap">
        <Roulette list={ROULETTE_DUM} height={60} width={100} />
      </div>

      <div className="pixi-wrap">
        <Pixi />
      </div>
    </main>
  );
}
