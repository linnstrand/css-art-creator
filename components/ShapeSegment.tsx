"use client";
import { ShardProperties, activeShardAtom } from "@/app/atoms";
import { useAtom } from "jotai";
import { MouseEventHandler } from "react";

export const ShapeSegment = ({ style }: { style: ShardProperties }) => {
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
        width: style.width + "em",
        outline: active ? "1px dashed rgb(0 20 145 / 50%)" : "",
        zIndex: active ? 20 : 1,
        opacity: active ? 0.7 : 1,
        filter: style.filter
          ?.map((f) => `drop-shadow(${f.x ?? 0}em ${f.y ?? 0}em ${f.color})`)
          .join(" "),
        backgroundColor: active
          ? "rgb(0 155 255 / 35%)"
          : style.backgroundColor,
        top: style.top + "em",
        height: style.height + "em",
        left: style.left + "em",
        borderTopWidth: style.borderTopWidth + "em",
        borderRightWidth: style.borderRightWidth + "em",
        borderBottomWidth: style.borderBottomWidth + "em",
        borderLeftWidth: style.borderLeftWidth + "em",
      }}
    ></div>
  );
};
