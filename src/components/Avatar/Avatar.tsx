import React from "react";
import classNames from "classnames";
import { Avatar as AvatarComponent, Badge, AvatarProps, Box } from "@mui/material";

import styles from './Avatar.module.scss';

type TProps = AvatarProps & {
  firstName: string,
  lastName: string,
  size: TSizes,
  backgroundColor?: string,
  badged?: boolean,
  badgeContent?: any,
  status?: TStatus,
  onClick?: () => void,
}

export const Avatar: React.FC<TProps> = ({
  firstName,
  lastName,
  size,
  backgroundColor,
  badged,
  badgeContent,
  status = 'default',
  onClick,
  ...props
}) => {
  const fullName = `${firstName} ${lastName}`;

  if (!badged) {
    return (
      <div className={styles['section-avatar']}>
        <AvatarComponent
          data-name="avatar"
          data-testid="avatar"
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
        data-testid="avatar"
        alt={`${firstName} ${lastName}`}
        className={classNames(styles[size])}
        sx={{ backgroundColor }}
        {...props}
        onClick={onClick}
      >
        <span data-name="name">
          { firstName[0]}{lastName[0] }
        </span>
      </AvatarComponent>
    </Badge>
  );
};