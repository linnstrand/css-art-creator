import React from "react";
import { ShardPropertiesForm } from "./ShardPropertiesForm";
import styled from "styled-components";
import { ShardProperties } from "@/app/models";
import { getShardCSS } from "@/app/util";

const shapes: {
  name: string;
  style: ShardProperties;
}[] = [
  {
    name: "triangle",
    style: {
      borderRightWidth: 2.5,
      borderBottomWidth: 4,
      borderLeftWidth: 2.5,
      borderBottomColor: "teal",
    },
  },
  {
    name: "triangle_right",
    style: {
      borderTopWidth: 4,
      borderLeftWidth: 5,
      borderTopColor: "teal",
    },
  },
  {
    name: "circle",
    style: {
      left: 0.5,
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
      left: 0.5,
      width: 4,
      backgroundColor: "teal",
    },
  },
];

export const ShapeMenu = () => {
  return (
    <div className="menu">
      <h2>Shapes</h2>
      <div className="menu-shapes">
        {shapes.map((s) => (
          <ShapeMenuItem styles={s.style} key={s.name} />
        ))}
      </div>
      <h2>Combined</h2>
      <div className="menu-shapes">
        <ShapeMenuItem
          styles={[
            {
              borderTopWidth: 4,
              borderLeftWidth: 2.5,
              borderTopColor: "teal",
            },
            {
              borderTopWidth: 4,
              left: 2.5,
              borderRightWidth: 2.5,
              borderTopColor: "#ff8ca0",
            },
          ]}
        />
        <ShapeMenuItem
          styles={{
            left: 0,
            borderRightWidth: 1,
            borderBottomWidth: 1.4,
            borderLeftWidth: 1,
            borderBottomColor: "green",
            filter: [
              { x: 1.3, y: 1.3, color: "rgb(131, 255, 131)" },
              { x: 1.3, y: 1.3, color: "rgb(131, 255, 131)" },
            ],
          }}
        />
      </div>

      <div>
        <h2>Shards</h2>
        <div className="menu-item">
          <ShardPropertiesForm />
        </div>
      </div>
    </div>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 5em;
  height: 4em;
`;

const ShapeMenuItem = ({
  styles,
}: {
  styles: ShardProperties | ShardProperties[];
}) => {
  return (
    <div className="frame">
      <Wrapper>
        {Array.isArray(styles) ? (
          styles.map((s, i) => (
            <div className="shard" key={i} style={getShardCSS(s)}></div>
          ))
        ) : (
          <div className="shard" style={getShardCSS(styles)}></div>
        )}
      </Wrapper>
    </div>
  );
};
