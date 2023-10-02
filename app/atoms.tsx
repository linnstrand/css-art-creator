import { atom } from "jotai";
export interface ShardProperties {
  id: number;
  top: number;
  left: number;
  borderTopWidth: number;
  borderRightWidth: number;
  borderBottomWidth: number;
  borderLeftWidth: number;
  borderTopColor: string;
  borderRightColor: string;
  borderBottomColor: string;
  borderLeftColor: string;
  borderRadius?: string;
  backgroundColor?: string;
  height?: number;
  width?: number;
  filter?: { x?: number; y?: number; color: string }[];
}

export const activeShardAtom = atom<ShardProperties>({
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
});
