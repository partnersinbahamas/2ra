import { Avatar, Stack } from "@mui/material";
import styles from './User.module.scss';

type TProps = {
  name: string,
  withBackGround?: boolean,
  backgroundColor?: string,
}

export const User: React.FC<TProps> = ({ name, withBackGround, backgroundColor }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      style={{backgroundColor: withBackGround ? backgroundColor : ''}}
      className={styles.user}
    >
      <Avatar>{name[0]}</Avatar>
      {name}
    </Stack>
  )
}