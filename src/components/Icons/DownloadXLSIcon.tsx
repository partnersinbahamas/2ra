import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const DownloadXLSIcon: React.FC<TProps> = ({
  className,
  color,
  style,
  withBox,
}) => {
  const id = uniqueId('download_csv_');
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={withBox ? '-4 -4 32 32' : '0 0 24 24'}
      style={style}
      fill={color}
      className={className}
      role="img"
      aria-labelledby={id}
    >
      <title id={id}>Download XLS</title>
      <path d="M20.896 11H19.896V17H20.896V11Z" />
      <path d="M20.397 19.707L16.797 16.107L17.497 15.4L20.397 18.3L23.297 15.4L24.004 16.107L20.397 19.707Z" />
      <path d="M0 18.884L1.87 15.9L0.147 13.143H1.731L2.881 15.028L3.941 13.143H5.256L3.586 15.911L5.472 18.884H3.879L2.579 16.779L1.311 18.884H0Z" />
      <path d="M6.28201 18.884V13.143H7.67001V17.82H10.126L10.026 18.884H6.28201Z" />
      <path d="M11.112 18.647V17.558C11.2886 17.6469 11.4702 17.7254 11.656 17.793C11.9871 17.9085 12.3353 17.9674 12.686 17.967C13.346 17.967 13.6763 17.7583 13.677 17.341C13.6722 17.2284 13.6368 17.1193 13.5746 17.0254C13.5124 16.9315 13.4258 16.8563 13.324 16.808C13.054 16.6623 12.7751 16.5337 12.489 16.423C12.1276 16.2949 11.798 16.0902 11.523 15.823C11.2609 15.5181 11.1253 15.1246 11.144 14.723C11.1341 14.4833 11.1782 14.2444 11.273 14.0241C11.3679 13.8037 11.5111 13.6075 11.692 13.45C12.128 13.1221 12.668 12.9633 13.212 13.003C13.7028 13.0074 14.1889 13.0984 14.648 13.272V14.36C14.2179 14.1595 13.7513 14.0492 13.277 14.036C12.703 14.036 12.416 14.2187 12.416 14.584C12.4195 14.6788 12.4467 14.7712 12.4951 14.8527C12.5435 14.9343 12.6115 15.0025 12.693 15.051C12.981 15.2178 13.282 15.3613 13.593 15.48C13.9386 15.6091 14.2593 15.7968 14.541 16.035C14.6977 16.191 14.8196 16.3784 14.8987 16.5849C14.9778 16.7913 15.0123 17.0122 15 17.233C15.0116 17.4811 14.9666 17.7287 14.8684 17.9569C14.7701 18.185 14.6212 18.3879 14.433 18.55C13.9506 18.8881 13.3652 19.0472 12.778 19C12.2038 19.0033 11.6356 18.8829 11.112 18.647Z" />
      <path d="M14.896 22H3.896V24H20.896V22H14.896Z" />
      <path d="M15.896 0H3.896V9H5.896V2H14.896V6H18.896V9H20.896V5L15.896 0Z" />
    </Svg>
  );
};

DownloadXLSIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

DownloadXLSIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default DownloadXLSIcon;
