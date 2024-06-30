import React, { useMemo } from 'react';
import { AvatarSlots, Badge } from '@mui/material';
import classNames from 'classnames';

import useModuleExtention from '../../hooks/useModuleExtention';
import { useHD } from '../../providers/HDProvider';
import useMute from '../../hooks/useMute';
import AvatarComponent from '../2RA/AvatarComponent';
import BoxComponent from '../2RA/BoxComponent';
import Text from '../2RA/Text';
import { PropsAvatar } from '../utils/types/props/avatar';
import { TStringOrStatus } from '../utils/types/types';
import defaultProps from '../utils/variables/defaultProps';
import styles from './Avatar.module.scss';

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
  /**
   * TError
   * @type string | boolean
   */
  error?: TError;
}

export const Avatar: React.FC<IProps> = ({
  firstName,
  lastName,
  abbreviation,
  badged,
  disabled,
  error,
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
  const { stylesExtention } = useHD();
  const moduleExtention = useModuleExtention(
    stylesExtention as TStylesExtension,
  ).moduleExtentionState;

  const fullName = `${firstName} ${lastName}`;
  const isError = error ? 'true' : false;
  const name =
    firstName && lastName ? `${firstName[0]}${lastName[0]}` : abbreviation;

  const classes = useMemo(
    () => ({
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
        className && moduleExtention
          ? className['badge']
          : `${className}-badge`,
    }),
    [className, moduleExtention],
  );

  const styleses = useMemo(
    () => ({
      avatar: stile && !muteState && styles[`avatar-${stile}`],
      badge: badged && styles[`badge`],
      status: status && badged && !muteState && styles[status],
    }),
    [stile, badged, status],
  );

  if (!badged) {
    return (
      <div className={classes.wrapper}>
        <AvatarComponent
          {...props}
          aria-label={`avatar ${name}`}
          stile={stile && stile}
          disabled={disabled}
          error={isError}
          onClick={onClick}
          alt={fullName}
          src={src}
          className={classNames(
            styles[size],
            className ? classes.avatar : styleses.avatar,
          )}
        >
          <Text
            data-testid="avatar-abbreviation"
            className={classes.abbreviation}
            error={isError}
            disabled={disabled}
          >
            {name}
          </Text>
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
          error={isError}
          className={classNames(
            styleses.badge as string,
            styleses.status,
            classes.badge,
          )}
        >
          {badgeContent}
        </BoxComponent>
      }
      anchorOrigin={anchorOrigin}
    >
      <AvatarComponent
        {...props}
        aria-label={`avatar ${name}`}
        stile={stile && stile}
        error={isError}
        disabled={disabled}
        onClick={onClick}
        alt={fullName}
        src={src}
        className={classNames(
          styles[size],
          className ? classes.avatar : styleses.avatar,
        )}
      >
        <Text
          data-testid="avatar-abbreviation"
          className={classes.abbreviation}
          error={isError}
          disabled={disabled}
        >
          {name}
        </Text>
      </AvatarComponent>
    </Badge>
  );
};
