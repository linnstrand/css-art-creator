export interface ShardProperties {
  id?: number;
  top?: number;
  left?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderRadius?: string;
  backgroundColor?: string;
  height?: number;
  width?: number;
  filter?: { x?: number; y?: number; color: string }[];
}
