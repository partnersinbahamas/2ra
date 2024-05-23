import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const SendIcon: React.FC<TIcon> = ({
  className,
  color,
  size,
  style,
  withBox,
}) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-1 -1 22 22' : '2 2 16.7 16'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.71 2.29002C17.984 2.58202 18.082 2.99202 17.925 3.36302L12.305 17.375C12.2312 17.5583 12.1046 17.7155 11.9414 17.8267C11.7781 17.938 11.5855 17.9983 11.388 18C10.919 17.98 10.568 17.707 10.451 17.317L8.519 11.48L2.683 9.55002C2.49096 9.48819 2.3225 9.36894 2.20037 9.20836C2.07823 9.04778 2.0083 8.8536 2 8.65202C2 8.22202 2.234 7.85202 2.625 7.69502L16.637 2.07502C17.008 1.91802 17.418 2.01602 17.711 2.28902L17.71 2.29002ZM15.232 4.76802L5.884 8.51502L9.611 9.74502C9.904 9.86202 10.138 10.076 10.236 10.389L11.466 14.116L15.232 4.76802Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '0 0 24 24' : '2 2 19 20'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.6668 3.30997C20.9578 3.57697 21.0308 3.98997 20.9098 4.37997L14.5658 20.858C14.2988 21.563 13.6658 22 12.9378 22H12.8648C12.4972 21.9914 12.1417 21.8668 11.8492 21.6441C11.5566 21.4215 11.3419 21.112 11.2358 20.76L9.34077 14.636L3.24077 12.74C2.89016 12.6394 2.58077 12.4297 2.35758 12.1412C2.13439 11.8527 2.00904 11.5006 1.99977 11.136C1.98353 10.7676 2.08261 10.4034 2.28318 10.094C2.48376 9.7846 2.77586 9.54549 3.11877 9.40997L19.5968 3.06697C19.9618 2.92097 20.3748 3.01797 20.6668 3.30997ZM17.3128 8.07397L11.3088 14.125L12.9618 19.448L17.3118 8.07397H17.3128ZM15.9028 6.66397L4.52877 11.039L9.87477 12.691L15.9028 6.66397V6.66397Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '0 0 32 32' : '2 3 27 27'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.217 3.78999C28.475 4.07999 28.572 4.49899 28.443 4.88599L19.343 28.21C19.1998 28.5899 18.944 28.917 18.6098 29.1475C18.2756 29.3781 17.879 29.501 17.473 29.5C17.057 29.5064 16.6494 29.3822 16.3077 29.1449C15.966 28.9076 15.7073 28.5691 15.568 28.177L12.374 19.629L3.823 16.435C3.016 16.112 2.5 15.37 2.5 14.532C2.5 13.692 2.984 12.951 3.79 12.628L27.12 3.56299C27.507 3.43399 27.927 3.49899 28.217 3.78899V3.78999ZM24.797 8.62799L14.342 19.08L17.472 27.468L24.797 8.62799V8.62799ZM23.345 7.20799L4.533 14.533L12.89 17.662L23.345 7.20899V7.20799Z"
          />
        </LargeSvg>
      );
  }
};

SendIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

SendIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default SendIcon;
