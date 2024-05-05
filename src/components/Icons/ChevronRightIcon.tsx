import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const ChevronRightIcon: React.FC<TIcon> = ({
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
          viewBox={withBox ? '-6 -3 18 18' : '-0.5 0 7.5 12'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 11.006C0 11.536 0.431 12 0.995 12C1.261 12 1.526 11.867 1.692 11.702L6.702 6.696C6.9 6.497 7 6.232 7 6C7 5.735 6.9 5.47 6.701 5.304L1.691 0.298C1.527 0.0999999 1.262 0 0.996 0C0.732352 0.000526238 0.479624 0.105356 0.293009 0.291596C0.106394 0.477836 0.00105618 0.730354 0 0.994C0 1.26 0.0999998 1.524 0.299 1.724L4.579 6L0.299 10.276C0.0989998 10.476 0 10.74 0 11.006Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-7 -4 22 22' : '-0.3 0 8.5 14'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-0.000129411 13C-0.000129411 13.563 0.437871 14 0.999871 14C1.24987 14 1.49987 13.875 1.68787 13.687L7.71787 7.719C7.90587 7.531 7.99987 7.25 7.99987 7C7.99987 6.75 7.90587 6.469 7.71887 6.281L1.68687 0.312C1.49987 0.125 1.24987 0 0.999871 0C0.436871 0 -0.000129411 0.438 -0.000129411 1C-0.000129411 1.281 0.0938707 1.5 0.280871 1.719L5.56187 7L0.28187 12.281C0.189085 12.3758 0.11631 12.4884 0.0678657 12.6119C0.0194218 12.7354 -0.00370135 12.8674 -0.000129411 13Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-9 -5 28 28' : '0 -0.5 10 19'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 17C0 17.562 0.406 18 1 18C1.25 18 1.5 17.906 1.719 17.718L9.719 9.718C9.89622 9.52041 9.99603 9.2654 10 9C10 8.75 9.906 8.5 9.719 8.281L1.719 0.281C1.5211 0.103629 1.26573 0.00382304 1 0C0.75 0 0.5 0.0940001 0.281 0.281C0.103689 0.479255 0.00421682 0.735042 0.0010004 1.001C0.0010004 1.25 0.0940001 1.5 0.281 1.719L7.594 8.999L0.281 16.281C0.103707 16.4789 0.00391305 16.7343 0 17Z"
          />
        </LargeSvg>
      );
  }
};

ChevronRightIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

ChevronRightIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default ChevronRightIcon;
