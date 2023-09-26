"use client";
import { MouseEventHandler, useReducer, useState } from "react";

const initialState = {
  id: 0,
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  borderTopColor: "transparent",
  borderRightColor: "transparent",
  borderBottomColor: "transparent",
  borderLeftColor: "transparent",
  top: 0,
  left: 0,
  filter: "",
};

export const ShapeSegment = ({ style }: any) => {
  const reducer = (state: any, action: { type: any }) => {
    switch (action.type) {
      case "up":
        return {
          ...state,
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          borderLeftColor: "transparent",
        };
      case "down":
        return {
          ...state,
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          borderLeftColor: "transparent",
        };
    }
  };
  const [active, setActive] = useState(false);

  const select: MouseEventHandler<HTMLDivElement> = (event) => {
    console.log("click");
    setActive(!active);
  };

  return (
    <div
      onClick={select}
      className="shard"
      style={{
        ...style,
        outline: active ? "2px dashed rgb(0 20 145 / 50%)" : "",
        zIndex: active ? 20 : style.zIndex,
        opacity: active ? 0.7 : style.opacity,
        filter: active ? "none" : style.filter,
        backgroundColor: active
          ? "rgb(0 155 255 / 35%)"
          : style.backgroundColor,
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
