"use client";
import { shapeAtom } from "@/app/atoms";
import { ShapeSegment } from "@/components/ShapeSegment";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ContainerShape = styled.div`
  position: relative;
`;
const ShadowShape = styled.div<{ width: number; height: number }>`
  position: relative;
  border: 1px dashed rgb(95 162 255);
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const ShapeArea = () => {
  const [shape, setShape] = useAtom(shapeAtom);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    let height = 0;
    let width = 0;
    [...ref.current.children].forEach((e) => {
      if (e instanceof HTMLElement) {
        height = Math.max(height, e.offsetHeight + e.offsetTop);
        width = Math.max(width, e.offsetWidth + e.offsetWidth);
      }
    });
    setSize({ height: height, width: width });
  }, [shape]);

  return (
    <>
      <ShadowShape width={size.width} height={size.height}>
        <ContainerShape ref={ref}>
          {shape.map((d, i) => (
            <ShapeSegment key={i} style={d} ref={ref2} />
          ))}
        </ContainerShape>
      </ShadowShape>
    </>
  );
};
