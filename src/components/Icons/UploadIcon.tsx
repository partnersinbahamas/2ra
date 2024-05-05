import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
};

/**
 * @deprecated use SmoothUploadIcon instead
 */
const UploadIcon: React.FC<TProps> = ({ className, color, style }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    style={style}
    fill={color}
    className={className}
  >
    <path
      fill="none"
      d="M32,31c0,0.5-0.5,1-1,1H1c-0.5,0-1-0.5-1-1V1c0-0.5,0.5-1,1-1h30c0.5,0,1,0.5,1,1V31z"
    />
    <polygon points="9,25 9,22 12,22 12,25 20,25 20,22 23,22 23,25 23,28 9,28 " />
    <g>
      <rect x="14.5" y="12" width="3" height="12" />
    </g>
    <polygon points="6.1,13.9 8.1,15.9 16,8 23.9,15.9 25.9,13.9 16,4 " />
  </Svg>
);

UploadIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
};

UploadIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
};

export default UploadIcon;
