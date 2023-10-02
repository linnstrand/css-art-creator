"use client";
import { activeShardAtom } from "@/app/atoms";
import { useAtom } from "jotai";
import { MouseEventHandler, useReducer, useState } from "react";

export const ShapeSegment = ({ style }: any) => {
  const [activeShard, setActiveShard] = useAtom(activeShardAtom);
  const active = activeShard.id === style.id;

  const select: MouseEventHandler<HTMLDivElement> = (event) => {
    console.log("click");
    setActiveShard(style);
  };

  return (
    <div
      onClick={select}
      className="shard"
      style={{
        ...style,
        outline: active ? "1px dashed rgb(0 20 145 / 50%)" : "",
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
