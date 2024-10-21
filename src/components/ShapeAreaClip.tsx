import { DragEventHandler, useEffect, useState } from 'react';

type Props = {
  corners: number;
  size: number;
};

const getShape = (corners: number) => {
  switch (corners) {
    case 3:
      return [
        { x: 50, y: 0 },
        { x: 0, y: 100 },
        { x: 100, y: 100 },
      ];
      break;

    default:
      return [
        { x: 50, y: 0 },
        { x: 0, y: 100 },
      ];
  }
};

export const ShapeAreaClip = ({ corners, size }: Props) => {
  const [coords, setCoords] = useState<
    { x: number; y: number }[] | undefined
  >();
  const [poly, setPoly] = useState('');

  useEffect(() => {
    const radius = size / 2;
    const c = getShape(corners);
    setCoords(c);
    const p = c.map((c) => `${c.x}% ${c.y}%`).join(', ');
    setPoly(`polygon(${p})`);
  }, [corners, size]);

  return (
    <div className="shape" style={{ height: `${size}em`, width: `${size}em` }}>
      {coords && (
        <>
          <div className="area" style={{ clipPath: poly }}></div>
          <div className="handles">
            {coords.map((c, i) => (
              <DragHandle c={c} key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

function DragHandle({ c }: { c: { x: number; y: number } }) {
  const dropped: DragEventHandler<HTMLDivElement> = (event) => {};

  const dragging: DragEventHandler<HTMLDivElement> = (event) => {
    console.log('dragging');
  };

  return (
    <div
      draggable
      onDragEnd={dropped}
      onDrag={dragging}
      className="handle"
      style={{
        top: `${c.y}%`,
        left: `${c.x}%`,
      }}
    ></div>
  );
}
