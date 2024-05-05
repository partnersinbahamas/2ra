import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const FullscreenExitIcon: React.FC<TProps> = ({
  className,
  color,
  style,
  withBox,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={withBox ? '-8 -9 84 84' : '0 0 66 66'}
    style={style}
    fill={color}
    className={className}
  >
    <g id="fullscreen_exit">
      <path d="M23 45.5V63C23 64.4875 21.985 65.5 20.5 65.5C19.015 65.5 18 64.5 18 63V48H3C1.5925 48 0.5 46.985 0.5 45.5C0.5 44.0925 1.4375 43 3 43H20.5C21.985 43 23 44.0125 23 45.5ZM43 45.5C43 44.0125 44.015 43 45.5 43H63C64.5625 43 65.5 44.095 65.5 45.5C65.5 46.985 64.405 48 63 48H48V63C48 64.5 46.985 65.5 45.5 65.5C44.015 65.5 43 64.4875 43 63V45.5ZM43 20.5V3C43 1.5125 44.015 0.5 45.5 0.5C46.985 0.5 48 1.5 48 3V18H63C64.4075 18 65.5 19.015 65.5 20.5C65.5 21.9075 64.5625 23 63 23H45.5C44.015 23 43 21.9875 43 20.5ZM23 20.5C23 21.9875 21.985 23 20.5 23H3C1.4375 23 0.5 21.905 0.5 20.5C0.5 19.015 1.595 18 3 18H18V3C18 1.5 19.015 0.5 20.5 0.5C21.985 0.5 23 1.5125 23 3V20.5Z" />
    </g>
  </Svg>
);

FullscreenExitIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

FullscreenExitIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default FullscreenExitIcon;
