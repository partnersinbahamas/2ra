import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

/**
 * @deprecated
 */

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const SheetClockIcon: React.FC<TProps> = ({ className, color, style, withBox }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={withBox ? '0 0 24 24' : '2 3 19.2 19.5'}
    fill={color}
    stroke={color}
    className={className}
    style={style}
  >
    <path
      fill="none"
      stroke="none"
      d="M24 23.25a.752.752 0 0 1-.75.75H.75a.752.752 0 0 1-.75-.75V.75A.752.752 0 0 1 .75 0h22.5a.752.752 0 0 1 .75.75z"
    />
    <path
      stroke="none"
      d="M21.158 21.068H9.396V2.921h8.009l3.753 3.888v14.258zM10.965 4.521v15.125h8.663V7.479h-2.954V4.521z"
    />
    <g fill="#fff" strokeWidth="2" transform="translate(2.191 9.396)">
      <circle cx="6.572" cy="6.572" r="6.572" stroke="none" />
      <circle fill="none" cx="6.572" cy="6.572" r="5.572" />
    </g>
    <path stroke="none" d="M9.493 12.317h-1.46v5.112h3.651v-1.46H9.493z" />
  </Svg>
);

SheetClockIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

SheetClockIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default SheetClockIcon;
