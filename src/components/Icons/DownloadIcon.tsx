import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const DownloadIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-3 -2 20 20' : '0 0 14 16'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 10C13.531 10 14 10.438 14 11V13C14 13.7956 13.6839 14.5587 13.1213 15.1213C12.5587 15.6839 11.7956 16 11 16H3C2.20435 16 1.44129 15.6839 0.87868 15.1213C0.316071 14.5587 0 13.7956 0 13V11C0 10.437 0.469 10 1 10C1.563 10 2 10.438 2 11V13C2 13.531 2.438 14 3 14H11C11.563 14 12 13.531 12 13V11C12 10.437 12.438 10 13 10ZM7 0C7.563 0 8 0.469 8 1V7.594L9.281 6.313C9.5 6.092 9.687 6 10 6C10.563 6 11 6.469 11 7C11 7.188 10.937 7.438 10.781 7.625L7.719 10.719C7.5 10.906 7.281 11 7.031 11C6.781 11 6.531 10.906 6.312 10.719L3.282 7.719C3.19194 7.62838 3.12066 7.52087 3.07227 7.40263C3.02387 7.28439 2.99931 7.15776 3 7.03C3 6.437 3.531 6 4.031 6C4.281 6 4.531 6.094 4.719 6.313L6 7.592V1C6 0.469 6.438 0 7 0Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-3 -2 24 24' : '0 0 18 20'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 20H15C15.7956 20 16.5587 19.6839 17.1213 19.1213C17.6839 18.5587 18 17.7956 18 17V13C18 12.437 17.562 12 17 12C16.437 12 16 12.438 16 13V17C16 17.563 15.562 18 15 18H3C2.437 18 2 17.562 2 17V13C2 12.437 1.562 12 1 12C0.437 12 0 12.438 0 13V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20ZM9 14C9.25 14 9.531 13.907 9.719 13.72L13.688 9.728C13.7905 9.63956 13.8717 9.52919 13.9257 9.40507C13.9797 9.28095 14.0051 9.14626 14 9.011C14 8.481 13.562 8.045 13 8.045C12.75 8.045 12.469 8.138 12.281 8.325L10 10.601V0.998C10 0.437 9.531 0 9 0C8.437 0 8 0.437 8 0.998V10.6L5.719 8.324C5.52091 8.14707 5.26558 8.04764 5 8.044C4.437 8.044 4 8.48 4 9.041C4 9.291 4.094 9.541 4.313 9.727L8.281 13.718C8.469 13.906 8.75 13.999 9 13.999V14Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-4 -2 32 32' : '0 0 24 28'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 19C0 18.437 0.438 18 1 18C1.563 18 2 18.437 2 19V25C2 25.562 2.438 26 3 26H21C21.562 26 22 25.562 22 25V19C22 18.437 22.437 18 23 18C23.562 18 24 18.437 24 19V25C24 25.7956 23.6839 26.5587 23.1213 27.1213C22.5587 27.6839 21.7956 28 21 28H3C2.20435 28 1.44129 27.6839 0.87868 27.1213C0.316071 26.5587 0 25.7956 0 25V19ZM5.281 13.687C5.10032 13.5041 4.99962 13.2571 5.001 13C5.001 12.5 5.344 12 6.001 12C6.251 12 6.501 12.094 6.719 12.281L11 16.593V1C11 0.437 11.438 0 12 0C12.563 0 13 0.438 13 1V16.593L17.281 12.281C17.4789 12.1036 17.7343 12.0037 18 12C18.594 12 19 12.437 19 13C19 13.25 18.906 13.5 18.719 13.719L12.719 19.719C12.521 19.8961 12.2656 19.9955 12 19.999C11.8726 19.9998 11.7462 19.9755 11.6281 19.9275C11.5101 19.8794 11.4027 19.8086 11.312 19.719L5.282 13.687H5.281Z"
          />
        </LargeSvg>
      );
  }
};

DownloadIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

DownloadIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default DownloadIcon;
