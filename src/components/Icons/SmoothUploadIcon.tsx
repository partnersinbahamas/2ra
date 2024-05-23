import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const SmoothUploadIcon: React.FC<TIcon> = ({
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
          viewBox={withBox ? '-3 -2 20 20' : '0 0 14 16'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 16H11C11.7956 16 12.5587 15.6839 13.1213 15.1213C13.6839 14.5587 14 13.7956 14 13V11C14 10.437 13.531 10 13 10C12.437 10 12 10.438 12 11V13C12 13.531 11.562 14 11 14H3C2.437 14 2 13.531 2 13V11C2 10.437 1.562 10 1 10C0.469 10 0 10.438 0 11V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16ZM6.313 0.281C6.53 0.0939999 6.78 0 7.03 0C7.28 0 7.499 0.0939999 7.718 0.281L10.78 3.375C10.936 3.563 10.999 3.813 10.999 4C10.999 4.531 10.561 5 9.999 5C9.686 5 9.499 4.906 9.28 4.687L8 3.407V10C8 10.531 7.562 11 7 11C6.437 11 6 10.531 6 10V3.406L4.719 4.688C4.63425 4.78758 4.52854 4.86718 4.40942 4.92112C4.29031 4.97506 4.16074 5.00199 4.03 5C3.531 5 3 4.562 3 3.969C3 3.719 3.094 3.469 3.281 3.281L6.313 0.281V0.281Z"
            fill={color}
          />
        </SmallSvg>
      );
    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-3 -2 24 24' : '-1 0 20 20'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 20H15C15.7956 20 16.5587 19.6839 17.1213 19.1213C17.6839 18.5587 18 17.7956 18 17V13C18 12.437 17.562 12 17 12C16.437 12 16 12.438 16 13V17C16 17.563 15.562 18 15 18H3C2.437 18 2 17.562 2 17V13C2 12.437 1.562 12 1 12C0.437 12 0 12.438 0 13V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20ZM9 0C9.25 0 9.531 0.093 9.719 0.28L13.688 4.272C13.7905 4.36044 13.8717 4.47081 13.9257 4.59493C13.9797 4.71905 14.0051 4.85374 14 4.989C14 5.519 13.562 5.955 13 5.955C12.75 5.955 12.469 5.862 12.281 5.675L10 3.399V13.002C10 13.563 9.531 14 9 14C8.437 14 8 13.563 8 13.002V3.4L5.719 5.675C5.5 5.862 5.25 5.955 5 5.955C4.437 5.955 4 5.519 4 4.958C4 4.708 4.094 4.458 4.313 4.272L8.28 0.28C8.47 0.093 8.75 0 9 0V0Z"
            fill={color}
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
            d="M0 19C0 18.437 0.438 18 1 18C1.563 18 2 18.437 2 19V25C2 25.562 2.438 26 3 26H21C21.562 26 22 25.562 22 25V19C22 18.437 22.437 18 23 18C23.562 18 24 18.437 24 19V25C24 25.7957 23.6839 26.5587 23.1213 27.1213C22.5587 27.6839 21.7956 28 21 28H3C2.20435 28 1.44129 27.6839 0.87868 27.1213C0.316071 26.5587 0 25.7957 0 25V19ZM5.281 6.31201C5.19142 6.40267 5.12058 6.5101 5.07254 6.62815C5.02449 6.7462 5.00018 6.87256 5.001 7.00001C5.001 7.50001 5.344 8.00001 6.001 8.00001C6.251 8.00001 6.501 7.90601 6.719 7.71901L11 3.40601V19C11 19.562 11.438 20 12 20C12.563 20 13 19.562 13 19V3.40601L17.281 7.71901C17.479 7.8961 17.7344 7.99556 18 7.99901C18.594 7.99901 19 7.56201 19 6.99901C19 6.74901 18.906 6.49901 18.719 6.28101L12.719 0.281014C12.5211 0.103565 12.2657 0.00374684 12 1.40084e-05C11.8725 -0.000671302 11.7461 0.0237945 11.628 0.0720116C11.51 0.120229 11.4026 0.191251 11.312 0.281014L5.282 6.31201H5.281Z"
            fill={color}
          />
        </LargeSvg>
      );
  }
};

SmoothUploadIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

SmoothUploadIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  size: 'LARGE',
  withBox: false,
};

export default SmoothUploadIcon;
