import { ShardProperties } from "@/app/atoms";

export const shapes: {
  name: string;
  style: ShardProperties;
}[] = [
  {
    name: "triangle",
    style: {
      borderTopWidth: 0,
      borderRightWidth: 2.5,
      borderBottomWidth: 4,
      borderLeftWidth: 2.5,
      borderTopColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor: "teal",
      borderLeftColor: "transparent",
      id: 0,
      top: 0,
      left: 0,
    },
  },
  {
    name: "triangle_right",
    style: {
      borderTopWidth: 4,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 5,
      borderTopColor: "teal",
      borderRightColor: "transparent",
      borderBottomColor: "transparent",
      borderLeftColor: "transparent",
      id: 0,
      top: 0,
      left: 0,
    },
  },
  {
    name: "circle",
    style: {
      borderRadius: "50%",
      height: 4,
      width: 4,
      backgroundColor: "teal",
    },
  },
  {
    name: "rectangle",
    style: {
      height: 4,
      width: 4,
      backgroundColor: "teal",
    },
  },
];
