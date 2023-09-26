"use client";

import { ShapeMenu } from "@/components/ShapeMenu";
import { ShapeArea } from "../../components/ShapeArea";

export default function Shadows() {
  return (
    <main>
      <div className="container">
        <ShapeArea corners={3} size={10} />
      </div>
      <ShapeMenu />
    </main>
  );
}
