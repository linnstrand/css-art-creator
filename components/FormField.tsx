import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

const BaseInput = styled.input<{ $type?: string }>`
  padding: 0.35rem;
  font-size: 1rem;
  line-height: 1.2;
  background-clip: padding-box;
  border: 1px solid rgb(222 226 230);
  border-radius: 0.15rem;
  margin-top: 0.25rem;
  width: ${(props) => (props.$type === "number" ? "10ch" : "auto")};
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
  flex: 1;
  margin-right: 1ch;
`;

export function FormField({
  type,
  children,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  console.log(type);
  return (
    <>
      <InputLabel>
        <InputLabelText>{children}:</InputLabelText>
        <BaseInput type={type} $type={type} {...rest} />
      </InputLabel>
    </>
  );
}
