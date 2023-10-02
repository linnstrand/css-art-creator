"use client";
import { ShapeSegment } from "@/components/ShapeSegment";
import { diamond } from "./diamond";

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
