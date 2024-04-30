import React from 'react';
import classNames from 'classnames';
import SquareButtonElement from './StyledButton.styles';
import { PriamaryButton, SubmitButton } from './StyledButton.styles';

type TVariat = 'submit' | 'primary' | 'default';

export type TProps = {
  title?: string;
  onClick?: () => void;
  disabled?: boolean;
  radius?: number;
  valiant?: TVariat;
};

export const SquareButon: React.FC<TProps> = ({
  title = 'Button',
  onClick,
  disabled,
  radius,
  valiant,
}) => {
  switch (valiant) {
    case 'primary':
      return (
        <PriamaryButton
          className={classNames({ disabled: disabled })}
          onClick={onClick}
          disabled={disabled}
          radius={radius}
        >
          {title}
        </PriamaryButton>
      );
    case 'submit':
      return (
        <SubmitButton
          className={classNames({ disabled: disabled })}
          onClick={onClick}
          disabled={disabled}
          radius={radius}
        >
          {title}
        </SubmitButton>
      );
    default:
      return (
        <SquareButtonElement
          className={classNames({ disabled: disabled })}
          onClick={onClick}
          disabled={disabled}
          radius={radius}
        >
          {title}
        </SquareButtonElement>
      );
  }
};
