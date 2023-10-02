"use client";
import { ShapeSegment } from "@/components/ShapeSegment";
import { diamond } from "./diamond";

export interface ShardProperties {
  id: number;
  top?: number;
  left?: number;
  borderTopWidth: number;
  borderRightWidth: number;
  borderBottomWidth: number;
  borderLeftWidth: number;
  borderTopColor: string;
  borderRightColor: string;
  borderBottomColor: string;
  borderLeftColor: string;
  filter?: string;
}

interface Props {
  corners: number;
  size: number;
}

export const ShapeArea = ({ corners, size }: Props) => {
  return (
    <>
      <div
        className="shadow-shape"
        style={{
          fontSize: "90%",
        }}
      >
        {diamond.map((d) => (
          <ShapeSegment key={d.id} style={d} />
        ))}
      </div>
    </>
  );
};
