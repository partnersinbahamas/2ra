type IHorizontal = 'left' | 'right';
type IVertical = 'bottom' | 'top';

interface IAnchorOrigin {
  horizontal: IHorizontal;
  vertical: IVertical;
}

type TStylesExtension = '.scss' | '.module.scss';

type TExtendedComponentProps = {
  disabled?: boolean;
  error?: boolean;
};
