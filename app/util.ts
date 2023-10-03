import { ShardProperties } from "./models";

export const initialValue: ShardProperties = {
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
  borderRadius: "0",
  backgroundColor: "transparent",
};

const unit = "em";
const formatCSSProp = (prop: number | undefined): string => {
  return (prop ?? 0) + unit;
};

const formatCSSColor = (prop: string | undefined): string => {
  return prop ?? "transparent";
};

export const getShardCSS = (style: ShardProperties) => {
  return {
    ...initialValue,
    width: formatCSSProp(style.width),
    top: formatCSSProp(style.top),
    height: formatCSSProp(style.height),
    left: formatCSSProp(style.left),
    backgroundColor: formatCSSColor(style.backgroundColor),
    borderBottomColor: formatCSSColor(style.borderBottomColor),
    borderBottomWidth: formatCSSProp(style.borderBottomWidth),
    borderLeftColor: formatCSSColor(style.borderLeftColor),
    borderLeftWidth: formatCSSProp(style.borderLeftWidth),
    borderRightColor: formatCSSColor(style.borderRightColor),
    borderRightWidth: formatCSSProp(style.borderRightWidth),
    borderTopColor: formatCSSColor(style.borderTopColor),
    borderTopWidth: formatCSSProp(style.borderTopWidth),
    borderRadius: style.borderRadius ?? 0,
    filter: style.filter
      ?.map((f) => `drop-shadow(${f.x ?? 0}em ${f.y ?? 0}em ${f.color})`)
      .join(" "),
  };
};
