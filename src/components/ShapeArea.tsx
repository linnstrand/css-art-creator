import { useAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { shapeAtom } from '../atoms';
import { ShapeSegment } from './ShapeSegment';

export const ShapeArea = () => {
  const [shape, setShape] = useAtom(shapeAtom);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    let height = 0;
    let width = 0;
    [...ref.current.children].forEach((e) => {
      if (e instanceof HTMLElement) {
        height = Math.max(height, e.offsetHeight + e.offsetTop);
        width = Math.max(width, e.offsetWidth + e.offsetWidth);
      }
    });
    setSize({ height: height, width: width });
  }, [shape]);

  return (
    <>
      <div
        className="relative border-dashed border-[rgb(95,162,255)]"
        style={{ width: `${size.width}px`, height: `${size.height}px` }}
      >
        <div className="relative" ref={ref}>
          {shape.map((d, i) => (
            <ShapeSegment key={i} style={d} ref={ref2} />
          ))}
        </div>
      </div>
    </>
  );
};
