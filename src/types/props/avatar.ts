import { AvatarProps } from "@mui/material";
import { TStatus } from "./status";
import { TSizes } from "../size";

export type PropsAvatar = Omit<AvatarProps, 'slotProps' | 'component'> & {
  firstName?: string,
  lastName?: string,
  abbreviation: string,
  size?: TSizes,
  backgroundColor?: string,
  stile?: 'primary',
  badged?: boolean,
  disabled?: boolean,
  badgeContent?: any,
  status?: TStringOrStatus,
  src?: string,
  onClick?: () => void,
}