import styled from 'styled-components';
import { TProps } from './IconButton';
import { fontTuraRegular } from '../../utils/variables/fonts';
import { COOL_GRAY_200 } from '../../Colors/colors';

export const Wrapper = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  ${({ labelPosition }) => {
    switch (labelPosition) {
      case 'top':
        return `flex-direction: column`;
      case 'bottom':
        return `flex-direction: column-reverse`;
      case 'left':
        return `flex-direction: row`;
      case 'right':
        return `flex-direction: row-reverse`;
    }
  }}
`;

export const Label = styled.label`
  ${fontTuraRegular};
  background-color: ${COOL_GRAY_200};
  padding: 0 0.25rem;
  border-radius: 0.25rem;
  text-align: center;
`;
