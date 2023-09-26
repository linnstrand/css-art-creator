"use client";
import { ShapeAreaClip } from "../components/ShapeAreaClip";

export default function Home() {
  return (
    <main>
      <div className="container">
        <ShapeAreaClip corners={3} size={10} />
      </div>
    </main>
  );
}
