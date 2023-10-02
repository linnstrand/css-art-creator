import React, { MouseEventHandler } from "react";
import { diamond } from "./diamond";
import { shapes } from "./shapes";
import { ShardPropertiesForm } from "./ShardPropertiesForm";

type Props = {};

export const ShapeMenu = (props: Props) => {
  return (
    <div className="menu">
      <h2>Shapes</h2>
      <div className="menu-shapes">
        {shapes.map((s) => (
          <div className="frame" key={s.name}>
            <ShapeMenuItem style={s.style} />
          </div>
        ))}
      </div>
      <h2>Combined</h2>
      <div className="menu-shapes">
        <div className="frame">
          <ShapeMenuItem
            style={{
              borderTopWidth: 4,
              left: 1.6,
              borderRightWidth: 0,
              borderBottomWidth: 0,
              borderLeftWidth: 2.5,
              borderTopColor: "teal",
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
              borderLeftColor: "transparent",
            }}
          />
          <ShapeMenuItem
            style={{
              borderTopWidth: 4,
              left: 4.1,
              borderRightWidth: 2.5,
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderTopColor: "#ff8ca0",
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
              borderLeftColor: "transparent",
            }}
          />
        </div>
        <div className="frame">
          <ShapeMenuItem
            style={{
              borderTopWidth: 0,
              left: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1.4,
              borderLeftWidth: 1,
              borderTopColor: "transparent",
              borderRightColor: "transparent",
              borderBottomColor: "green",
              borderLeftColor: "transparent",
              filter: { amount: 2, color: "rgb(131, 255, 131)" },
            }}
          />
        </div>
      </div>
      <div>
        <h2>Shards</h2>
        <div className="menu-item">
          <ShardPropertiesForm />
        </div>
      </div>
    </div>
  );
};

const ShapeMenuItem = ({ style }: any) => {
  const select: MouseEventHandler<HTMLDivElement> = (event) => {
    console.log("click");
  };

  return (
    <div
      onClick={select}
      className="shard"
      style={{
        ...style,
        top: style.top && style.top + "em",
        height: style.height && style.height + "em",
        width: style.width && style.width + "em",
        left: style.left && style.left + "em",
        borderTopWidth: style.borderTopWidth + "em",
        borderRightWidth: style.borderRightWidth + "em",
        borderBottomWidth: style.borderBottomWidth + "em",
        borderLeftWidth: style.borderLeftWidth + "em",
      }}
    ></div>
  );
};
