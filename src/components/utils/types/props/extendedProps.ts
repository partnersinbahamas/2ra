import { TStile, TStringOrStatus } from '../types';

type TExtendedComponentProps = {
  disabled?: boolean;
  error?: boolean | string;
  stile?: TStile;
  status?: TStringOrStatus;
};

export default TExtendedComponentProps;
