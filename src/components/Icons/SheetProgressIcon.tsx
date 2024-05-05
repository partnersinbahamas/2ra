import React from 'react';

import Svg from './Svg';

interface IProps {
  className?: string;
  color?: string;
  style?: React.CSSProperties;
  withBox?: boolean;
}

const SheetProgressIcon: React.FC<IProps> = ({
  className,
  color = 'currentcolor',
  style,
  withBox,
}) => (
  <Svg
    className={className}
    fill={color}
    style={style}
    viewBox={withBox ? '-4 -3 20 20' : '0 0 13 14'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M3.77458e-05 12.375V1.625C3.77458e-05 0.719 0.719038 0 1.62504 0H3.00004C3.56304 0 4.00004 0.438 4.00004 1C4.00004 1.563 3.56204 2 3.00004 2H2.00004V12H10V11C10 10.437 10.469 10 11 10C11.563 10 12 10.438 12 11V12.375C12 13.281 11.281 14 10.375 14H1.62504C1.41123 14.0015 1.19927 13.9604 1.00145 13.8793C0.803637 13.7981 0.623917 13.6785 0.47273 13.5273C0.321542 13.3761 0.201901 13.1964 0.120755 12.9986C0.0396092 12.8008 -0.00142446 12.5888 3.77458e-05 12.375ZM8.50004 0C10.969 0 13 2.031 13 4.5C13 6.969 10.969 9 8.50004 9C6.03104 9 4.00004 6.969 4.00004 4.5C4.00004 2.031 6.03104 0 8.50004 0ZM8.71904 2.031V4.893L6.28004 3.375C6.10326 3.72416 6.00755 4.10871 6.00004 4.5C6.00004 5.875 7.12504 7 8.50004 7C9.87504 7 11 5.875 11 4.5C11 3.187 10 2.125 8.71904 2.031Z"
      fillRule="evenodd"
    />
  </Svg>
);

export default SheetProgressIcon;
