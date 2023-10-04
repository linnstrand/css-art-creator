import React from "react";
import { useAtom } from "jotai";
import { activeShardAtom } from "@/app/atoms";
import styled from "styled-components";

const BaseInput = styled.input`
  display: block;
  padding: 0.25rem 0.25rem;
  font-size: 1rem;
  line-height: 1.2;
  background-clip: padding-box;
  border: 1px solid rgb(222 226 230);
  border-radius: 0.15rem;
  margin-top: 0.25rem;
  &:focus {
    border-color: #86b7fe;
    outline: 1px solid blue;
  }
`;

const InputWrapper = styled.div`ß
  margin-bottom: 0.5rem;
`;

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
      <InputWrapper>
        <label>
          Border Top:
          <BaseInput
            type="number"
            name="borderTopWidth"
            value={activeShard.borderTopWidth}
            onChange={handleChange}
          />
        </label>
      </InputWrapper>
      <InputWrapper>
        <label>
          Border Right:
          <BaseInput
            type="number"
            name="borderRightWidth"
            value={activeShard.borderRightWidth}
            onChange={handleChange}
          />
        </label>
      </InputWrapper>
      <InputWrapper>
        <label>
          Border Bottom:
          <BaseInput
            type="number"
            name="borderBottomWidth"
            value={activeShard.borderBottomWidth}
            onChange={handleChange}
          />
        </label>
      </InputWrapper>
      <InputWrapper>
        <label>
          Border Left:
          <BaseInput
            type="number"
            name="borderLeftWidth"
            value={activeShard.borderLeftWidth}
            onChange={handleChange}
          />
        </label>
      </InputWrapper>
      <InputWrapper>
        <label>
          Top:
          <BaseInput
            type="number"
            name="top"
            value={activeShard.top}
            onChange={handleChange}
          />
        </label>
      </InputWrapper>
      {/* Add similar input fields for other properties */}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
