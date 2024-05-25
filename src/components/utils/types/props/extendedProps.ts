import { TStile, TStringOrStatus } from '../types';

type TExtendedComponentProps = {
  disabled?: boolean;
  error?: boolean;
  stile?: TStile;
  status?: TStringOrStatus;
};

export default TExtendedComponentProps;
