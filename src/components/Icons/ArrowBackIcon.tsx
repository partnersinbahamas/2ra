import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const ArrowBackIcon: React.FC<TIcon> = ({
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
          viewBox={withBox ? '0 0 20 20' : '3 4 14 12'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.31307 9.31304C3.21352 9.39743 3.13385 9.50277 3.07974 9.62153C3.02563 9.74029 2.99843 9.86954 3.00007 10C3.00007 10.25 3.09407 10.5 3.31307 10.719L8.28107 15.719C8.46907 15.906 8.75007 16 9.00007 16C9.56307 16 10.0001 15.562 10.0001 15C10.0008 14.8725 9.97629 14.7461 9.92807 14.6281C9.87986 14.51 9.80883 14.4026 9.71907 14.312L6.40607 11H16.0001C16.5631 11 17.0001 10.562 17.0001 10C17.0001 9.46904 16.5621 9.00004 16.0001 9.00004H6.40607L9.72007 5.71904C9.90607 5.50004 10.0001 5.25004 10.0001 5.00004C10.0001 4.46904 9.56207 4.00004 9.00007 4.00004C8.76895 3.99796 8.54461 4.07806 8.36707 4.22604L3.31207 9.31304H3.31307Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '0 0 24 24' : '4 5 16 14'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0049 12C20.0049 11.437 19.5679 11 19.0049 11H7.41195L11.6919 6.71901C11.7901 6.6266 11.8686 6.51524 11.9226 6.39166C11.9765 6.26809 12.0049 6.13486 12.0059 6.00001C12.0059 5.56201 11.6309 5.00001 10.9759 5.00001C10.8484 4.99933 10.722 5.02379 10.604 5.07201C10.4859 5.12023 10.3785 5.19125 10.2879 5.28101L4.28795 11.281C4.12625 11.4455 4.0281 11.662 4.01095 11.892L4.00495 12C3.97495 12.25 4.08295 12.515 4.28695 12.719L10.2869 18.719C10.4739 18.906 10.7549 19 10.9739 19C11.5369 19 12.0049 18.531 12.0049 18C12.0052 17.8652 11.9776 17.7317 11.9239 17.608C11.8702 17.4843 11.7916 17.373 11.6929 17.281L7.41195 13H19.0049C19.5679 13 20.0049 12.562 20.0049 12Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '0 0 32 32' : '6 7 20 18'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.0007 16C26.0007 15.438 25.5627 15 25.0007 15H9.40674L15.7207 8.72C15.8147 8.62589 15.8881 8.51331 15.9363 8.38937C15.9845 8.26544 16.0064 8.13285 16.0007 8C16.0007 7.438 15.5947 7 15.0007 7C14.7507 7 14.5007 7.063 14.2817 7.282L6.28174 15.282C6.18792 15.3758 6.11452 15.4881 6.06616 15.6116C6.0178 15.7352 5.99553 15.8674 6.00074 16C6.00074 16.25 6.06374 16.5 6.28174 16.719L14.2817 24.719C14.3758 24.813 14.4884 24.8865 14.6123 24.9349C14.7362 24.9833 14.8688 25.0054 15.0017 25C15.5947 25 16.0017 24.531 16.0017 24C16.0017 23.75 15.9387 23.5 15.7197 23.281L9.40674 17.001H25.0007C25.5637 17.001 26.0007 16.563 26.0007 16.001V16Z"
          />
        </LargeSvg>
      );
  }
};

ArrowBackIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

ArrowBackIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default ArrowBackIcon;
