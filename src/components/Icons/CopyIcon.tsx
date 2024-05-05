import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const CheckCircleIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-1 -1 22 22' : '2 0 16 20'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 4C10.2 4 10.5 4.1 10.7 4.3L13.7 7.3C13.9 7.5 14 7.7 14 8V19C14 19.6 13.6 20 13 20H3C2.4 20 2 19.6 2 19V5C2 4.4 2.4 4 3 4H10ZM9 6H4V18H12V9H10C9.4 9 9 8.6 9 8V6Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7 3.3L14.7 0.3C14.5 0.1 14.3 0 14 0H7C6.4 0 6 0.4 6 1C6 1.6 6 2 6 2H9.2H13V4C13 4.6 13.4 5 14 5H16V7.9V15C16 15.5 16 15.5 16 16C16.1 16 17 16 17 16C18 16 18 15.4 18 15V7.8V4C18 3.7 17.9 3.5 17.7 3.3Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-1 -1 26 26' : '2 0 20 24'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2C8 2.28759 8 2.5 8 3C8.5 3 9.73531 3 10 3C10 2.5 10 2.55228 10 2H15V6C15 6.53125 15.4375 7 16 7H20V17C19.6566 17 19.5 17 19 17C19 17.5 19 18.7911 19 19C19 19 19.4477 19 20 19H21C21.5625 19 22 18.5625 22 18V5C22 4.71875 21.9062 4.5 21.7188 4.3125L17.7188 0.3125C17.5312 0.09375 17.2812 0 17 0H9C8.4375 0 8 0.4375 8 1V2ZM17 2.40625V5H19.5938L17 2.40625Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7188 5.3125C11.5312 5.09375 11.2812 5 11 5H3C2.4375 5 2 5.4375 2 6V23C2 23.5625 2.4375 24 3 24H15C15.5625 24 16 23.5625 16 23V10C16 9.71875 15.9062 9.5 15.7188 9.3125L11.7188 5.3125ZM4 7H9V11C9 11.5312 9.4375 12 10 12H14V22H4V7ZM11 10V7.40625L13.5938 10H11Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '0 0 32 32' : '3 0 26 32'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.25 0.656296C23.8125 0.25 23.25 0 22.6562 0H11.25C10 0 9 1 9 2.25C9 2.5 9 2.33239 9 2.5V3C9 3.21021 9 4 9 4C9 4 10.6579 4 11 4C11 4 11 3.55228 11 3V2.25C11 2.125 11.125 2 11.25 2H21V7C21 7.5625 21.4375 8 22 8H27V23.75C27 23.875 26.875 24 26.75 24H26C25.6819 24 25 24 25 24C25 24 25 25.7658 25 26C25 26 25.4477 26 26 26C26.1676 26 26.5 26 26.75 26C28.5 26 29 24.7499 29 23.75V6.3438C29 5.75 28.7812 5.1875 28.3437 4.75L24.25 0.656296ZM23 6V2.2188L26.7813 6H23Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.25 6.6563C17.8125 6.25 17.25 6 16.6562 6H5.25C4 6 3 7 3 8.25V29.75C3 31 4 32 5.25 32H20.75C22 32 23 31 23 29.75V12.3438C23 11.75 22.7812 11.1875 22.3437 10.75L18.25 6.6563ZM5.25 8H15V13C15 13.5625 15.4375 14 16 14H21V29.75C21 29.875 20.875 30 20.75 30H5.25C5.125 30 5 29.875 5 29.75V8.25C5 8.125 5.125 8 5.25 8ZM17 12V8.2188L20.7813 12H17Z"
          />
        </LargeSvg>
      );
  }
};

CheckCircleIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

CheckCircleIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default CheckCircleIcon;
