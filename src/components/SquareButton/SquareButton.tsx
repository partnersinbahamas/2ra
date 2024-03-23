import classNames from "classnames";
import SquareButtonElement from "./StyledButton.styles";


type TProps = {
  title?: string,
  onClick?: () => void,
  disabled?: boolean
}

export const SquareButon: React.FC<TProps> = ({
  title = 'Button',
  onClick,
  disabled,
}) => {
  return (
    <SquareButtonElement
      className={classNames({ 'disabled': disabled })}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </SquareButtonElement>
  )
}