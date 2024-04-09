import styled from "styled-components";

import { COOL_GRAY_400, COOL_GRAY_500, RED_400,  } from "../Colors/colors";

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
  border: 2px solid ${COOL_GRAY_400};
  border-radius: 0;
  &.error {
    border-color: ${RED_400};
  }
  &:focus {
    outline: none;
    border-color: ${COOL_GRAY_500};
  }
`;
const Label = styled.label`
  margin: 0;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 0.625rem;
`;
const Error = styled.span`
  color: ${RED_400};
`;
const Heading = styled.h3`
  margin: 0;
`
export{ InputWrapper, InputComponent, Label, Error, Heading };