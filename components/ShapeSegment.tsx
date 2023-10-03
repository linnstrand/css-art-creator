"use client";
import { activeShardAtom } from "@/app/atoms";
import { ShardProperties } from "@/app/models";
import { getShardCSS } from "@/app/util";
import { useAtom } from "jotai";

export const ShapeSegment = ({ style }: { style: ShardProperties }) => {
  const [activeShard, setActiveShard] = useAtom(activeShardAtom);
  const active = activeShard.id === style.id;

  const css = getShardCSS(style);

  return (
    <div
      onClick={() => setActiveShard(style)}
      className="shard"
      style={{
        ...css,
        outline: active ? "1px dashed rgb(0 20 145 / 50%)" : "",
        zIndex: active ? 20 : 1,
        opacity: active ? 0.7 : 1,
        backgroundColor: active
          ? "rgb(0 155 255 / 35%)"
          : style.backgroundColor,
      }}
    ></div>
  );
};
