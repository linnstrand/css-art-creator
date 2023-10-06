import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

const BaseInput = styled.div<{ $type?: string }>`
  padding: 0.35rem;
  font-size: 1rem;
  line-height: 1.2;
  background-clip: padding-box;
  border: 1px solid rgb(222 226 230);
  border-radius: 0.15rem;
  margin-top: 0.25rem;
  margin-inline-end: 1em;
  width: ${(props) => (props.$type === "number" ? "10ch" : "auto")};
  &:focus {
    border-color: #86b7fe;
    outline: 1px solid blue;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 0.5rem;
  font-size: 14px;
  flex-basis: 50%;
  max-width: 50%;
`;
const InputLabel = styled.label`
  display: flex;
  flew-wrap: wrap;
  align-items: center;
`;
const InputLabelText = styled.div`
  display: flex;
  flex: 1;
  margin-inline-end: 0.5em;
`;

export function FormField({
  type,
  children,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  console.log(type);
  return (
    <InputWrapper>
      <InputLabel>
        <InputLabelText>{children}:</InputLabelText>
        <BaseInput $type={type}>
          <input type={type} {...rest} />
        </BaseInput>
      </InputLabel>
    </InputWrapper>
  );
}
