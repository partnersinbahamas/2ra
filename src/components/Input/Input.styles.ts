import styled from 'styled-components';

import useMute from '../../hooks/useMute';
import {
  COOL_GRAY_200,
  COOL_GRAY_300,
  COOL_GRAY_400,
  COOL_GRAY_500,
  RED_400,
} from '../Colors/colors';
import { TStile } from '../utils/types/types';
import { TProps } from './Input';

const stiled = (stile?: TStile) => stile && !useMute(stile).muteState;

const InputWrapper = styled.div<TProps>`
  width: 100%;
  font-size: 0.75rem;
  box-sizing: border-box;

  display: flex;
  font-family: 'Poppins', sans-serif;
  flex-direction: column;

  * {
    cursor: ${({ disabled }) => disabled && 'not-allowed'};
  }
`;
const InputComponent = styled.input<TProps>`
  ${({ stile }) =>
    stiled(stile) &&
    `
    transition: .5s;
    box-sizing: border-box;

    width: 100%;
    padding: 0.625rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: ${COOL_GRAY_400};
    border: 2px solid ${COOL_GRAY_300};
    border-radius: 0;
    &.error {
      border-color: ${RED_400};
    }
    &:focus {
      outline: none;
      border-color: ${COOL_GRAY_400};
      color: ${COOL_GRAY_500};
    }

    &:disabled {
      background-color: ${COOL_GRAY_400};
      border-color: ${COOL_GRAY_500};
      color: ${COOL_GRAY_200};
    }
  `}
`;
const Label = styled.label<TProps>`
  font-size: 0.6rem;

  ${({ stile, disabled }) =>
    stiled(stile) &&
    `
    transition: .5s;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 0.625rem;
    background-color: ${disabled ? COOL_GRAY_300 : COOL_GRAY_200};
    border-radius: 0.15rem;
    color: ${COOL_GRAY_500};
  `}
`;
const Error = styled.span`
  color: ${RED_400};
`;

const Heading = styled.h3<TProps>`
  margin: 3px;
  transition: 0.5s;

  ${({ stile }) => !stiled(stile) && `margin: 0`}
`;
export { InputWrapper, InputComponent, Label, Error, Heading };
