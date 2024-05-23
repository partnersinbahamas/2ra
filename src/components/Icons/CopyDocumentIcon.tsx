import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const CopyIcon: React.FC<TIcon> = ({
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
          viewBox={withBox ? '-1 -1 22 22' : '2 0 16 20'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.7 0.3L17.7 3.3C17.9 3.5 18 3.7 18 4V7.8V15C18 15.4 17.7 15.7 17.4 15.9C17.3 16 17.1 16 17 16C16.4 16 16 15.5 16 15V7.9V5H14C13.4 5 13 4.6 13 4V2H9.2H7C6.5 2 6 1.6 6 1C6 0.4 6.4 0 7 0H14C14.3 0 14.5 0.1 14.7 0.3ZM10.7 4.3C10.5 4.1 10.2 4 10 4H3C2.4 4 2 4.4 2 5V19C2 19.6 2.4 20 3 20H13C13.6 20 14 19.6 14 19V8C14 7.7 13.9 7.5 13.7 7.3L10.7 4.3ZM4 6H9V8C9 8.6 9.4 9 10 9H12V18H4V6ZM10 11H6V13H10V11ZM10 14H6V16H10V14Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-3 -1 26 26' : '0 0 20 24'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 2C6 2.55228 6.44772 3 7 3C7.55228 3 8 2.55228 8 2H13V6C13 6.53125 13.4375 7 14 7H18V17C17.4477 17 17 17.4477 17 18C17 18.5523 17.4477 19 18 19H19C19.5625 19 20 18.5625 20 18V5C20 4.71875 19.9062 4.5 19.7188 4.3125L15.7188 0.3125C15.5312 0.09375 15.2812 0 15 0H7C6.4375 0 6 0.4375 6 1V2ZM15 2.40625V5H17.5938L15 2.40625Z"
          />
          <path d="M4 19C4 18.4375 4.4375 18 5 18H9C9.5625 18 10 18.4375 10 19C10 19.5625 9.5625 20 9 20H5C4.4375 20 4 19.5625 4 19Z" />
          <path d="M5 14H9C9.5625 14 10 14.4375 10 15C10 15.5625 9.5625 16 9 16H5C4.4375 16 4 15.5625 4 15C4 14.4375 4.4375 14 5 14Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.71875 5.3125C9.53125 5.09375 9.28125 5 9 5H1C0.4375 5 0 5.4375 0 6V23C0 23.5625 0.4375 24 1 24H13C13.5625 24 14 23.5625 14 23V10C14 9.71875 13.9062 9.5 13.7188 9.3125L9.71875 5.3125ZM2 7H7V11C7 11.5312 7.4375 12 8 12H12V22H2V7ZM9 10V7.40625L11.5938 10H9Z"
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
            d="M24.25 0.656296C23.8125 0.25 23.25 0 22.6562 0H11.25C10.2501 0 9.41021 0.639841 9.11411 1.53567C9.04123 1.67442 9 1.83239 9 2V3C9 3.55228 9.44771 4 10 4C10.5523 4 11 3.55228 11 3V2.25C11 2.125 11.125 2 11.25 2H21V7C21 7.5625 21.4375 8 22 8H27V23.75C27 23.875 26.875 24 26.75 24H26C25.4477 24 25 24.4477 25 25C25 25.5523 25.4477 26 26 26H27C27.1676 26 27.3256 25.9588 27.4643 25.8859C28.3602 25.5898 29 24.7499 29 23.75V6.3438C29 5.75 28.7812 5.1875 28.3437 4.75L24.25 0.656296ZM23 6V2.2188L26.7813 6H23Z"
          />
          <path d="M8 27C7.4375 27 7 26.5625 7 26C7 25.4375 7.4375 25 8 25H18C18.5625 25 19 25.4375 19 26C19 26.5625 18.5625 27 18 27H8Z" />
          <path d="M8 23C7.4375 23 7 22.5625 7 22C7 21.4375 7.4375 21 8 21H18C18.5625 21 19 21.4375 19 22C19 22.5625 18.5625 23 18 23H8Z" />
          <path d="M8 19C7.4375 19 7 18.5625 7 18C7 17.4375 7.4375 17 8 17H18C18.5625 17 19 17.4375 19 18C19 18.5625 18.5625 19 18 19H8Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.25 6.6563C17.8125 6.25 17.25 6 16.6562 6H5.25C4 6 3 7 3 8.25V29.75C3 31 4 32 5.25 32H20.75C22 32 23 31 23 29.75V12.3438C23 11.75 22.7812 11.1875 22.3437 10.75L18.25 6.6563ZM5.25 8H15V13C15 13.5625 15.4375 14 16 14H21V29.75C21 29.875 20.875 30 20.75 30H5.25C5.125 30 5 29.875 5 29.75V8.25C5 8.125 5.125 8 5.25 8ZM17 12V8.2188L20.7813 12H17Z"
          />
        </LargeSvg>
      );
  }
};

CopyIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

CopyIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default CopyIcon;
