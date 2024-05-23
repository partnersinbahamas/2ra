import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const ArrowLongDownIcon: React.FC<TProps> = ({
  className,
  color,
  style,
  withBox,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={withBox ? '-5 -3 28 26' : '0 0 18 20'}
    style={style}
    fill={color}
    className={className}
  >
    <g id="arrow_down_with_line">
      <path d="M9 0C8.438 0 8 0.438 8 1V16.594L1.719 10.28C1.62501 10.1862 1.51259 10.1129 1.38884 10.0647C1.26508 10.0165 1.13269 9.99446 1 10C0.438 10 0 10.406 0 11C0 11.25 0.0630001 11.5 0.281 11.719L8.281 19.719C8.37506 19.8131 8.48761 19.8866 8.61154 19.935C8.73547 19.9834 8.86808 20.0055 9.001 20C9.251 20 9.501 19.938 9.719 19.719L17.719 11.719C17.813 11.6249 17.8865 11.5123 17.9349 11.3884C17.9833 11.2645 18.0054 11.1319 18 10.999C18.0016 10.8673 17.9768 10.7366 17.9271 10.6146C17.8774 10.4926 17.8038 10.3818 17.7106 10.2887C17.6174 10.1955 17.5066 10.122 17.3845 10.0725C17.2625 10.0229 17.1317 9.99825 17 10C16.75 10 16.5 10.063 16.281 10.281L10.001 16.594V1C10.001 0.438 9.563 0 9.001 0H9Z" />
    </g>
  </Svg>
);

ArrowLongDownIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

ArrowLongDownIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default ArrowLongDownIcon;
