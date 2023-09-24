"use client";
import { ShapeArea } from "./components/ShapeArea";

export default function Home() {
  return (
    <main>
      <div className="container">
        <ShapeArea corners={3} size={20} />
      </div>
    </main>
  );
}
