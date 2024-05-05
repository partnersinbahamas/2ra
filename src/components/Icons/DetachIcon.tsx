import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const DetachIcon: React.FC<TProps> = ({ className, color, style, withBox }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={style}
    fill={color}
    viewBox={withBox ? '-4 -4 32 32' : '1.8 1 20.3 22'}
    className={className}
  >
    <rect x="11" y="6" width="2" height="4" rx="1" />
    <rect x="11" y="11" width="2" height="2" rx="1" />
    <rect x="11" y="14" width="2" height="3" rx="1" />
    <rect x="2" y="1" width="20" height="8" rx="2" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 17H4V21H20V17ZM4 15C2.89543 15 2 15.8954 2 17V21C2 22.1046 2.89543 23 4 23H20C21.1046 23 22 22.1046 22 21V17C22 15.8954 21.1046 15 20 15H4Z"
    />
  </Svg>
);

DetachIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

DetachIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default DetachIcon;
