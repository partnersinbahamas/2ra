import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const ArrowDoubleIcon: React.FC<TProps> = ({ className, color, style, withBox }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={withBox ? '-4 -4 27 25' : '0 0 19.5 16.5'}
    style={style}
    fill={color}
    className={className}
  >
    <g id="arrow_double">
      <path id="arrow_2" d="M2.371,0,0,2.2l6.466,6L0,14.2l2.371,2.3,8.944-8.3Z" />
      <path
        id="arrow_1"
        d="M2.371,0,0,2.2l6.466,6L0,14.2l2.371,2.3,8.944-8.3Z"
        transform="translate(8 0)"
      />
    </g>
  </Svg>
);

ArrowDoubleIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

ArrowDoubleIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default ArrowDoubleIcon;
