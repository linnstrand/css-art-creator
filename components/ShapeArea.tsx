"use client";
import { shapeAtom } from "@/app/atoms";
import { ShapeSegment } from "@/components/ShapeSegment";
import { useAtom } from "jotai";

export const ShapeArea = () => {
  const [shape, setShape] = useAtom(shapeAtom);
  return (
    <>
      <div
        className="shadow-shape"
        style={{
          fontSize: "90%",
        }}
      >
        {shape.map((d) => (
          <ShapeSegment key={d.id} style={d} />
        ))}
      </div>
    </>
  );
};
