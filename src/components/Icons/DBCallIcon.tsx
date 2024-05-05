import React, { CSSProperties } from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: CSSProperties;
  withBox?: boolean;
};

const DBCallIcon: React.FC<TProps> = ({ className, color, style, withBox }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={withBox ? '-2 -4.5 29 27' : '0.5 0 23.5 18.5'}
    style={style}
    fill={color}
    className={className}
    stroke="none"
  >
    <g clipPath="url(#clip0_504_6025)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.375 7.459C0.375 11.897 6.845 18.427 11.205 18.427C13.218 18.427 15.625 16.474 15.625 14.679C15.625 14.146 15.447 13.614 15.033 13.199L13.633 11.779C13.317 11.463 12.942 11.306 12.547 11.306C12.1032 11.3086 11.6783 11.4857 11.364 11.799L9.924 13.239C8.247 11.897 7.102 10.694 5.484 8.859L6.924 7.399C7.23765 7.08485 7.4151 6.65991 7.418 6.216C7.418 5.861 7.3 5.486 7.043 5.21L5.583 3.63C5.15 3.178 4.617 3 4.044 3C2.308 3 0.375 5.387 0.375 7.459Z"
      />
    </g>
    <path d="M13.1865 8.68037H10V0H13.1884C15.4333 0 16.6741 1.40568 16.6741 4.3004C16.6723 6.81244 15.833 8.65953 13.1865 8.68037ZM14.5713 4.48037C14.5713 2.7318 14.3894 1.3659 12.5064 1.3659H12.0839V7.27279H12.8246C13.9291 7.27279 14.5713 6.38998 14.5713 4.48037Z" />
    <path d="M22.1775 4.13937C22.7913 3.97645 23.695 3.2755 23.695 2.11799C23.695 1.93802 23.6571 0.00189209 21.217 0.00189209H17.5854V8.68037H20.6544C21.4671 8.68037 24 8.68037 24 6.24031C24 5.6303 23.7499 4.48227 22.1775 4.13937ZM19.6503 1.34127H20.3077C21.2417 1.34127 21.6111 1.66711 21.6111 2.38511C21.6111 2.95534 21.2038 3.43463 20.4782 3.43463H19.6503V1.34127ZM20.5047 7.27279H19.6503V5.04302H20.5616C21.6452 5.04302 21.9085 5.67577 21.9085 6.15885C21.9085 7.27279 20.8344 7.27279 20.5047 7.27279Z" />
    <defs>
      <clipPath id="clip0_504_6025">
        <rect width="16" height="16" transform="translate(0 3)" />
      </clipPath>
    </defs>
  </Svg>
);

DBCallIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

DBCallIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default DBCallIcon;
