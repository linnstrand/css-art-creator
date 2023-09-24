"use client";

export default function Shadows() {
  return (
    <main>
      <div className="container">
        <ShapeArea corners={3} size={10} />
      </div>
    </main>
  );
}

type Props = {
  corners: number;
  size: number;
};

const ShapeArea = ({ corners, size }: Props) => {
  return (
    <div
      className="shadow-shape"
      style={{ height: `${size}em`, width: `${size}em` }}
    >
      <div className="segment-1" style={{}}></div>
      <div className="segment-2"></div>
    </div>
  );
};
