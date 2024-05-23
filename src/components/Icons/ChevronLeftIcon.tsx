import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const ChevronLeftIcon: React.FC<TIcon> = ({
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
          viewBox={withBox ? '-5 -3 18 18' : '0 0 7.5 12'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 11.006C7 11.536 6.569 12 6.005 12C5.739 12 5.474 11.867 5.308 11.702L0.298 6.696C0.112179 6.51142 0.00533092 6.26186 0 6C0 5.773 0.0729998 5.545 0.22 5.38L5.308 0.298C5.474 0.0989999 5.739 0 6.005 0C6.569 0 7 0.464 7 0.994C7 1.26 6.9 1.524 6.701 1.724L2.421 6L6.701 10.276C6.901 10.476 7 10.74 7 11.006Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-6 -4 22 22' : '0 0 8.5 14'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.00001 13C8.00001 13.563 7.56201 14 7.00001 14C6.75001 14 6.50001 13.875 6.31201 13.687L0.282014 7.719C0.0995608 7.52419 -0.00135115 7.2669 1.36656e-05 7C1.36656e-05 6.75 0.0940138 6.469 0.281014 6.281L6.31301 0.312C6.50001 0.125 6.75001 0 7.00001 0C7.56301 0 8.00001 0.438 8.00001 1C8.00001 1.281 7.90601 1.5 7.71901 1.719L2.43801 7L7.71801 12.281C7.8108 12.3758 7.88357 12.4884 7.93202 12.6119C7.98046 12.7354 8.00358 12.8674 8.00001 13Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-7 -5 28 28' : '1 -0.5 10 19'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 17C10 17.562 9.594 18 9 18C8.73413 17.996 8.47871 17.8958 8.281 17.718L0.281 9.718C0.103854 9.52036 0.00406324 9.26538 0 9C0 8.75 0.0940001 8.5 0.281 8.281L8.281 0.281C8.5 0.0940001 8.75 0 9 0C9.25 0 9.5 0.0940001 9.719 0.281C9.89631 0.479255 9.99578 0.735042 9.999 1.001C9.999 1.25 9.906 1.5 9.719 1.719L2.406 8.999L9.719 16.281C9.906 16.5 9.999 16.75 10 17Z"
          />
        </LargeSvg>
      );
  }
};

ChevronLeftIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

ChevronLeftIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default ChevronLeftIcon;
