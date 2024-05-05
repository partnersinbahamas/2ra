import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const MinusCircleIcon: React.FC<TIcon> = ({
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
          viewBox={withBox ? '-2 -2 20 20' : '0 0 16 16'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0C12.424 0 16 3.576 16 8C16 12.424 12.424 16 8 16C3.576 16 0 12.424 0 8C0 3.576 3.576 0 8 0ZM8 1.995C4.682 1.995 1.995 4.732 1.995 8C1.995 11.279 4.71 14.005 8 14.005C11.231 14.005 14.005 11.356 14.005 8C14.0039 6.4077 13.3709 4.88092 12.245 3.75499C11.1191 2.62907 9.5923 1.99606 8 1.995ZM4.01 8.998V7.002H11.99V8.998H4.01Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 24 24' : '0 0 20 20'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0121 6.88837e-05C15.5121 6.88837e-05 20.0001 4.48907 20.0001 9.98807C19.9901 12.6403 18.932 15.1811 17.0566 17.0566C15.1811 18.932 12.6403 19.9901 9.98807 20.0001C4.48807 20.0001 6.88837e-05 15.5111 6.88837e-05 10.0121C-0.00482225 8.6959 0.250807 7.39178 0.752225 6.17486C1.25364 4.95794 1.99093 3.85229 2.92161 2.92161C3.85229 1.99093 4.95794 1.25364 6.17486 0.752225C7.39178 0.250807 8.6959 -0.00482225 10.0121 6.88837e-05ZM9.99807 1.99807C5.57407 1.99807 1.99807 5.57007 1.99807 9.98807C1.99807 14.4071 5.57407 18.0021 9.99807 18.0021C14.4211 18.0021 17.9981 14.4071 17.9981 9.98807C17.9982 8.93793 17.7913 7.89806 17.3892 6.92796C16.9871 5.95786 16.3976 5.07655 15.6546 4.33445C14.9116 3.59236 14.0295 3.00403 13.0589 2.60313C12.0883 2.20223 11.0482 1.99662 9.99807 1.99807ZM15.0161 9.00307C15.5581 9.00307 16.0051 9.45007 16.0051 9.99107C16.0067 10.1225 15.9823 10.2529 15.9335 10.3749C15.8846 10.4969 15.8122 10.6081 15.7203 10.7021C15.6285 10.796 15.519 10.871 15.3982 10.9227C15.2773 10.9743 15.1475 11.0016 15.0161 11.0031H4.99307C4.86174 11.0015 4.73201 10.9741 4.61129 10.9224C4.49056 10.8707 4.3812 10.7957 4.28946 10.7017C4.19771 10.6077 4.12537 10.4966 4.07658 10.3747C4.02778 10.2527 4.00348 10.1224 4.00507 9.99107C4.00507 9.45007 4.45207 9.00307 4.99307 9.00307H15.0161Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 32 32' : '0 0 28 28'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 0C21.719 0 28 6.281 28 14C28 21.719 21.719 28 14 28C6.281 28 0 21.719 0 14C0 6.281 6.281 0 14 0ZM14 2C7.375 2 2 7.375 2 14C2 20.625 7.375 26 14 26C20.625 26 26 20.625 26 14C26 7.375 20.625 2 14 2ZM20 13C20.563 13 21 13.438 21 14C21 14.563 20.562 15 20 15H8C7.437 15 7 14.562 7 14C7 13.437 7.438 13 8 13H20Z"
          />
        </LargeSvg>
      );
  }
};

MinusCircleIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

MinusCircleIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default MinusCircleIcon;
