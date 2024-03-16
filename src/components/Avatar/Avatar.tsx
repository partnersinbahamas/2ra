import React from "react";
import classNames from "classnames";
import { Avatar as AvatarComponent } from "@mui/material";

import { TSizes } from "../../types/Sizes";
import styles from './Avatar.module.scss';

type TProps = {
  firstName: string,
  lastName: string,
  size: TSizes,
}

export const Avatar: React.FC<TProps> = ({
  firstName,
  lastName,
  size,
}) => {
  return (
    <AvatarComponent
      className={classNames(styles[size])}
    >
      {firstName[0]}{lastName[0]}
    </AvatarComponent>
  )
}