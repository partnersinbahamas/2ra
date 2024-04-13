import { AvatarProps } from "@mui/material";
import { TStatus } from "./status";
import { TSizes } from "../size";

export type PropsAvatar = Omit<AvatarProps, 'slotProps' | 'component'> & {
  firstName: string,
  lastName: string,
  size: TSizes,
  backgroundColor?: string,
  stile?: 'primary',
  badged?: boolean,
  badgeContent?: any,
  status?: TStringOrStatus,
  src?: string,
  onClick?: () => void,
}