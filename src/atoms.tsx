import { atom } from 'jotai';
import { ShardProperties } from './models';
import { initialValue } from './util';
import { diamond } from './templates/diamond';

export const activeShardAtom = atom<ShardProperties>(initialValue);
export const shapeAtom = atom<ShardProperties[]>(diamond);
