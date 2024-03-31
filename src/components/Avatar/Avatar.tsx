import React from "react";
import classNames from "classnames";
import { Avatar as AvatarComponent, Badge, AvatarProps, Box } from "@mui/material";

import { TSizes } from "../../types/Sizes";
import styles from './Avatar.module.scss';

type TProps = AvatarProps & {
  firstName: string,
  lastName: string,
  size: TSizes,
  backgroundColor?: string,
  badge?: boolean,
  badgeContent: any,
}

export const Avatar: React.FC<TProps> = ({
  firstName,
  lastName,
  size,
  backgroundColor,
  badge,
  badgeContent,
  ...props
}) => {
  if (!badge) {
    return (
        <AvatarComponent
        alt={`${firstName} ${lastName}`}
        data-name="avatar"
        className={classNames(styles[size])}
        sx={{ backgroundColor }}
        {...props}
      >
        <span data-name="name">{firstName[0]}{lastName[0]}</span>
      </AvatarComponent>
    )
  };

  return (
    <Badge
      className={styles['section-avatar']}
      overlap="circular"
      badgeContent={
        <Box data-name="badge">
          {badgeContent}
        </Box>
      }
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
    >
      <AvatarComponent
        alt={`${firstName} ${lastName}`}
        data-name="avatar"
        className={classNames(styles[size])}
        sx={{ backgroundColor }}
        {...props}
      >
        <span data-name="name">{firstName[0]}{lastName[0]}</span>
      </AvatarComponent>
    </Badge>
  );
};