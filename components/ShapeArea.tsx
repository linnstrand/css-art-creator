"use client";
import { ShapeSegment } from "@/components/ShapeSegment";
import { diamond } from "./diamond";

export const ShapeArea = () => {
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
