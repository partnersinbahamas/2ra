import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const MapIcon: React.FC<TProps> = ({ className, color, style, withBox }) => (
  <Svg
    className={className}
    fill={color}
    style={style}
    viewBox={withBox ? '-2.5 -2 21 21' : '0 1 16 15'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.656 1.02383L10.938 2.6905L14.5 0.994309C14.65 0.92288 14.813 0.904785 15.063 0.904785C15.5 0.904785 16 1.2324 16 1.70859V13.2857C16 13.6134 15.875 13.9105 15.562 14.06L11.469 16.0534C11.332 16.1145 11.1822 16.1451 11.031 16.1429C10.906 16.1429 10.719 16.0829 10.531 16.0534L5.062 14.2981L1.437 16.0534C1.31017 16.1111 1.17158 16.1417 1.031 16.1429C0.47 16.1429 0 15.8153 0 15.1905V3.7324C0 3.43431 0.125 3.07717 0.438 2.92859L4.438 1.02383C4.646 0.924785 4.811 0.907642 4.95 0.905737L5.031 0.904785C5.188 0.904785 5.309 0.914309 5.656 1.02383ZM6 3.13717V12.601L10 13.881V4.41621L6 3.13812V3.13717ZM14 3.37526L12 4.32764V13.6429L14 12.6905V3.37526ZM4 3.37526L2 4.32764V13.6429L4 12.6905V3.37526Z"
    />
  </Svg>
);

MapIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

MapIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default MapIcon;
