import React from "react";
import classNames from "classnames";
import { Avatar as AvatarComponent, AvatarSlots, Badge, Box } from "@mui/material";
import { PropsAvatar } from "../../types/props/avatar";

import styles from './Avatar.module.scss';
import { TSizes } from "../../types/size";
import { TStatus } from "../../types/props/status";



interface IProps extends PropsAvatar {
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
  status?: TStatus;
}

export const Avatar: React.FC<IProps> = ({
  firstName,
  lastName,
  size,
  backgroundColor,
  badged,
  badgeContent,
  status = 'default',
  stile,
  onClick,
  src,
  ...props
}) => {
  const fullName = `${firstName} ${lastName}`;
  if (!badged) {
    return (
      <div className={`${props.className} ${stile && styles[stile]}`}>
        <AvatarComponent
          src={src}
          data-name="avatar"
          data-testid="avatar"
          data-stile={stile && stile}
          alt={fullName}
          className={classNames(styles[size])}
          sx={{ backgroundColor }}
          onClick={onClick}
          {...props}
        >
          <span data-name="name" data-testid="avatar-name">
            { firstName[0]}{lastName[0] }
          </span>
        </AvatarComponent>
      </div>
    )
  };

  return (
    <Badge
      className={`${props.className} ${stile && styles[stile]}`}
      overlap="circular"
      badgeContent={
        <Box
          data-testid="badge"
          data-name="badge"
          data-status={ status }
        >
          {badgeContent}
        </Box>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <AvatarComponent
        src={src}
        data-name="avatar"
        data-testid="avatar"
        data-stile={stile && stile}
        alt={`${firstName} ${lastName}`}
        className={classNames(styles[size])}
        onClick={onClick}
        sx={{ backgroundColor }}
        {...props}
      >
        <span data-name="name" data-testid="avatar-name">
          { firstName[0]}{lastName[0] }
        </span>
      </AvatarComponent>
    </Badge>
  );
};