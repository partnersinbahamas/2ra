import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const ReportIcon: React.FC<TProps> = ({ className, color, style, withBox }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={withBox ? '-2 -2 16 20' : '0 0 12 16'}
    style={style}
    fill={color}
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0c.25 0 .5.094.688.281l3.03 3A.99.99 0 0112 4v11c0 .563-.438 1-1 1H1c-.563 0-1-.438-1-1V1c0-.563.438-1 1-1h7zM6.969 2H2v12h8V5H7.969c-.563 0-1-.438-1-1V2zM4 7h4v1.969H4V7zm0 3h4v2H4v-2z"
    />
  </Svg>
);

ReportIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

ReportIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default ReportIcon;
