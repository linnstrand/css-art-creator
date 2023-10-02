import { atom } from "jotai";

export const activeShardAtom = atom({
  id: 0,
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  borderTopColor: "transparent",
  borderRightColor: "transparent",
  borderBottomColor: "transparent",
  borderLeftColor: "transparent",
  top: 0,
  left: 0,
  filter: "",
});
