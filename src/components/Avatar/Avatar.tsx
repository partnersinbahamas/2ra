import React from "react";
import classNames from "classnames";
import { Avatar as AvatarComponent } from "@mui/material";
import { AvatarProps } from "@mui/material";

import { TSizes } from "../../types/Sizes";
import styles from './Avatar.module.scss';

type TProps = AvatarProps & {
  firstName: string,
  lastName: string,
  size: TSizes,
  backgroundColor?: string,
}

export const Avatar: React.FC<TProps> = ({
  firstName,
  lastName,
  size,
  backgroundColor,
}) => {
  return (
    <AvatarComponent
      className={classNames(styles[size])}
      sx={{ backgroundColor }}
    >
      <span>{firstName[0]}{lastName[0]}</span>
    </AvatarComponent>
  );
};