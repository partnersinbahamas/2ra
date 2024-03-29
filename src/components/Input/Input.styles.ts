import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  font-size: 0.75rem;

  display: flex;
  font-family: 'Poppins', sans-serif;
  flex-direction: column;
`;
const InputComponent = styled.input`
  width: 100%;
  padding: 0.625rem;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  border: 2px solid #ccc;
  border-radius: 0;
  &.error {
    border-color: red;
  }
  &:focus {
    outline: none;
    border-color: #1092ce;
  }
`;
const Label = styled.label`
  margin: 0;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 0.625rem;
`;
const Error = styled.span`
  color: red;
`;
export{ InputWrapper, InputComponent, Label, Error };