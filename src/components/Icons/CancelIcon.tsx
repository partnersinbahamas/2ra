import React from 'react';
import PropTypes from 'prop-types';

import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const CancelIcon: React.FC<TProps> = ({ className, color, style, withBox }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={withBox ? '-6 -6 32 32' : '-0.25 -0.25 20.75 20.75'}
    style={style}
    fill={color}
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.6181 0.1942L10 8.5761L18.2928 0.2993C18.5033 0.0891002 18.7379 0 18.9968 0C19.5469 0 20 0.4207 20 1.0032C20 1.2621 19.9353 1.4563 19.7092 1.6828L11.4239 10L19.7091 18.3172C19.9029 18.5113 20 18.7702 20 18.9968C20 19.5469 19.5793 20 18.9968 20C18.7379 20 18.5437 19.9353 18.3172 19.7092L10 11.4239L1.7072 19.7007C1.4967 19.9109 1.2621 20 1.0032 20C0.4531 20 0 19.5793 0 18.9968C0 18.7379 0.0647001 18.5437 0.2908 18.3172L8.5761 10L0.2909 1.6828C0.0971002 1.4887 0 1.2298 0 1.0032C0 0.4531 0.4207 0 1.0032 0C1.1974 0 1.4239 0.0647 1.6181 0.1942Z"
    />
  </Svg>
);

CancelIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

CancelIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default CancelIcon;
