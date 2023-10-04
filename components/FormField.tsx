import React, { InputHTMLAttributes } from "react";
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

const InputWrapper = styled.div`
  margin-bottom: 0.5rem;
`;
const InputLabel = styled.label`
  display: flex;
  align-items: center;
`;
const InputLabelText = styled.span`
  display: flex;
`;

export function FormField({
  value,
  name,
  children,
  onChange,
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputWrapper>
      <InputLabel>
        <InputLabelText>{children}:</InputLabelText>
        <BaseInput
          type="number"
          name={name}
          value={value}
          onChange={onChange}
        />
      </InputLabel>
    </InputWrapper>
  );
}
