import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const AddIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-4 -4 20 20' : '0 0 12 12'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 0C6.26418 0.000791351 6.51731 0.106086 6.70411 0.292889C6.89091 0.479691 6.99621 0.732823 6.997 0.997V5.003H11.003C11.2672 5.00379 11.5203 5.10909 11.7071 5.29589C11.8939 5.48269 11.9992 5.73582 12 6C11.9992 6.26418 11.8939 6.51731 11.7071 6.70411C11.5203 6.89091 11.2672 6.99621 11.003 6.997H6.997V11.003C6.99621 11.2672 6.89091 11.5203 6.70411 11.7071C6.51731 11.8939 6.26418 11.9992 6 12C5.73582 11.9992 5.48269 11.8939 5.29589 11.7071C5.10909 11.5203 5.00379 11.2672 5.003 11.003V6.997H0.997C0.732823 6.99621 0.479691 6.89091 0.292889 6.70411C0.106086 6.51731 0.000791351 6.26418 0 6C0.000791351 5.73582 0.106086 5.48269 0.292889 5.29589C0.479691 5.10909 0.732823 5.00379 0.997 5.003H5.003V0.997C5.00379 0.732823 5.10909 0.479691 5.29589 0.292889C5.48269 0.106086 5.73582 0.000791351 6 0Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-5 -5 24 24' : '0 0 14 14'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 0C7.564 0 8.01 0.446 8.01 1.01V5.99H12.99C13.554 5.99 14 6.436 14 7C14 7.564 13.554 8.01 12.99 8.01H8.01V12.99C8.01 13.554 7.564 14 7 14C6.436 14 5.99 13.554 5.99 12.99V8.01H1.01C0.446 8.01 0 7.564 0 7C0 6.436 0.446 5.99 1.01 5.99H5.99V1.01C5.99 0.446 6.436 0 7 0Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-6 -6 32 32' : '0 0 20 20'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 0C10.563 0 11 0.438 11 1V9H19C19.563 9 20 9.438 20 10C20 10.563 19.562 11 19 11H11V19C11 19.563 10.562 20 10 20C9.437 20 9 19.562 9 19V11H1C0.437 11 0 10.562 0 10C0 9.437 0.438 9 1 9H9V1C9 0.437 9.438 0 10 0Z"
          />
        </LargeSvg>
      );
  }
};

AddIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

AddIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

/** @component */
export default AddIcon;
