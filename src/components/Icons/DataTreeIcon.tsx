import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const DataTreeIcon: React.FC<TIcon> = ({
  className,
  color,
  size,
  style,
  withBox,
}) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox={withBox ? '-2 -2 24 24' : '0.8 0.8 18 18'}
          fill="transparent"
          stroke={color}
          style={style}
          className={className}
        >
          <rect x="10" y="8" width="8" height="4" rx="1" fill={color} />
          <rect x="10" y="14" width="8" height="4" rx="1" fill={color} />
          <rect
            x="2"
            y="2"
            width="8"
            height="4"
            rx="1"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M6 7V15C6 15.5523 6.44772 16 7 16H11" strokeWidth="2" />
          <path d="M6 10H11" />
        </SmallSvg>
      );
    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox={withBox ? '-1 -1 26 26' : '0.7 0.7 22.5 22.5'}
          fill="transparent"
          stroke={color}
          strokeWidth="2"
          style={style}
          className={className}
        >
          <rect
            x="2"
            y="2"
            width="10"
            height="4"
            rx="1"
            strokeLinejoin="round"
          />
          <rect
            x="12"
            y="10"
            width="10"
            height="4"
            rx="1"
            strokeLinejoin="round"
          />
          <rect
            x="12"
            y="18"
            width="10"
            height="4"
            rx="1"
            strokeLinejoin="round"
          />
          <path d="M7 7V18C7 19.1046 7.89543 20 9 20H12" />
          <path d="M6 12H11" />
        </MediumSvg>
      );
    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox={withBox ? '0 0 32 32' : '2 2 28 28'}
          fill="transparent"
          stroke={color}
          strokeWidth="2"
          style={style}
          className={className}
        >
          <rect
            x="3"
            y="3"
            width="14"
            height="6"
            rx="2"
            strokeLinejoin="round"
          />
          <rect
            x="15"
            y="13"
            width="14"
            height="6"
            rx="2"
            strokeLinejoin="round"
          />
          <rect
            x="15"
            y="23"
            width="14"
            height="6"
            rx="2"
            strokeLinejoin="round"
          />
          <path d="M10 9V24C10 25.1046 10.8954 26 12 26H15" />
          <path d="M10 16L15 16" />
        </LargeSvg>
      );
  }
};

DataTreeIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

DataTreeIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default DataTreeIcon;
