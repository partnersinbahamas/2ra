import styles from "./Users.module.scss";
import classNames from "classnames";
import { User } from "../User/User";

type TProps = {
  title: string,
  styled: boolean,
  users?: any[],
};

export const Users: React.FC<TProps> = ({ title, users = [], styled }) => {
  return (
    <label>
      <span>{title}</span>

      {users && (
        <ul className={classNames(styles.list, {[styles.styled]: styled})}>
          {users.map((user) => (
            <User size="small" name={user.name} />
          ))}
        </ul>
      )}
    </label>
  )
}