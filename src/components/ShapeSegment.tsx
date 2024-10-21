import { useAtom } from 'jotai';
import { useState, useEffect, forwardRef } from 'react';
import { ShardProperties } from '../models';
import { activeShardAtom } from '../atoms';
import { getShardCSS, initialValue } from '../util';

interface Props {
  style: ShardProperties;
}

export const ShapeSegment = forwardRef<HTMLDivElement, Props>(
  ({ style }, ref) => {
    const [activeShard, setActiveShard] = useAtom(activeShardAtom);
    const [css, setCss] = useState(() => getShardCSS(style));
    const active = activeShard.id === style.id;

    useEffect(() => {
      if (active) {
        setCss(getShardCSS(activeShard));
      }
    }, [style, activeShard, active]);

    return (
      <>
        <div
          ref={ref}
          onClick={() => setActiveShard({ ...initialValue, ...style })}
          className="shard"
          style={css}
        ></div>
        {active && (
          <div
            ref={ref}
            onClick={() => setActiveShard({ ...initialValue, ...style })}
            className="shard"
            style={{
              ...css,
              filter: 'none',
              pointerEvents: 'none',
              outline: '1px dashed rgb(0 20 145 )',
              backgroundColor: 'rgb(0 155 255 )',
              opacity: 0.5,
              zIndex: 20,
            }}
          ></div>
        )}
      </>
    );
  }
);
ShapeSegment.displayName = 'ShapeSegment';
