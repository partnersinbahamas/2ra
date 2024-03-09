import styles from './Header.module.scss';

type TProps = {
  label: string,
  backgroundColor: string,
  padding: number,
};

export const Header: React.FC<TProps> = ({label, backgroundColor, padding }) => {
  return (
    <header
      className={styles.header}
      style={ {backgroundColor, padding: `${padding}px` }}
    >
      {label}
    </header>
  )
}