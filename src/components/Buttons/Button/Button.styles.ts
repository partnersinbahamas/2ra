import styled from 'styled-components';
import { TProps as TButtonProps } from './Button';
import {
  BLUE_200,
  BLUE_400,
  BLUE_500,
  COOL_GRAY_200,
  COOL_GRAY_300,
  COOL_GRAY_400,
  COOL_GRAY_500,
  CYAN_400,
  WHITE,
} from '../../Colors/colors';
import usePrime from '../../../hooks/usePrime';
import { TStile } from '../../utils/types/types';
import defaultProps from '../../utils/variables/defaultProps';
import useMute from '../../../hooks/useMute';
import { fontTuraRegularBold } from '../../utils/variables/fonts';

const prime = (stile: TStile | undefined) =>
  usePrime(stile || defaultProps.stile).primeState;
const mute = (stile: TStile | undefined) =>
  useMute(stile || defaultProps.stile).muteState;

// couldn't use prime hook cause usefined & defaultProps;
const isDefault = (stile: TStile | undefined) =>
  !mute(stile) && stile !== 'primary';

const ButtonComponent = styled.button<TButtonProps>`
  ${({ stile }) =>
    !mute(stile) &&
    `
    ${fontTuraRegularBold}
      border-radius: 3em;
      cursor: pointer;
      display: inline-block;
      line-height: 1;

      &[disabled] {
        cursor: not-allowed;
      };
    `}

  ${({ stile }) =>
    isDefault(stile) &&
    `
      background-color: ${COOL_GRAY_200};
      border: 2px solid ${COOL_GRAY_300};
      color: ${COOL_GRAY_400};

      &[disabled] {
        background-color: ${COOL_GRAY_400};
        border-color: ${COOL_GRAY_500};
        color: ${COOL_GRAY_200};
      };
    `}

  ${({ stile }) =>
    prime(stile) &&
    `
    border: 2px solid ${BLUE_400};
    background-color: ${CYAN_400};
    color: ${WHITE};

    &[disabled] {
      background-color: ${BLUE_400};
      border-color: ${BLUE_500};
      color: ${BLUE_200};
    };
  `}
`;

export { ButtonComponent };
