import styles from './Header.module.scss';

type TProps = {
  label: string,
  backgroundColor: string,
  padding: number,
  color?: string,
  fontFamily?: string,
};

export const Header: React.FC<TProps> = ({
  label,
  backgroundColor,
  padding,
  color = 'black',
  fontFamily,
}) => {
  return (
    <header
      className={styles.header}
      style={ {backgroundColor, padding: `${padding}px`, color, fontFamily}}
    >
      {label}
    </header>
  )
}