import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
};

/**
 * @deprecated Use ChevronDownIcon instead.
 */
const ArrowDownIcon: React.FC<TProps> = ({ className, color, style }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="5 9 22 15"
    style={style}
    fill={color}
    className={className}
  >
    <g>
      <polygon points="5,13 8,10 16,18 24,10 27,13 16,24" />
    </g>
  </Svg>
);

ArrowDownIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
};

ArrowDownIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
};

export default ArrowDownIcon;
