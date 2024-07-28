import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from 'react';
import { BlurFilter } from '@pixi/filter-blur';
import { TextStyle } from '@pixi/text';
import { Graphics } from '@pixi/graphics';
// @pixi/events를 import 해야 이벤트 사용 가능 @pixi/react 는 7.20 버전부터 eventMode를 쓰니깐 현재는 이렇게할 수밖에 없음
import '@pixi/events';
import {
  PixiComponent,
  Stage,
  Container,
  Sprite,
  Text,
  AnimatedSprite,
} from '@pixi/react';

interface RectangleProps {
  x: number;
  y: number;
  width: number;
  height: number;
  color: number;
  onClick?: () => void;
}

function Pixi() {
  const blurFilter = useMemo(() => new BlurFilter(2), []);
  const coinRef = useRef<any>(null);
  const [score, setScore] = useState(0);

  const handleClick = useCallback(() => {
    setScore(prev => ++prev);
    console.log(score);
  }, [score]);

  const Rectangle = PixiComponent<RectangleProps, Graphics>('Rectangle', {
    create: () => new Graphics(),
    applyProps: (ins, _, props) => {
      ins.x = props.x;
      ins.beginFill(props.color);
      ins.drawRect(props.x, props.y, props.width, props.height);
      ins.endFill();
    },
  });

  console.log(coinRef, 'ref 확인');

  console.log(blurFilter);
  return (
    <section>
      <h2>Pixi Example</h2>
      {/* canvas */}
      {/* Stage 속성 width, height, onMount, onUnmount  */}
      <div>
        <p>score :{score}</p>
      </div>
      <Stage
        width={300}
        height={300}
        options={{ backgroundColor: 0xeef1f5 }}
        onMount={() => {
          console.log('마운트될 때 실행됨');
        }}
        onUnmount={() => {
          console.log('언마운트될 때 실행됨');
        }}>
        <Container position={[150, 150]} width={300} height={300}>
          <Sprite
            image="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsb2ZmaWNlNV9pbGx1c3RyYXRpb25fb2ZfYml0Y29pbl9pY29uX2xvZ29faXNvbGF0ZWRfb25fd185NmJjNzhjZC1iZGI1LTQxNjktOWZmYi0yMjY3MWRiZjBiOTQucG5n.png"
            width={300}
            height={300}
            anchor={0.5}
            x={0}
            y={0}
            ref={coinRef}
            interactive={true}
            cursor="pointer"
            pointerdown={handleClick}
          />
          {/* <Rectangle x={0} y={0} width={300} height={300} color={0xff0000} /> */}
        </Container>
      </Stage>
    </section>
  );
}

export default Pixi;
