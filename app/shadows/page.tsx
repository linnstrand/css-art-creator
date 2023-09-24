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
      style={{ height: `${size}em`, width: `${size}em`, fontSize: "90%" }}
    >
      <div className="shard segment-1" style={{}}></div>
      <div className="shard segment-2"></div>
      <div className="shard segment-3"></div>
      <ShapeSegment />
    </div>
  );
};

type Props2 = {
  height: number;
  width: number;
  shadows: number;
};

const ShapeSegment = ({ height, width, shadows }: Props2) => {
  const styles = {
    height: height + "em",
    width: 3 * shadows + "em",
  };

  return <div className="shard segment-3" style={styles}></div>;
};
