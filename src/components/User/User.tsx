import { Box ,Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import classNames from "classnames";

import { TSizes } from "../../types/Sizes";
import { Avatar } from '../Avatar/Avatar';
import styles from './User.module.scss';
import { useState } from "react";

type TProps = {
  user?: any
  withBackGround?: boolean,
  backgroundColor?: string,
  size: TSizes,
}

export const User: React.FC<TProps> = ({
  user,
  withBackGround,
  backgroundColor,
  size,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const splittedName = user.name.split(' ');
  const firstName = splittedName[0];
  const lastName = splittedName[1];


  console.log(user);
  return (
    <Box
      style={{backgroundColor: withBackGround ? backgroundColor : ''}}
      className={styles.user}
    >
      <button
        className={styles.button}
        onClick={() => setIsExpanded((current) => !current)}
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <Avatar firstName={firstName} lastName={lastName} size={size}/>
            <span className={classNames(styles.name, styles[size])}>
            {user.name}
          </span>
        </Stack>
      </button>

      {isExpanded && (
        <TableContainer className={styles.table}>
          <Table>
            <TableHead>
              <TableRow className={styles.row}>
                <TableCell className={classNames(styles.head, styles['table-item'], styles[size])} align="left">User name</TableCell>
                <TableCell className={classNames(styles.head, styles['table-item'], styles[size])} align="left">Address</TableCell>
                <TableCell className={classNames(styles.head, styles['table-item'], styles[size])} align="left">Email</TableCell>
                <TableCell className={classNames(styles.head, styles['table-item'], styles[size])} align="left">Company</TableCell>
              </TableRow>
            </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classNames(styles['table-item'], styles[size])}>{user.username}</TableCell>
              <TableCell className={classNames(styles['table-item'], styles[size])}>{user.address.street}</TableCell>
              <TableCell className={classNames(styles['table-item'], styles[size])}>{user.email}</TableCell>
              <TableCell className={classNames(styles['table-item'], styles[size])}>{user.company.name}</TableCell>
            </TableRow>
          </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  )
}