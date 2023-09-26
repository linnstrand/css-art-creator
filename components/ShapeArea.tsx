"use client";
import { ShapeSegment } from "@/components/ShapeSegment";

export const diamond = [
  {
    id: 1,
    borderTopWidth: 0,
    borderRightWidth: 2.5,
    borderBottomWidth: 3,
    borderLeftWidth: 2.5,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "green",
    borderLeftColor: "transparent",
    filter:
      "drop-shadow(5em 0 rgb(131, 255, 131)) drop-shadow(5em 0 rgb(131, 255, 131))",
  },
  {
    id: 2,
    left: 2.5,
    borderTopWidth: 3,
    borderRightWidth: 2.5,
    borderBottomWidth: 0,
    borderLeftWidth: 2.5,
    borderTopColor: "yellow",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    filter: "drop-shadow(5em 0 rgb(252, 252, 146))",
  },
  {
    id: 3,
    top: 3,
    borderTopWidth: 10,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 7.5,
    borderTopColor: "blue",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
  },
  {
    id: 4,
    top: 3,
    left: 7.5,
    borderTopWidth: 10,
    borderRightWidth: 7.5,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderTopColor: "purple",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
  },
  {
    id: 5,
    top: 3,
    left: 0,
    borderTopWidth: 3.35,
    borderRightWidth: 2.5,
    borderBottomWidth: 0,
    borderLeftWidth: 2.5,
    borderTopColor: "red",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    filter: "drop-shadow(5em 0em pink) drop-shadow(5em 0em pink)",
  },
];
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
