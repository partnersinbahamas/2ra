import React from 'react';
import PropTypes from 'prop-types';

import { SmallSvg } from './Svg';
import { TIcon } from '.';

const CheckCircleSolidIcon: React.FC<TIcon> = ({
  className,
  color,
  size,
  style,
  withBox,
}) => {
  switch (size) {
    case 'SMALL':
    default:
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 20 20' : '0 0 16 16'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0C12.41 0 16 3.563 16 7.99C16 12.405 12.41 16 8 16C3.59 16 0 12.405 0 7.99C0 3.595 3.59 0 8 0ZM11.493 4.732L6.595 9.629L4.51 7.548L3.066 8.953L6.621 12.429L12.938 6.156L11.494 4.732H11.493Z"
          />
        </SmallSvg>
      );
  }
};

CheckCircleSolidIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

CheckCircleSolidIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default CheckCircleSolidIcon;
