"use client";

import { ShardProperties } from "@/app/models";

export const diamond: ShardProperties[] = [
  {
    id: 1,
    borderRightWidth: 2.5,
    borderBottomWidth: 3,
    borderLeftWidth: 2.5,
    borderBottomColor: "green",
    filter: [
      { x: 5, color: "rgb(131, 255, 131)" },
      { x: 5, color: "rgb(131, 255, 131)" },
    ],
  },
  {
    id: 2,
    left: 2.5,
    borderTopWidth: 3,
    borderRightWidth: 2.5,
    borderLeftWidth: 2.5,
    borderTopColor: "yellow",
    filter: [{ x: 5, color: "rgb(252, 252, 146)" }],
  },
  {
    id: 3,
    top: 3,
    borderTopWidth: 10,
    borderLeftWidth: 7.5,
    borderTopColor: "blue",
  },
  {
    id: 4,
    top: 3,
    left: 7.5,
    borderTopWidth: 10,
    borderRightWidth: 7.5,
    borderTopColor: "purple",
  },
  {
    id: 5,
    top: 3,
    borderTopWidth: 3.35,
    borderRightWidth: 2.5,
    borderLeftWidth: 2.5,
    borderTopColor: "red",
    filter: [
      { x: 5, color: "pink" },
      { x: 5, color: "pink" },
    ],
  },
];
