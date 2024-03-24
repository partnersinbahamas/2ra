import classNames from "classnames";
import SquareButtonElement from "./StyledButton.styles";

export type TProps = {
  title?: string,
  onClick?: () => void,
  disabled?: boolean,
  radius?: number,
}

export const SquareButon: React.FC<TProps> = ({
  title = 'Button',
  onClick,
  disabled,
  radius,
}) => {
  return (
    <SquareButtonElement
      className={classNames({ 'disabled': disabled })}
      onClick={onClick}
      disabled={disabled}
      radius={radius}
    >
      {title}
    </SquareButtonElement>
  )
}