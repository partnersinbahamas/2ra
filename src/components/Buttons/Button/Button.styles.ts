import styled from 'styled-components';
import { TProps as TButtonProps } from './Button';
import {
  BLUE_400,
  COOL_GRAY_200,
  COOL_GRAY_300,
  COOL_GRAY_400,
  CYAN_400,
  WHITE,
} from '../../Colors/colors';
import usePrime from '../../../hooks/usePrime';
import { TStile } from '../../utils/types/types';
import defaultProps from '../../utils/variables/defaultProps';
import useMute from '../../../hooks/useMute';

const prime = (stile: TStile | undefined) =>
  usePrime(stile || defaultProps.stile).primeState;
const mute = (stile: TStile | undefined) =>
  useMute(stile || defaultProps.stile).muteState;

const ButtonComponent = styled.button<TButtonProps>`
  ${({ stile }) =>
    !mute(stile) &&
    `
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

    background-color: ${COOL_GRAY_200};
    border: 2px solid ${COOL_GRAY_300};
    color: ${COOL_GRAY_400};
  `}

  ${({ stile }) =>
    prime(stile) &&
    `
    border: 2px solid ${BLUE_400};
    background-color: ${CYAN_400};
    color: ${WHITE};
  `}
`;

export { ButtonComponent };
