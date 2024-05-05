import React from 'react';
import PropTypes from 'prop-types';
import { BLACK } from '../Colors/colors';
import Svg from './Svg';

type TProps = {
  backgroundColor?: string;
  borderColor?: string;
  className?: string;
  color?: string;
  isHalfFilled?: boolean;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const StarIcon: React.FC<TProps> = ({
  backgroundColor,
  borderColor,
  className,
  color,
  isHalfFilled,
  style,
  withBox,
}) => {
  const gradient = isHalfFilled && (
    <defs>
      <linearGradient id="gradient">
        <stop offset="50%" stopColor={color} />
        <stop offset="50%" stopColor={backgroundColor} />
      </linearGradient>
    </defs>
  );
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={withBox ? '10.5 713 32 32' : '14.5 717 24 24'}
      style={style}
      className={className}
    >
      {gradient}
      <g>
        <polygon
          style={{
            fill: gradient ? 'url(#gradient)' : color,
            stroke: borderColor,
          }}
          points="31.5,730.5 38.5,725.5 29.5,725.5 26.5,716.5 23.5,725.5 14.5,725.5 21.5,730.5 18.5,739.5 
			26.5,733.9004 34.5,739.5"
        />
      </g>
    </Svg>
  );
};

StarIcon.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  isHalfFilled: PropTypes.bool,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

StarIcon.defaultProps = {
  borderColor: 'transparent',
  className: '',
  color: BLACK,
  style: {},
  withBox: false,
};

export default StarIcon;
