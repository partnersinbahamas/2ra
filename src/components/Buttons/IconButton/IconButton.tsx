import {
  Children,
  FC,
  ReactElement,
  cloneElement,
  useId,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';

import defaultProps from '../../utils/variables/defaultProps';
import { TSize } from '../../utils/types/types';
import { wait } from '../../utils/functions';
import { Button } from '../Button/Button';
import { Label, Wrapper } from './IconButton.styles';
import styles from './IconButton.module.scss';

export type TProps = React.ComponentProps<'button'> & {
  className?: string;
  children: ReactElement;
  size?: TSize;
  label?: string;
  onClick?: () => void;
  backgroundColor?: string;
  showLabel?: boolean;
  labelPosition?: IHorizontal | IVertical;
};

const IconButton: FC<TProps> = ({
  children,
  className,
  size = defaultProps.size,
  label,
  onClick,
  backgroundColor,
  showLabel,
  labelPosition,
  ...props
}) => {
  const uniqId = `icon-button-${useId()}`;
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const modifiedChildren = Children.map(children, child =>
    cloneElement(child, { size: size.toLocaleUpperCase() }),
  );

  const buttonBody = (
    <>
      {modifiedChildren}
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
    <Wrapper labelPosition={labelPosition}>
      {showLabel && label && (
        <Label htmlFor={uniqId} style={{ backgroundColor }}>
          {label}
        </Label>
      )}
      <Button
        id={uniqId}
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
    </Wrapper>
  );
};

export default IconButton;
