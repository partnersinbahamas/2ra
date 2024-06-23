import React from 'react';
import classNames from 'classnames';

import defaultProps from '../../utils/variables/defaultProps';
import { TSize, TStile } from '../../utils/types/types';
import { ButtonComponent } from './Button.styles';
import styles from './Button.module.scss';

export type TProps = React.ComponentProps<'button'> & {
  size?: TSize;
  type?: TButtonType;
  stile?: TStile;
  style?: React.CSSProperties;
  disabled?: boolean;
  onClick?: () => void;
  className?: any;
  title?: string;
  body?: any;
  disablePadding?: boolean;
  nonTitled?: boolean;
};

export const Button: React.FC<TProps> = ({
  size = defaultProps.size,
  type = defaultProps.buttonType,
  stile = defaultProps.stile,
  disabled,
  className,
  title = 'Button',
  body,
  disablePadding,
  nonTitled,
  ...props
}) => {
  return (
    <ButtonComponent
      {...props}
      type={type}
      disabled={disabled}
      className={classNames(styles[size], className)}
      stile={stile}
      style={{
        ...props.style,
        ...(disablePadding ? { padding: '0' } : {}),
      }}
    >
      {!nonTitled && title}
      {body && !!Object.keys(body).length && body}
    </ButtonComponent>
  );
};
