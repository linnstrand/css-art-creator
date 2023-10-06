import React from "react";
import { useAtom } from "jotai";
import { activeShardAtom } from "@/app/atoms";
import styled from "styled-components";
import { FormField } from "./FormField";

const FieldSet = styled.fieldset`
  padding: 0.5rem;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  border: 1px solid rgb(222 226 230);
`;
const FieldsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Legend = styled.legend``;
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
      <FieldsWrapper>
        <FieldSet>
          <Legend>Position</Legend>
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
        </FieldSet>
        <FieldSet>
          <Legend>Styling</Legend>
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
        </FieldSet>
        <FieldSet>
          <Legend>Borders</Legend>
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
        </FieldSet>
        <FieldSet>
          <Legend> Colors</Legend>
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
        </FieldSet>
        <div>
          {activeShard.filter?.map((filter, i) => (
            <FieldSet key={i}>
              <Legend>Filter</Legend>
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
              >
                Color
              </FormField>
            </FieldSet>
          ))}
        </div>
      </FieldsWrapper>
    </form>
  );
};
