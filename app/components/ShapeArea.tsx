"use client";
import { useEffect, useState } from "react";

type Props = {
  corners: number;
  size: number;
};

export const ShapeArea = ({ corners, size }: Props) => {
  const radius = size / 2;
  const [coords, setCoords] = useState<number[][] | undefined>();
  const [poly, setPoly] = useState("");

  useEffect(() => {
    let c = [
      [100, 100],
      [100, 100],
    ];
    switch (corners) {
      case 3:
        c = [
          [50, 0],
          [0, 100],
          [100, 100],
        ];
        break;

      default:
        break;
    }

    setCoords(c);
    const p = c.map((c) => `${c[1]}% ${c[0]}%`).join(", ");
    setPoly(`polygon(${p})`);
  }, [corners]);

  return (
    <div className="shape">
      {coords && (
        <>
          <div className="area" style={{ clipPath: poly }}></div>
          <div className="handles">
            {coords.map((c, i) => (
              <div
                key={i}
                className="handle"
                style={{ top: `${c[0]}%`, left: `${c[1]}%` }}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
