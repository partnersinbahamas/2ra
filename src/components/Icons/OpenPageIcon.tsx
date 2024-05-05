import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const OpenPageIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '0 0 20 20' : '2 2 16 16'}
          style={style}
          className={className}
          fill="none"
        >
          <path
            d="M3 6.11765V5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V13.8824"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.688 10.688C11.7875 10.6034 11.8671 10.4979 11.921 10.3789C11.9749 10.26 12.0019 10.1306 12 10C12 9.75002 11.906 9.50002 11.687 9.28102L8.719 6.28102C8.52404 6.09893 8.26677 5.99838 8 6.00002C7.437 6.00002 7 6.43802 7 7.00002C7 7.25002 7.094 7.50002 7.281 7.68802L8.594 9.00002H3C2.437 9.00002 2 9.43802 2 10C2 10.531 2.438 11 3 11H8.594L7.281 12.281C7.10371 12.479 7.00391 12.7343 7 13C7 13.531 7.438 14 8 14C8.13522 14.002 8.26931 13.9751 8.3933 13.9212C8.5173 13.8672 8.62834 13.7874 8.719 13.687L11.688 10.688Z"
            fill={color}
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '0 0 24 24' : '3 3 18 18'}
          style={style}
          className={className}
        >
          <path
            d="M4 7.70588V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V16.2941"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.688 12.688C13.7875 12.6034 13.8671 12.4979 13.921 12.3789C13.9749 12.26 14.0019 12.1306 14 12C14 11.75 13.906 11.5 13.687 11.281L9.719 7.28102C9.52404 7.09893 9.26677 6.99838 9 7.00002C8.437 7.00002 8 7.43802 8 8.00002C8 8.25002 8.094 8.50002 8.281 8.68802L10.594 11H4C3.437 11 3 11.438 3 12C3 12.531 3.438 13 4 13H10.594L8.281 15.281C8.10371 15.479 8.00391 15.7343 8 16C8 16.531 8.438 17 9 17C9.13522 17.002 9.26931 16.9751 9.3933 16.9212C9.5173 16.8672 9.62834 16.7874 9.719 16.687L13.688 12.688Z"
            fill={color}
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '0 0 32 32' : '3 3 26 26'}
          style={style}
          className={className}
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 16C3 16.563 3.438 17 4 17H16.594L12.312 21.281C12.2142 21.3736 12.1361 21.485 12.0825 21.6086C12.0288 21.7322 12.0008 21.8653 12 22C12 22.438 12.375 23 13.031 23C13.281 23 13.531 22.906 13.719 22.719L19.719 16.719C19.8111 16.6238 19.8834 16.5111 19.9317 16.3877C19.9799 16.2643 20.0031 16.1325 20 16C20.031 15.75 19.922 15.485 19.719 15.281L13.719 9.281C13.5326 9.10442 13.2867 9.00415 13.03 9C12.47 9 12 9.469 12 10C12 10.281 12.109 10.515 12.313 10.719L16.593 15H4C3.437 15 3 15.438 3 16Z"
            fill={color}
          />
          <path
            d="M4 11.0588V6C4 4.89543 4.89543 4 6 4H26C27.1046 4 28 4.89543 28 6V26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26V20.9412"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </LargeSvg>
      );
  }
};

OpenPageIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

OpenPageIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default OpenPageIcon;
