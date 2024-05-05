import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const PrintIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-1 -1.5 22 22' : '2 2 16 16'}
          style={style}
          fill={color}
          stroke={color}
          className={className}
        >
          <path d="M13.5 4V4.5H14H16.406C17.0134 4.5 17.5 5.05716 17.5 5.813V12.156C17.5 12.9558 17.0339 13.5 16.406 13.5H14H13.5V14V17C13.5 17.2865 13.2862 17.5 13 17.5H7C6.71348 17.5 6.5 17.3182 6.5 17V14V13.5H6H3.594C2.99599 13.5 2.5 12.9234 2.5 12.156V5.812C2.5 5.4379 2.61319 5.10069 2.80029 4.86763C2.9785 4.64563 3.23558 4.5 3.594 4.5H6H6.5V4V3C6.5 2.72347 6.7347 2.5 7 2.5H13C13.2433 2.5 13.5 2.73518 13.5 3V4ZM12.5 12V11.5H12H8H7.5V12V16V16.5H8H12H12.5V16V12ZM16.5 6V5.5H16H4H3.5V6V12V12.5H4H6H6.5V12V11C6.5 10.9126 6.54873 10.7834 6.66605 10.6661C6.78338 10.5487 6.91262 10.5 7 10.5H13C13.0874 10.5 13.2166 10.5487 13.3339 10.6661C13.4513 10.7834 13.5 10.9126 13.5 11V12V12.5H14H16H16.5V12V6Z" />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '0 0 24 24' : '2 2 20 20'}
          style={style}
          fill={color}
          stroke={color}
          className={className}
        >
          <path d="M17.495 6.005V6.505H17.995L19.0012 6.505C19.0013 6.505 19.0014 6.505 19.0014 6.505C19.6636 6.50617 20.2983 6.76967 20.7666 7.23781C21.2348 7.70581 21.4984 8.34019 21.5 9.00212C21.5 9.00241 21.5 9.00271 21.5 9.003V14.997C21.5 14.9973 21.5 14.9976 21.5 14.9979C21.4984 15.6598 21.2348 16.2942 20.7666 16.7622C20.2984 17.2303 19.6638 17.4938 19.0017 17.495C19.0015 17.495 19.0013 17.495 19.0012 17.495L17.995 17.495H17.495V17.995V20.009C17.495 20.8378 16.8249 21.5 16.028 21.5H7.972C7.17491 21.5 6.505 20.8376 6.505 20.01V17.995V17.495H6.005L4.99883 17.495C4.99865 17.495 4.99847 17.495 4.99829 17.495C4.33624 17.4938 3.70163 17.2303 3.2334 16.7622C2.76515 16.2941 2.50145 15.6596 2.5 14.9975V9.00253C2.50145 8.34045 2.76515 7.7059 3.2334 7.23781C3.7017 6.76967 4.33641 6.50617 4.99855 6.505C4.99865 6.505 4.99874 6.505 4.99883 6.505L6.005 6.505H6.505V6.005V3.99C6.505 3.16236 7.17491 2.5 7.972 2.5H16.028C16.8251 2.5 17.495 3.16236 17.495 3.99V6.005ZM16.505 16.005V15.505H16.005H7.995H7.495V16.005V20.009V20.509H7.995H16.005H16.505V20.009V16.005ZM4.998 7.495V7.49497L4.99251 7.49503C4.79605 7.49719 4.60194 7.53805 4.42129 7.61527C4.24063 7.6925 4.07697 7.80458 3.93966 7.9451C3.80235 8.08562 3.69408 8.25182 3.62105 8.43422C3.54843 8.61557 3.51207 8.8094 3.514 9.00472V14.9953C3.51207 15.1906 3.54843 15.3844 3.62105 15.5658C3.69408 15.7482 3.80235 15.9144 3.93966 16.0549C4.07697 16.1954 4.24063 16.3075 4.42129 16.3847C4.60195 16.462 4.79605 16.5028 4.99251 16.505L4.99251 16.505H4.998H6.005H6.505V16.005C6.505 15.1646 7.1624 14.491 7.972 14.491H16.028C16.8368 14.491 17.495 15.1648 17.495 16.005V16.505H17.995H19.002V16.505L19.0075 16.505C19.2039 16.5028 19.3981 16.462 19.5787 16.3847C19.7594 16.3075 19.923 16.1954 20.0603 16.0549C20.1976 15.9144 20.3059 15.7482 20.3789 15.5658C20.4516 15.3844 20.4879 15.1906 20.486 14.9952V9.00477C20.4879 8.80943 20.4516 8.61559 20.3789 8.43422C20.3059 8.25182 20.1976 8.08562 20.0603 7.9451C19.923 7.80458 19.7594 7.6925 19.5787 7.61527C19.3981 7.53805 19.204 7.49719 19.0075 7.49503L19.002 7.995V7.495H4.998ZM16.505 4.014V3.514H16.005H7.995H7.495V4.014V6.004V6.504H7.995H16.005H16.505V6.004V4.014ZM6.005 11H6.505C6.505 10.7158 6.73043 10.5 6.993 10.5H9.016C9.27989 10.5 9.505 10.7162 9.505 11C9.505 11.2838 9.27989 11.5 9.016 11.5H6.99441C6.92996 11.4995 6.86622 11.4864 6.8068 11.4614C6.74704 11.4363 6.69283 11.3996 6.64727 11.3535C6.60171 11.3074 6.56569 11.2527 6.54128 11.1927C6.51686 11.1326 6.50453 11.0684 6.50499 11.0035L6.005 11Z" />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '0 0 32 32' : '2 2 28 28'}
          style={style}
          fill={color}
          stroke={color}
          className={className}
        >
          <path d="M23.5 6V6.5H24H27C27.663 6.5 28.2989 6.76339 28.7678 7.23223C29.2366 7.70107 29.5 8.33696 29.5 9V19C29.5 19.663 29.2366 20.2989 28.7678 20.7678C28.2989 21.2366 27.663 21.5 27 21.5H24H23.5V22V28C23.5 28.8179 22.8179 29.5 22 29.5H10C9.18214 29.5 8.5 28.8179 8.5 28V22V21.5H8H5C4.33696 21.5 3.70107 21.2366 3.23223 20.7678C2.76339 20.2989 2.5 19.663 2.5 19V9C2.5 8.33696 2.76339 7.70107 3.23223 7.23223C3.70107 6.76339 4.33696 6.5 5 6.5H8H8.5V6V4C8.5 3.18214 9.18214 2.5 10 2.5H22C22.8179 2.5 23.5 3.18214 23.5 4V6ZM22.5 18V17.5H22H10H9.5V18V28V28.5H10H22H22.5V28V18ZM8 20.5H8.5V20V18C8.5 17.1821 9.18214 16.5 10 16.5H22C22.8179 16.5 23.5 17.1821 23.5 18V20V20.5H24H27C27.8391 20.5 28.5 19.8391 28.5 19V9C28.5 8.16053 27.8378 7.5 27 7.5H5C4.16086 7.5 3.5 8.16086 3.5 9V19C3.5 19.8395 4.16219 20.5 5 20.5H8ZM22.5 4V3.5H22H10H9.5V4V6V6.5H10H22H22.5V6V4ZM8.5 11C8.5 10.7135 8.71381 10.5 9 10.5H13C13.2865 10.5 13.5 10.7138 13.5 11C13.5 11.2865 13.2862 11.5 13 11.5H9C8.71347 11.5 8.5 11.2862 8.5 11ZM12.5 25C12.5 24.7135 12.7138 24.5 13 24.5H19C19.2865 24.5 19.5 24.7138 19.5 25C19.5 25.2865 19.2862 25.5 19 25.5H13C12.7135 25.5 12.5 25.2862 12.5 25ZM12.5 21C12.5 20.7135 12.7138 20.5 13 20.5H19C19.2865 20.5 19.5 20.7138 19.5 21C19.5 21.2865 19.2862 21.5 19 21.5H13C12.7135 21.5 12.5 21.2862 12.5 21Z" />
        </LargeSvg>
      );
  }
};

PrintIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

PrintIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default PrintIcon;