import React from 'react';
import classNames from 'classnames';
import { Avatar as AvatarComponent, AvatarSlots, Badge, Box } from '@mui/material';

import { PropsAvatar } from '../utils/types/props/avatar';

import styles from './Avatar.module.scss';
import { TStringOrStatus } from '../utils/types/types';
interface IProps extends PropsAvatar {
  /**
   * Instead of setting first and last name, you can also set an abbreviation prop.
   */
  abbreviation: string;
  /**
   * Path to image.
   */
  src?: string;
  /**
   * Details on MaterialUI.
   */
  slots?: AvatarSlots;
  /**
   * You definitely can attach your own statuses and style them.
   */
  status?: TStringOrStatus;
}

export const Avatar: React.FC<IProps> = ({
  firstName,
  lastName,
  abbreviation,
  backgroundColor,
  badged,
  disabled,
  badgeContent,
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
  size = 'medium',
  status = 'default',
  stile = 'mute',
  onClick,
  src,
  ...props
}) => {
  const { className } = props;
  const fullName = `${firstName} ${lastName}`;

  if (!badged) {
    return (
      <div className={`${className} ${styles[stile]}`}>
        <AvatarComponent
          {...props}
          src={src}
          data-name="avatar"
          data-testid="avatar"
          data-stile={stile && stile}
          aria-disabled={disabled}
          alt={fullName}
          sx={{ backgroundColor }}
          onClick={onClick}
          className={classNames(styles[size], `${className}-avatar`)}
        >
          <span
            data-name="abbreviation"
            data-testid="avatar-abbreviation"
            className={`${className}-abbreviation`}
          >
            {firstName && lastName ? `${firstName[0]}${lastName[0]}` : abbreviation}
          </span>
        </AvatarComponent>
      </div>
    );
  }

  return (
    <Badge
      className={`${className} ${styles[stile]}`}
      overlap="circular"
      badgeContent={
        <Box
          data-testid="badge"
          data-name="badge"
          data-status={status}
          aria-disabled={disabled}
          className={`${className}-badge ${className}-badge-${status}`}
        >
          {badgeContent}
        </Box>
      }
      anchorOrigin={anchorOrigin}
    >
      <AvatarComponent
        {...props}
        src={src}
        data-name="avatar"
        data-testid="avatar"
        aria-disabled={disabled}
        data-stile={stile && stile}
        alt={`${firstName} ${lastName}`}
        sx={{ backgroundColor }}
        onClick={onClick}
        className={classNames(styles[size], `${className}-avatar`)}
      >
        <span
          data-name="abbreviation"
          data-testid="avatar-abbreviation"
          className={`${className}-abbreviation`}
        >
          {firstName && lastName ? `${firstName[0]}${lastName[0]}` : abbreviation}
        </span>
      </AvatarComponent>
    </Badge>
  );
};
