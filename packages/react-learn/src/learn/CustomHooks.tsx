import React, { useState, useEffect } from 'react';

type Position = {
  x: number;
  y: number;
};

function usePointerPosition() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0});

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY});
    }

    window.addEventListener('pointermove', handleMove);

    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return position;
}

function useDeplayedValue(value: Position, delay: number) {
  const [delayed, setDelayed] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setDelayed(value);
    }, delay);
  }, [value, delay]);

  return delayed;
}

export function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDeplayedValue(pos1, 100);
  const pos3 = useDeplayedValue(pos2, 200);
  const pos4 = useDeplayedValue(pos3, 100);
  const pos5 = useDeplayedValue(pos4, 50);

  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

function Dot(props: {
  position: Position;
  opacity: number;
}) {
  return (
    <div style={{
      position: 'absolute',
      background: 'pink',
      borderRadius: '50%',
      opacity: props.opacity,
      transform: `translate(${props.position.x}px, ${props.position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }}/>
  );
}
