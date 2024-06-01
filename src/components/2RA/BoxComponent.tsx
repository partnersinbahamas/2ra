import { Box as BoxMUI, BoxProps } from '@mui/material';
import TExtendedComponentProps from '../utils/types/props/extendedProps';

type TBoxComponent = BoxProps & TExtendedComponentProps;
const BoxComponent: React.FC<TBoxComponent> = props => <BoxMUI {...props} />;
export default BoxComponent;
