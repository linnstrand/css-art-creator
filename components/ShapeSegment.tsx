"use client";
import { activeShardAtom } from "@/app/atoms";
import { ShardProperties } from "@/app/models";
import { getShardCSS, initialValue } from "@/app/util";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";

export const ShapeSegment = ({ style }: { style: ShardProperties }) => {
  const [activeShard, setActiveShard] = useAtom(activeShardAtom);
  const [css, setCss] = useState(() => getShardCSS(style));
  const active = activeShard.id === style.id;

  useEffect(() => {
    if (active) {
      setCss(getShardCSS(activeShard));
    }
  }, [style, activeShard, active]);

  return (
    <div
      onClick={() => setActiveShard({ ...initialValue, ...style })}
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
