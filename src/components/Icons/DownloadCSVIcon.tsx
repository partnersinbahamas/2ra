import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const DownloadCSVIcon: React.FC<TProps> = ({ className, color, style, withBox }) => {
  const id = uniqueId('download_csv_');
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={withBox ? '0 0 32 32' : '2.25 4 27.25 24'}
      style={style}
      fill={color}
      className={className}
      role="img"
      aria-labelledby={id}
    >
      <title id={id}>Download CSV</title>
      <g>
        <polygon points="10 13 10 6 19 6 19 10 23 10 23 13 25 13 25 9 20 4 8 4 8 13 10 13" />
        <polygon points="23 26 10 26 8 26 8 28 25 28 25 26 23 26" />
        <g>
          <path d="M2.38,19.53a4.72,4.72,0,0,1,.26-1.67A2.6,2.6,0,0,1,4,16.4a3.76,3.76,0,0,1,1.59-.32,4.86,4.86,0,0,1,1.61.27v1.22a4.22,4.22,0,0,0-1.57-.31,1.49,1.49,0,0,0-1.23.48A3,3,0,0,0,4,19.51a2.68,2.68,0,0,0,.44,1.77,1.53,1.53,0,0,0,1.18.44,4.39,4.39,0,0,0,1.61-.32v1.16a3.88,3.88,0,0,1-1.69.36A3,3,0,0,1,3.09,22,3.74,3.74,0,0,1,2.38,19.53Z" />
          <path d="M8,22.51V21.27a6.54,6.54,0,0,0,.62.27,3.6,3.6,0,0,0,1.17.2c.75,0,1.13-.24,1.13-.72a.69.69,0,0,0-.4-.6A8.67,8.67,0,0,0,9.58,20a3,3,0,0,1-1.11-.69,2,2,0,0,1,.2-2.7,2.55,2.55,0,0,1,1.73-.51,4.94,4.94,0,0,1,1.64.31v1.24a4.09,4.09,0,0,0-1.57-.37c-.65,0-1,.21-1,.63a.66.66,0,0,0,.32.53,7,7,0,0,0,1,.49,3.64,3.64,0,0,1,1.08.63,1.81,1.81,0,0,1,.53,1.36,1.85,1.85,0,0,1-.65,1.5,2.88,2.88,0,0,1-1.89.51A4.48,4.48,0,0,1,8,22.51Z" />
          <path d="M12.89,16.24h1.67l1.52,4.35,1.56-4.35H19L16.52,22.8H15.33Z" />
        </g>
        <rect x="24" y="15" width="1" height="6" />
        <polygon points="28.74 17.79 24.5 22.04 20.26 17.79 19.55 18.5 23.79 22.74 24.5 23.45 25.21 22.74 29.45 18.5 28.74 17.79" />
        ˇ
      </g>
    </Svg>
  );
};

DownloadCSVIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

DownloadCSVIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default DownloadCSVIcon;
