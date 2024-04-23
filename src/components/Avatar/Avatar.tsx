import React from "react";
import classNames from "classnames";
import { Avatar as AvatarComponent, AvatarSlots, Badge, Box } from "@mui/material";

import { PropsAvatar } from "../utils/types/props/avatar";
import useMute from "../../hooks/useMute";

import styles from './Avatar.module.scss';
import { TStringOrStatus } from "../utils/types/types";
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
  stile = 'default',
  onClick,
  src,
  ...props
}) => {
  const fullName = `${firstName} ${lastName}`;
  const { muteState } = useMute(stile);

  if (!badged) {
    return (
      <div
        className={`${props.className} ${!muteState && styles[stile]}`}
      >
        <AvatarComponent
          src={src}
          data-name="avatar"
          data-testid="avatar"
          aria-disabled={disabled}
          data-stile={stile && stile}
          alt={fullName}
          className={classNames(styles[size])}
          sx={{ backgroundColor }}
          onClick={onClick}
          {...props}
        >
          <span data-name="abbreviation" data-testid="avatar-abbreviation">
            {firstName && lastName ? `${firstName[0]}${lastName[0]}` : abbreviation }
          </span>
        </AvatarComponent>
      </div>
    )
  };

  return (
    <Badge
      className={`${props.className} ${!muteState && styles[stile]}`}
      overlap="circular"
      badgeContent={
        <Box
          data-testid="badge"
          data-status={status}
          data-name="badge"
          aria-disabled={disabled}
        >
          {badgeContent}
        </Box>
      }
      anchorOrigin={anchorOrigin}
    >
      <AvatarComponent
        src={src}
        data-name="avatar"
        data-testid="avatar"
        aria-disabled={disabled}
        data-stile={stile && stile}
        alt={`${firstName} ${lastName}`}
        className={classNames(styles[size])}
        onClick={onClick}
        sx={{ backgroundColor }}
        {...props}
      >
        <span data-name="abbreviation" data-testid="avatar-abbreviation">
          {firstName && lastName ? `${firstName[0]}${lastName[0]}` : abbreviation }
        </span>
      </AvatarComponent>
    </Badge>
  );
};