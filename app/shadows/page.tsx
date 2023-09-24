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
    <>
      <div
        className="shadow-shape"
        style={{ height: `${size}em`, width: `${size}em`, fontSize: "90%" }}
      >
        <div className="shard segment-1" style={{}}></div>
        <div className="shard segment-2"></div>
        <div className="shard segment-3"></div>
      </div>
      <div
        className="shadow-shape"
        style={{
          height: `${size}em`,
          width: `${size}em`,
          fontSize: "90%",
          top: "10rem",
        }}
      >
        <ShapeSegment
          height={3}
          width={5}
          shadows={2}
          color={"rgb(121, 255, 131)"}
        />
        <ShapeSegment
          height={3}
          width={5}
          shadows={2}
          color={"rgb(121, 255, 131)"}
        />
        <ShapeSegment
          height={3.3}
          width={5}
          shadows={2}
          color={"rgb(121, 255, 131)"}
        />
        <ShapeSegment
          height={3}
          width={5}
          shadows={2}
          color={"rgb(121, 255, 131)"}
        />
        <ShapeSegment
          height={3}
          width={5}
          shadows={2}
          color={"rgb(121, 255, 131)"}
        />
        <ShapeSegment
          height={3}
          width={10}
          shadows={1}
          color={"rgb(121, 255, 131)"}
        />
      </div>
    </>
  );
};

type Props2 = {
  height: number;
  width: number;
  shadows: number;
  color: string;
};

const ShapeSegment = ({ height, width, shadows }: Props2) => {
  const styles = {
    height: height + "em",
    width: width * shadows + "em",
    borderWidth: `0 ${width / 2}em ${height}em ${width / 2}em`,
    borderBottomColor: "green",
    filter: `drop-shadow(${width}em 0 rgb(131, 255, 131)) drop-shadow(${width}em 0 rgb(131, 255, 131))`,
  };

  return <div className="shard2" style={styles}></div>;
};
