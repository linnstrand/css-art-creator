import React, { useState } from "react";
import { ShardProperties } from "./ShapeArea";
import { useAtom, atom } from "jotai";
import { activeShardAtom } from "@/app/atoms";

export const ShardPropertiesForm = () => {
  // const [activeShard, setActiveShard] = useState<ShardProperties>(initialState);
  const [activeShard, setActiveShard] = useAtom(activeShardAtom);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setActiveShard({ ...activeShard, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send activeShard to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Border Top:
          <input
            type="number"
            name="borderTopWidth"
            value={activeShard.id}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Border Right:
          <input
            type="number"
            name="borderRightWidth"
            value={activeShard.id}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Border Bottom:
          <input
            type="number"
            name="borderBottomWidth"
            value={activeShard.id}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Border Left:
          <input
            type="number"
            name="borderLeftWidth"
            value={activeShard.id}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Top:
          <input
            type="number"
            name="top"
            value={activeShard.top}
            onChange={handleChange}
          />
        </label>
      </div>
      {/* Add similar input fields for other properties */}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
