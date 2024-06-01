import { Avatar as AvatarMUI, AvatarProps } from '@mui/material';
import TExtendedComponentProps from '../utils/types/props/extendedProps';

type TAvatarComponent = AvatarProps & TExtendedComponentProps;
const AvatarComponent: React.FC<TAvatarComponent> = props => (
  <AvatarMUI {...props} />
);
export default AvatarComponent;
