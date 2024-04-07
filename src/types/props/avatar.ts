import { AvatarProps } from "@mui/material";
import { TStatus } from "./status";
import { TSizes } from "../size";

export type PropsAvatar = Omit<AvatarProps, 'slotProps' | 'component'> & {
  firstName: string,
  lastName: string,
  size: TSizes,
  backgroundColor?: string,
  badged?: boolean,
  badgeContent?: any,
  status?: TStatus,
  src?: string,
  onClick?: () => void,
}