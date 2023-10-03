import { atom } from "jotai";
import { ShardProperties } from "./models";
import { initialValue } from "./util";

export const activeShardAtom = atom<ShardProperties>(initialValue);
