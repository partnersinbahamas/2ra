import { FC, ReactElement, useState } from 'react';
import classNames from 'classnames';

import defaultProps from '../../utils/variables/defaultProps';
import { TSize } from '../../utils/types/types';
import { wait } from '../../utils/functions';
import { Button } from '../Button/Button';
import styles from './IconButton.module.scss';

type TProps = React.ComponentProps<'button'> & {
  className?: string;
  children: ReactElement;
  size?: TSize;
  label?: string;
  onClick?: () => void;
  backgroundColor?: string;
};

const IconButton: FC<TProps> = ({
  children,
  className,
  size = defaultProps.size,
  label,
  onClick,
  backgroundColor,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const buttonBody = (
    <>
      {children}
      <span
        data-testid="touch-ripple"
        className={classNames(styles.touch, {
          [styles['touch-active']]: isPressed,
        })}
      />
    </>
  );

  const handleClick = async () => {
    if (onClick) onClick();

    await wait(500);
    setIsPressed(false);
  };

  return (
    <Button
      {...props}
      stile="mute"
      size={size}
      className={classNames(styles.icon, styles[size], className)}
      body={buttonBody}
      aria-label={label}
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      style={{ backgroundColor }}
      disablePadding
      nonTitled
    />
  );
};

export default IconButton;
