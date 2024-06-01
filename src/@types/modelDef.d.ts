type TLevel = 1 | 2 | 3 | 4 | 5 | 6;
type IHorizontal = 'left' | 'right';
type IVertical = 'bottom' | 'top';

interface IAnchorOrigin {
  horizontal: IHorizontal;
  vertical: IVertical;
}

type TStylesExtension = '.scss' | '.module.scss';
type TButtonType = 'button' | 'submit' | 'reset';
