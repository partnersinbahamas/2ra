import { Stack } from "@mui/material";
import styles from './User.module.scss';
import {Avatar} from '../Avatar/Avatar';
import { TSizes } from "../../types/Sizes";
import classNames from "classnames";

type TProps = {
  name: string,
  withBackGround?: boolean,
  backgroundColor?: string,
  size: TSizes,
}

export const User: React.FC<TProps> = ({
  name,
  withBackGround,
  backgroundColor,
  size,
}) => {
  const splittedName = name.split(' ');
  const firstName = splittedName[0];
  const lastName = splittedName[1];

  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      style={{backgroundColor: withBackGround ? backgroundColor : ''}}
      className={styles.user}
    >
      <Avatar firstName={firstName} lastName={lastName} size={size}/>
      <span className={classNames(styles.name, styles[`name-${size}`])}>
        {name}
      </span>
    </Stack>
  )
}