import React from 'react';
import { AvatarSlots, Badge } from '@mui/material';
import classNames from 'classnames';

import { PropsAvatar } from '../utils/types/props/avatar';
import { TStringOrStatus } from '../utils/types/types';
import defaultProps from '../utils/variables/defaultProps';

import styles from './Avatar.module.scss';
import useModuleExtention from '../../hooks/useModuleExtention';
import { useIDS } from '../../providers/IDSProvider';
import useMute from '../../hooks/useMute';
import { AvatarComponent, BoxComponent } from '../utils/variables/components';

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
  badged,
  disabled,
  badgeContent,
  anchorOrigin = defaultProps.anchorOrigin,
  size = defaultProps.size,
  status = defaultProps.status,
  stile = defaultProps.stile,
  onClick,
  src,
  className,
  ...props
}) => {
  const { muteState } = useMute(stile);
  const { stylesExtention } = useIDS();
  const moduleExtention = useModuleExtention(
    stylesExtention as TStylesExtension,
  ).moduleExtentionState;

  const fullName = `${firstName} ${lastName}`;

  const classes = {
    wrapper: className && moduleExtention ? className['wrapper'] : className,
    avatar:
      className && moduleExtention
        ? className['avatar']
        : `${className}-avatar`,
    abbreviation:
      className && moduleExtention
        ? className['abbreviation']
        : `${className}-abbreviation`,
    badge:
      className && moduleExtention ? className['badge'] : `${className}-badge`,
  };

  const styleses = {
    avatar: stile && !muteState && styles[`avatar-${stile}`],
    badge: badged && styles[`badge`],
    status: status && badged && !muteState && styles[status],
  };

  if (!badged) {
    return (
      <div className={classes.wrapper}>
        <AvatarComponent
          {...props}
          data-testid="avatar"
          stile={stile && stile}
          disabled={disabled}
          onClick={onClick}
          alt={fullName}
          src={src}
          className={classNames(styles[size], styleses.avatar, classes.avatar)}
        >
          <span
            data-testid="avatar-abbreviation"
            className={classes.abbreviation}
          >
            {firstName && lastName
              ? `${firstName[0]}${lastName[0]}`
              : abbreviation}
          </span>
        </AvatarComponent>
      </div>
    );
  }

  return (
    <Badge
      className={classes.wrapper}
      overlap="circular"
      badgeContent={
        <BoxComponent
          data-testid="badge"
          status={status}
          disabled={disabled}
          className={classNames(styleses.badge as string, styleses.status)}
        >
          {badgeContent}
        </BoxComponent>
      }
      anchorOrigin={anchorOrigin}
    >
      <AvatarComponent
        {...props}
        data-testid="avatar"
        stile={stile && stile}
        disabled={disabled}
        onClick={onClick}
        alt={fullName}
        src={src}
        className={classNames(styles[size], styleses.avatar, classes.avatar)}
      >
        <span
          data-testid="avatar-abbreviation"
          className={classes.abbreviation}
        >
          {firstName && lastName
            ? `${firstName[0]}${lastName[0]}`
            : abbreviation}
        </span>
      </AvatarComponent>
    </Badge>
  );
};
