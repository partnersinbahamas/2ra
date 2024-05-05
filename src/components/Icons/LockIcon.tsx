import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const LockIcon: React.FC<TProps> = ({ className, color, style, withBox }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={withBox ? '0 1.5 32 32' : '5.5 4 21 25'}
    style={style}
    fill={color}
    className={className}
  >
    <path
      d="M1 0h30c.6 0 1 .4 1 1v30c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z"
      fill="none"
    />
    <path
      d="M18.1 19.8c0-1.2-.9-2.1-2.1-2.1s-2.1.9-2.1 2.1c0 .7.4 1.4.9 1.7l-.9 5.6h4.2l-.9-5.6c.5-.4.9-1 .9-1.7zM16 6.1c-3.2 0-6.3 2.6-6.3 5.8v3.7h12.6v-3.7c0-3.2-3.1-5.8-6.3-5.8z"
      fill="none"
    />
    <path d="M24.4 15.5v-3.7c0-4.4-4-7.9-8.4-7.9s-8.4 3.5-8.4 7.9v3.7H5.5v13.7h21V15.5h-2.1zm-6.3 11.6h-4.2l.9-5.6c-.6-.4-1-1-.9-1.7 0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1c0 .7-.4 1.4-.9 1.7l.9 5.6zm4.2-11.6H9.7v-3.7C9.7 8.6 12.8 6 16 6s6.3 2.6 6.3 5.8v3.7z" />
  </Svg>
);

LockIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

LockIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default LockIcon;
