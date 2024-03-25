import styled from "styled-components";

const InputWrapper = styled.label`
  width: 100%;
  font-size: 12px;
  display: flex;
  font-family: 'Poppins', sans-serif;
  flex-direction: column;
`;
const InputComponent = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 0;
  font-family: 'Poppins', sans-serif;
  &.error {
    border-color: red;
  }
  &:focus {
    outline: none;
    border-color: #1092ce;
  }
`;
const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 600;
`;
const Error = styled.span`
  color: red;
`;
export{ InputWrapper, InputComponent, Label, Error };