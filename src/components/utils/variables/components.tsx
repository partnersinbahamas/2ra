import {
  Avatar as AvatarMUI,
  AvatarProps,
  Box as BoxMUI,
  BoxProps,
} from '@mui/material';
import TExtendedComponentProps from '../types/props/extendedProps';

type TAvatarComponent = AvatarProps & TExtendedComponentProps;
export const AvatarComponent: React.FC<TAvatarComponent> = props => (
  <AvatarMUI {...props} />
);

type TBoxComponent = BoxProps & TExtendedComponentProps;
export const BoxComponent: React.FC<TBoxComponent> = props => (
  <BoxMUI {...props} />
);
