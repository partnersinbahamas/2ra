import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const CheckIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -1 28 28' : '0 1 24 24'}
          className={className}
          stroke={color}
          style={style}
        >
          <line x1="2" y1="22" x2="22" y2="4" strokeWidth="4" strokeLinecap="round" />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-3 -3 30 30' : '-1 -1 26 26'}
          className={className}
          stroke={color}
          style={style}
        >
          <line x1="1.5" y1="22.5" x2="22.5" y2="1.5" strokeWidth="3" strokeLinecap="round" />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-4 -4 32 32' : '-2 -2 28 28'}
          className={className}
          stroke={color}
          style={style}
        >
          <line x1="1" y1="23" x2="23" y2="1" strokeWidth="2" strokeLinecap="round" />
        </LargeSvg>
      );
  }
};

CheckIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

CheckIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default CheckIcon;
