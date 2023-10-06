import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

const BaseInput = styled.div<{ $type?: string }>`
  display: flex;
  flex: 1;
  width: ${(props) => (props.$type === "number" ? "6ch" : "15ch")};
  margin-inline-end: 1rem;
  input {
    font-size: 14px;
    width: 100%;
    background-image: none;
    padding: 0.35rem;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid rgb(222 226 230);
    border-radius: 0.15rem;
    &:focus {
      border-color: #86b7fe;
      outline: 1px solid blue;
    }
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 0.5rem;
`;
const InputLabel = styled.label``;
const InputLabelText = styled.div`
  line-height: 1.5;
  margin-inline-start: 2px;
  font-size: 12px;
  color: rgb(0 0 0 / 75%);
`;

export function FormField({
  type,
  children,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputWrapper>
      <InputLabel>
        <InputLabelText>{children}</InputLabelText>
        <BaseInput $type={type}>
          <input type={type} {...rest} />
        </BaseInput>
      </InputLabel>
    </InputWrapper>
  );
}
