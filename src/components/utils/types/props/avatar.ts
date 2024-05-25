import { AvatarProps } from '@mui/material';
import { TSize, TStile, TStringOrStatus } from '../types';

export type PropsAvatar = Omit<AvatarProps, 'slotProps' | 'component'> & {
  firstName?: string;
  lastName?: string;
  abbreviation: string;
  size?: TSize;
  stile?: TStile;
  badged?: boolean;
  disabled?: boolean;
  badgeContent?: any;
  status?: TStringOrStatus;
  anchorOrigin?: IAnchorOrigin;
  className?: any;
  src?: string;
  onClick?: () => void;
};
