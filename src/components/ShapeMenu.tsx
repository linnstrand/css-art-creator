import React from 'react';
import { ShardPropertiesForm } from './ShardPropertiesForm';
import { useAtom } from 'jotai';
import { shapeAtom } from '../atoms';
import { ShardProperties } from '../models';
import { getShardCSS } from '../util';

const shapes: {
  name: string;
  style: ShardProperties;
}[] = [
  {
    name: 'triangle',
    style: {
      borderRightWidth: 40,
      borderBottomWidth: 64,
      borderLeftWidth: 40,
      borderBottomColor: 'teal',
    },
  },
  {
    name: 'triangle_right',
    style: {
      borderTopWidth: 64,
      borderLeftWidth: 80,
      borderTopColor: 'teal',
    },
  },
  {
    name: 'circle',
    style: {
      left: 10,
      borderRadius: '50%',
      height: 64,
      width: 64,
      backgroundColor: 'teal',
    },
  },
  {
    name: 'rectangle',
    style: {
      height: 64,
      left: 10,
      width: 64,
      backgroundColor: 'teal',
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
              borderTopWidth: 64,
              borderLeftWidth: 40,
              borderTopColor: 'teal',
            },
            {
              borderTopWidth: 64,
              left: 40,
              borderRightWidth: 40,
              borderTopColor: '#ff8ca0',
            },
          ]}
        />
        <ShapeMenuItem
          styles={{
            left: 0,
            borderRightWidth: 16,
            borderBottomWidth: 24,
            borderLeftWidth: 16,
            borderBottomColor: 'green',
            filter: [
              { x: 21, y: 21, color: 'rgb(131, 255, 131)' },
              { x: 21, y: 21, color: 'rgb(131, 255, 131)' },
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

const ShapeMenuItem = ({
  styles,
}: {
  styles: ShardProperties | ShardProperties[];
}) => {
  const [shape, setShape] = useAtom(shapeAtom);

  const addNew = () => {
    const item: ShardProperties[] = Array.isArray(styles)
      ? shape.map((i) => Object.assign({}, i))
      : [Object.assign({}, styles)];
    setShape([...shape, ...item]);
  };

  return (
    <div className="frame" onClick={addNew}>
      <div className="relative w-[5em] h-[4em]">
        {Array.isArray(styles) ? (
          styles.map((s, i) => (
            <div className="shard" key={i} style={getShardCSS(s)}></div>
          ))
        ) : (
          <div className="shard" style={getShardCSS(styles)}></div>
        )}
      </div>
    </div>
  );
};
