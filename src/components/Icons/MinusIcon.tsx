import React from 'react';
import PropTypes from 'prop-types';

import { SmallSvg, MediumSvg, LargeSvg } from './Svg';

import { TIcon } from '.';

const MinusIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-4 -9 20 20' : '0 -5 12 12'}
          height="0.125rem"
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.003 2H0.997C0.45 2 0 1.549 0 1C0 0.451 0.45 0 0.997 0H11.003C11.55 0 12 0.451 12 1C12 1.549 11.55 2 11.003 2Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-4 -10 22 22' : '0 -6 14 14'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.99 2H1.01C0.877768 2.00159 0.746536 1.97688 0.623934 1.92731C0.501331 1.87775 0.389802 1.80431 0.295827 1.71126C0.201853 1.61822 0.127307 1.50743 0.0765226 1.38532C0.0257381 1.26322 -0.000272429 1.13224 2.15147e-06 0.999996C2.15147e-06 0.441996 0.446002 -4.11431e-06 1.01 -4.11431e-06H12.99C13.1222 -0.0015945 13.2535 0.0231113 13.3761 0.0726783C13.4987 0.122245 13.6102 0.195685 13.7042 0.288729C13.7982 0.381773 13.8727 0.492566 13.9235 0.61467C13.9743 0.736773 14.0003 0.867753 14 0.999996C14 1.558 13.554 2 12.99 2Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-6 -15 32 32' : '0 -9 20 20'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 2H19C19.564 2 20 1.5 20 1C20 0.437 19.562 0 19 0H1C0.436 0 0 0.5 0 1C0 1.563 0.438 2 1 2Z"
          />
        </LargeSvg>
      );
  }
};

MinusIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

MinusIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

/** @component */
export default MinusIcon;
