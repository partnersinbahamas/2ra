import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const MailIcon: React.FC<TProps> = ({ className, color, style, withBox }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={withBox ? '-2 -3 22 18' : '0 0 18 12'}
    style={style}
    fill={color}
    className={className}
  >
    <path d="M0 3.421v8.578h18V3.421l-9 5.25z" />
    <path d="M0 0v1.5l9 5.25 9-5.25V0z" />
  </Svg>
);

MailIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

MailIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default MailIcon;
