import React from 'react';
import { useAtom } from 'jotai';
import { FormField } from './Form/FormField';
import { activeShardAtom } from '../atoms';

export const ShardPropertiesForm = () => {
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
      <div className="flex flex-wrap gap-2 basis-1/2">
        <fieldset className="flex flex-row gap-1 p-2 border border-gray-300">
          <legend>Position</legend>
          <FormField
            type="number"
            name="top"
            value={activeShard.top}
            onChange={handleChange}
          >
            Top
          </FormField>
          <FormField
            type="number"
            value={activeShard.left}
            onChange={handleChange}
            name="left"
          >
            Left
          </FormField>
        </fieldset>
        <fieldset className="flex flex-wrap p-2 border border-gray-300">
          <legend>Dimensions</legend>
          <FormField
            type="number"
            name="height"
            value={activeShard.height}
            onChange={handleChange}
          >
            Height
          </FormField>
          <FormField
            type="number"
            value={activeShard.width}
            onChange={handleChange}
            name="width"
          >
            Width
          </FormField>
          <FormField
            type="number"
            name="borderRadius"
            value={activeShard.borderRadius}
            onChange={handleChange}
          >
            Border Radius
          </FormField>
        </fieldset>
        <fieldset className="flex flex-wrap p-2 border border-gray-300">
          <legend>Borders</legend>
          <FormField
            type="number"
            name="borderTopWidth"
            value={activeShard.borderTopWidth}
            onChange={handleChange}
          >
            Top
          </FormField>
          <FormField
            type="number"
            name="borderRightWidth"
            value={activeShard.borderRightWidth}
            onChange={handleChange}
          >
            Right
          </FormField>
          <FormField
            type="number"
            name="borderBottomWidth"
            value={activeShard.borderBottomWidth}
            onChange={handleChange}
          >
            Bottom
          </FormField>
          <FormField
            type="number"
            name="borderLeftWidth"
            value={activeShard.borderLeftWidth}
            onChange={handleChange}
          >
            Left
          </FormField>
        </fieldset>
        <fieldset className="flex flex-wrap p-2 border border-gray-300">
          <legend> Colors</legend>
          <FormField
            value={activeShard.backgroundColor}
            onChange={handleChange}
            name="backgroundColor"
          >
            Background
          </FormField>
          <FormField
            name="borderTopColor"
            value={activeShard.borderTopColor}
            onChange={handleChange}
          >
            Top
          </FormField>
          <FormField
            name="borderRightColor"
            value={activeShard.borderRightColor}
            onChange={handleChange}
          >
            Right
          </FormField>
          <FormField
            name="borderBottomColor"
            value={activeShard.borderBottomColor}
            onChange={handleChange}
          >
            Bottom
          </FormField>
          <FormField
            name="borderLeftColor"
            value={activeShard.borderLeftColor}
            onChange={handleChange}
          >
            Left
          </FormField>
        </fieldset>
        <div>
          {activeShard.filter?.map((filter, i) => (
            <fieldset key={i}>
              <legend>Filter</legend>
              <FormField
                type="number"
                name="x"
                value={filter.x}
                onChange={handleChange}
              >
                x
              </FormField>
              <FormField
                type="number"
                value={filter.y}
                onChange={handleChange}
                name="y"
              >
                y
              </FormField>
              <FormField
                value={filter.color}
                onChange={handleChange}
                name="color"
                type="color"
              >
                Color
              </FormField>
            </fieldset>
          ))}
        </div>
      </div>
    </form>
  );
};
