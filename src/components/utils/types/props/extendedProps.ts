import { TStile, TStringOrStatus } from '../types';

type TExtendedComponentProps = {
  disabled?: boolean;
  error?: TError;
  stile?: TStile;
  status?: TStringOrStatus;
};

export default TExtendedComponentProps;
