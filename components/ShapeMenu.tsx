import React from "react";
import { ShapeSegment } from "./ShapeSegment";
import { diamond } from "./ShapeArea";

type Props = {};

const shapes = [
  {
    name: "triangle",
    style: {
      borderTopWidth: 0,
      borderRightWidth: 2.5,
      borderBottomWidth: 4,
      borderLeftWidth: 2.5,
      borderTopColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor: "green",
      borderLeftColor: "transparent",
      filter: "",
    },
  },
  {
    name: "triangle_right",
    style: {
      borderTopWidth: 4,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 5,
      borderTopColor: "blue",
      borderRightColor: "transparent",
      borderBottomColor: "transparent",
      borderLeftColor: "transparent",
    },
  },
  {
    name: "test",
    style: {
      borderRadius: "50%",
      height: 4,
      width: 4,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      backgroundColor: "yellow",
    },
  },
];

export const ShapeMenu = (props: Props) => {
  return (
    <div className="menu">
      <h2>Shapes</h2>
      <div className="menu-shapes">
        {shapes.map((s) => (
          <div className="frame" key={s.name}>
            <ShapeSegment style={s.style} />
          </div>
        ))}
      </div>
      <div>
        <h2>Shards</h2>
        {diamond.map((d) => (
          <div className="menu-item" key={d.id}>
            {/* {Object.keys(d).map((k) => (
              <div key={k}>
                {k}: {d[k]}
              </div>
            ))} */}
          </div>
        ))}
      </div>
    </div>
  );
};
