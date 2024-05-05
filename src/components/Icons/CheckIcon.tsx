import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const CheckIcon: React.FC<TIcon> = ({
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
          viewBox={withBox ? '-3 -4 18 18' : '0 0 12 9'}
          className={className}
          fill={color}
          style={style}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 5.03806C0 4.48506 0.532 4.03406 1.003 4.03406C1.27 4.03406 1.52 4.15206 1.715 4.34606L3.993 6.61406L10.301 0.287062C10.4873 0.105273 10.7367 0.00245596 10.997 6.16805e-05C11.1291 -0.00141172 11.2602 0.0235255 11.3826 0.0734093C11.5049 0.123293 11.6161 0.197118 11.7095 0.29055C11.8029 0.383982 11.8768 0.495139 11.9267 0.617494C11.9765 0.739849 12.0015 0.870937 12 1.00306C12 1.24906 11.898 1.51506 11.714 1.70006L4.704 8.73906C4.61113 8.83265 4.50046 8.90669 4.37852 8.95684C4.25658 9.00699 4.12584 9.03223 3.994 9.03106C3.86184 9.03238 3.73075 9.00722 3.60847 8.95707C3.48618 8.90692 3.37518 8.8328 3.282 8.73906L0.302 5.75906C0.109953 5.56812 0.0013651 5.30887 0 5.03806Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -5 22 22' : '1 -0.5 16 12.5'}
          className={className}
          fill={color}
          style={style}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.32623 11.706L1.28623 7.666C1.19236 7.57827 1.11775 7.47199 1.06714 7.3539C1.01653 7.2358 0.991018 7.10848 0.992229 6.98C0.992229 6.416 1.45723 5.975 1.99623 5.975C2.26623 5.975 2.48623 6.073 2.68223 6.269L6.03723 9.575L15.3182 0.269C15.5142 0.098 15.7842 0 16.0042 0C16.5432 0 17.0082 0.44 17.0082 0.98C17.0082 1.249 16.9102 1.494 16.7632 1.69L6.74723 11.706C6.6548 11.8003 6.54426 11.875 6.42225 11.9255C6.30024 11.976 6.16928 12.0014 6.03723 12C5.90518 12.0014 5.77422 11.976 5.65221 11.9255C5.5302 11.875 5.41966 11.8003 5.32723 11.706H5.32623Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-5 -7 32 32' : '0 0.5 22 16.5'}
          className={className}
          fill={color}
          style={style}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.67143e-05 10.032C1.67143e-05 9.45198 0.484017 9.03198 1.00002 9.03198C1.38702 9.03198 1.48402 9.09698 1.71002 9.32198L7.00002 14.582L20.258 1.28998C20.3486 1.1935 20.4589 1.11759 20.5814 1.06739C20.7039 1.01719 20.8357 0.993861 20.968 0.998984C21.548 0.999984 22 1.51598 22 1.99998C22 2.25798 21.903 2.48398 21.677 2.70998L7.71002 16.71C7.51602 16.903 7.25802 17 7.00002 17C6.86782 17.0052 6.73603 16.9821 6.61354 16.932C6.49106 16.882 6.38074 16.8063 6.29002 16.71L0.290017 10.742C0.197335 10.6485 0.12401 10.5377 0.0742455 10.4159C0.0244809 10.2941 -0.000744179 10.1636 1.67143e-05 10.032Z"
          />
        </LargeSvg>
      );
  }
};

CheckIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

CheckIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default CheckIcon;
