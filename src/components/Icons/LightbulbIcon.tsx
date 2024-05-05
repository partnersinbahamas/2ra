import React from 'react';
import PropTypes from 'prop-types';
import { WHITE, BLACK } from '../Colors/colors';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  fillColor?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const LightbulbIcon: React.FC<TProps> = ({ className, color, fillColor, style, withBox }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={withBox ? '-5 -2 24 24' : '0 0 14 20'}
    style={style}
    className={className}
  >
    <path
      d="M7 0a7 7 0 0 1 4 12.74V15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2.26A7 7 0 0 1 7 0M4 19v-1h6v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1M7 2a5 5 0 0 0-2 9.58V14h4v-2.42A5 5 0 0 0 7 2z"
      fill={color}
    />
    <path
      d="M4 15v-2.8A6 6 0 0 1 1 7a6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-3 5.2V15z"
      fill={fillColor}
    />
  </Svg>
);

LightbulbIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fillColor: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

LightbulbIcon.defaultProps = {
  className: '',
  color: BLACK,
  fillColor: WHITE,
  style: {},
  withBox: false,
};

export default LightbulbIcon;
