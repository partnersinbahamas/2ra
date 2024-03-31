import React from "react";
import classNames from "classnames";
import { Avatar as AvatarComponent, Badge, AvatarProps, Box } from "@mui/material";

import { TSizes } from "../../types/Sizes";
import styles from './Avatar.module.scss';
import { COOL_GRAY_200 } from "../Colors/colors";

type TProps = AvatarProps & {
  firstName: string,
  lastName: string,
  size: TSizes,
  backgroundColor?: string,
  badged?: boolean,
  badgeContent?: any,
  status?: 'online' | 'default'
}

export const Avatar: React.FC<TProps> = ({
  firstName,
  lastName,
  size,
  backgroundColor,
  badged,
  badgeContent,
  status = 'default',
  ...props
}) => {
  if (!badged) {
    return (
      <div className={styles['section-avatar']}>
        <AvatarComponent
          data-name="avatar"
          alt={`${firstName} ${lastName}`}
          className={classNames(styles[size])}
          sx={{ backgroundColor }}
          {...props}
        >
          <span data-name="name">
            { firstName[0]}{lastName[0] }
          </span>
        </AvatarComponent>
      </div>
    )
  };

  return (
    <Badge
      className={styles['section-avatar']}
      overlap="circular"
      badgeContent={
        <Box data-name="badge" data-status={ status }>
          {badgeContent}
        </Box>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <AvatarComponent
        data-name="avatar"
        alt={`${firstName} ${lastName}`}
        className={classNames(styles[size])}
        sx={{ backgroundColor }}
        {...props}
      >
        <span data-name="name">
          { firstName[0]}{lastName[0] }
        </span>
      </AvatarComponent>
    </Badge>
  );
};