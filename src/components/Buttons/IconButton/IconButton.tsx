import { FC, ReactElement } from 'react';
import classNames from 'classnames';

import defaultProps from '../../utils/variables/defaultProps';
import { TSize } from '../../utils/types/types';
import { Button } from '../Button/Button';
import styles from './IconButton.module.scss';

type TProps = React.ComponentProps<'button'> & {
  children: ReactElement;
  size?: TSize;
  label?: string;
  onClick?: () => void;
};

const IconButton: FC<TProps> = ({
  children,
  size = defaultProps.size,
  label,
  ...props
}) => (
  <Button
    {...props}
    stile="mute"
    size={size}
    className={classNames(styles.icon, styles[size])}
    body={children}
    aria-label={label}
    disablePadding
    nonTitled
  />
);

export default IconButton;
