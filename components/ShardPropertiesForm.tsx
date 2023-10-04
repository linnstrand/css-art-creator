import React from "react";
import { useAtom } from "jotai";
import { activeShardAtom } from "@/app/atoms";
import styled from "styled-components";
import { FormField } from "./FormField";

const FieldSet = styled.fieldset`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border: 1px solid rgb(222 226 230);
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
        <Legend>Position</Legend>
        <FormField
          type="number"
          name="top"
          value={activeShard.top}
          onChange={handleChange}
        >
          Top
        </FormField>
        <FormField value={activeShard.left} onChange={handleChange} name="left">
          Left
        </FormField>
      </FieldSet>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
