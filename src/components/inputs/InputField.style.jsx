import styled from "styled-components";

export const Label = styled.label`
  background-color: ${(p) => p.backgroundColor};
  color: ${(p) => p.color};
`;

export const Input = styled.input`
  border: 1px solid gray;
  padding: 9px;
  width: 400px;
  display: flex;
  margin-top: 2px;
  border-radius: 5px;
  &:disabled {
    opacity: 0.6;
  }
`;

export const Span = styled.span`
  color: red;
  position: absolute;
  display: flex;
`;
