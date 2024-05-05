import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const UnlockIcon: React.FC<TProps> = ({ className, color, style, withBox }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={withBox ? '0 0.5 32 32' : '6 4 20 24'}
    style={style}
    fill={color}
    className={className}
  >
    <rect width="32" height="32" rx="1" fill="none" />
    <path d="M24 15v-3.5C24 7.35 20.15 4 16 4a8.11 8.11 0 0 0-7.83 6h2.08A6.18 6.18 0 0 1 16 6c3.05 0 6 2.45 6 5.5V15H6v13h20V15zm-6 11h-4l.9-5.35A1.93 1.93 0 0 1 14 19a2 2 0 0 1 4 0 1.93 1.93 0 0 1-.9 1.65z" />
  </Svg>
);

UnlockIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

UnlockIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default UnlockIcon;
