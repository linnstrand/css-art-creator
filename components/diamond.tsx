"use client";

import { ShardProperties } from "@/app/models";

export const diamond: ShardProperties[] = [
  {
    id: 1,
    borderRightWidth: 40,
    borderBottomWidth: 48,
    borderLeftWidth: 40,
    borderBottomColor: "green",
    filter: [
      { x: 80, color: "rgb(131, 255, 131)" },
      { x: 80, color: "rgb(131, 255, 131)" },
    ],
  },
  {
    id: 2,
    left: 40,
    borderTopWidth: 48,
    borderRightWidth: 40,
    borderLeftWidth: 40,
    borderTopColor: "yellow",
    filter: [{ x: 80, color: "rgb(252, 252, 146)" }],
  },
  {
    id: 48,
    top: 48,
    borderTopWidth: 160,
    borderLeftWidth: 120,
    borderTopColor: "blue",
  },
  {
    id: 4,
    top: 48,
    left: 120,
    borderTopWidth: 160,
    borderRightWidth: 120,
    borderTopColor: "purple",
  },
  {
    id: 80,
    top: 48,
    borderTopWidth: 54,
    borderRightWidth: 40,
    borderLeftWidth: 40,
    borderTopColor: "red",
    filter: [
      { x: 80, color: "pink" },
      { x: 80, color: "pink" },
    ],
  },
];
