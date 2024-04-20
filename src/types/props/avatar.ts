import { AvatarProps } from "@mui/material";
import { TStile } from "../stile";
import { TSize } from "../size";

export type PropsAvatar = Omit<AvatarProps, 'slotProps' | 'component'> & {
  firstName?: string,
  lastName?: string,
  abbreviation: string,
  size?: TSize,
  backgroundColor?: string,
  stile?: TStile,
  badged?: boolean,
  disabled?: boolean,
  badgeContent?: any,
  status?: TStringOrStatus,
  src?: string,
  onClick?: () => void,
}