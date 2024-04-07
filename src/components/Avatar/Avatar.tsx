import React from "react";
import classNames from "classnames";
import { Avatar as AvatarComponent, Badge, Box } from "@mui/material";
import { PropsAvatar } from "../../types/props/avatar";

import styles from './Avatar.module.scss';
export const Avatar: React.FC<PropsAvatar> = ({
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
        <Box data-name="badge" data-status={ status }>
          {badgeContent}
        </Box>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <AvatarComponent
        src={src}
        data-name="avatar"
        data-testid="avatar"
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