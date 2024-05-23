import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const CancelCircleIcon: React.FC<TProps> = ({
  className,
  color,
  style,
  withBox,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={withBox ? '-2 -2 32 32' : '0 0 28 28'}
    style={style}
    fill={color}
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 0C21.719 0 28 6.281 28 14C28 21.719 21.719 28 14 28C6.281 28 0 21.719 0 14C0 6.281 6.281 0 14 0ZM14 2C7.375 2 2 7.375 2 14C2 20.625 7.375 26 14 26C20.625 26 26 20.625 26 14C26 7.375 20.625 2 14 2ZM8 9C8 8.437 8.406 8 9 8C9.281 8 9.5 8.063 9.719 8.281L14 12.562L18.281 8.282C18.3748 8.18782 18.4872 8.11413 18.6109 8.06559C18.7347 8.01705 18.8672 7.99472 19 8C19.563 8 20 8.406 20 9C20 9.281 19.937 9.5 19.719 9.719L15.437 14L19.719 18.281C19.906 18.469 20 18.75 20 19C20 19.563 19.594 20 19 20C18.719 20 18.531 19.969 18.281 19.719L14 15.437L9.719 19.719C9.62509 19.813 9.51271 19.8865 9.38896 19.9349C9.2652 19.9832 9.13276 20.0054 9 20C8.438 20 8 19.594 8 19C8 18.75 8.031 18.531 8.281 18.281L12.562 14L8.282 9.719C8.18787 9.62514 8.11421 9.51279 8.06568 9.38904C8.01714 9.26529 7.99478 9.13283 8 9Z"
    />
  </Svg>
);

CancelCircleIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

CancelCircleIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default CancelCircleIcon;
