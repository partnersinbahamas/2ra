import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const ChevronDown: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-3 -6 18 18' : '0 0 12 7'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.994 1.3059e-05C0.730526 0.00106789 0.47816 0.106269 0.291948 0.292668C0.105737 0.479067 0.000789899 0.731539 0 0.995013C0 1.26101 0.133 1.52601 0.298 1.69201L5.304 6.70201C5.503 6.90001 5.768 7.00001 6 7.00001C6.22648 7.00412 6.44676 6.92595 6.62 6.78001L11.702 1.69201C11.901 1.52601 12 1.26101 12 0.995013C11.9992 0.731539 11.8943 0.479067 11.7081 0.292668C11.5218 0.106269 11.2695 0.00106789 11.006 1.3059e-05C10.74 1.3059e-05 10.476 0.100013 10.276 0.299013L6 4.57901L1.724 0.299013C1.628 0.203563 1.5141 0.128015 1.38882 0.0767037C1.26355 0.0253929 1.12937 -0.000669264 0.994 1.3059e-05Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-4 -8 22 22' : '0 0 14 8'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 0.00011473C13.563 0.00011473 14 0.438115 14 1.00011C14 1.25011 13.875 1.50011 13.687 1.68811L7.719 7.71812C7.52419 7.90057 7.2669 8.00148 7 8.00011C6.75 8.00011 6.469 7.90611 6.281 7.71911L0.312 1.68711C0.125 1.50011 0 1.25011 0 1.00011C0 0.437115 0.438 0.00011473 1 0.00011473C1.281 0.00011473 1.5 0.0941149 1.719 0.281115L7 5.56212L12.281 0.282114C12.3758 0.189329 12.4884 0.116554 12.6119 0.0681098C12.7354 0.019666 12.8674 -0.00345721 13 0.00011473Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-5 -10 28 28' : '0 -1 18 10'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 0C17.562 0 18 0.406 18 1C18 1.25 17.906 1.5 17.719 1.719L9.71898 9.719C9.52093 9.89601 9.26557 9.99545 8.99998 9.999C8.74998 9.999 8.49998 9.906 8.28098 9.719L0.280977 1.719C0.103969 1.52096 0.00452389 1.2656 0.000976562 1C0.000976563 0.75 0.0939768 0.5 0.280977 0.281C0.479232 0.103689 0.735018 0.00421682 1.00098 0.0010004C1.25098 0.0010004 1.50098 0.0940001 1.71898 0.281L8.99998 7.594L16.281 0.281C16.5 0.0940001 16.75 0 17 0Z"
          />
        </LargeSvg>
      );
  }
};

ChevronDown.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

ChevronDown.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default ChevronDown;
