import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
};

/**
 * @deprecated Use ChevronUpIcon instead.
 */
const ArrowUpIcon: React.FC<TProps> = ({ className, color, style }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="5 8 22 14"
    style={style}
    fill={color}
    className={className}
  >
    <g>
      <polygon points="27,19 24,22 16,14 8,22 5,19 16,8" />
    </g>
  </Svg>
);

ArrowUpIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
};

ArrowUpIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
};

export default ArrowUpIcon;
