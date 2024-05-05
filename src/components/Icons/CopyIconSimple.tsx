// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { COOL_GRAY_700 } from '../Colors/colors';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const CopyIconSimple: React.FC<TProps> = ({
  className,
  color,
  style,
  withBox,
}: TProps) => (
  <Svg
    viewBox={withBox ? '0 0 20 20' : '3 2 14 16'}
    style={style}
    className={className}
  >
    <path
      style={{ fill: color }}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 7V16H11C11.5 16 11.997 16.433 12 17C12.003 17.567 11.647 18.001 11 18H4.1C3.80891 17.9979 3.53033 17.8813 3.3245 17.6755C3.11866 17.4697 3.00209 17.1911 3 16.9V7C3 6.386 3.406 6.002 4 6C4.594 5.998 5 6.5 5 7ZM15.821 2C16.451 2 17.044 2.576 17.044 3.2V12.799C17.044 13.417 16.477 13.999 15.821 13.999H8.266C7.636 13.999 7.044 13.413 7.044 12.799V3.199C7.044 2.582 7.637 2 8.266 2H15.821ZM9 4H15V12H9V4Z"
    />
  </Svg>
);

CopyIconSimple.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

CopyIconSimple.defaultProps = {
  className: '',
  color: COOL_GRAY_700,
  style: {},
  withBox: false,
};

export default CopyIconSimple;
