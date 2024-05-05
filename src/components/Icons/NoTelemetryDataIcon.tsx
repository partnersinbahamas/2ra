import React from 'react';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const NoTelemetryDataIcon: React.FC<TProps> = ({ className, color, style, withBox }) => (
  <Svg
    style={style}
    className={className}
    viewBox={withBox ? '-4 -4 32 32' : '0 0 24 24'}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="12" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.968 15.248C13.2817 15.4202 13.5432 15.6738 13.7248 15.9822C13.9064 16.2905 14.0015 16.6421 14 17C14 18.094 13.125 19 12 19C11.25 19 10.589 18.589 10.247 17.968L12.968 15.248ZM12.063 5C13.635 5 15.178 5.345 16.587 5.997L17.293 5.293C17.473 5.11365 17.7144 5.00953 17.9684 5.00177C18.2223 4.99402 18.4697 5.08322 18.6603 5.25125C18.8508 5.41928 18.9703 5.65355 18.9944 5.90647C19.0185 6.1594 18.9454 6.41201 18.79 6.613L18.707 6.707L6.707 18.707C6.51947 18.8945 6.26516 18.9998 6 18.9998C5.73484 18.9998 5.48053 18.8945 5.293 18.707C4.933 18.347 4.872 17.77 5.293 17.293L9.433 13.151C9.455 13.124 9.433 13.081 9.406 13.081C9.31123 13.1735 9.19885 13.2461 9.07551 13.2944C8.95217 13.3426 8.8204 13.3656 8.688 13.362C8.094 13.362 7.688 12.83 7.688 12.36C7.688 12.11 7.781 11.828 8 11.64C9.156 10.544 10.406 9.98 12.063 9.98C12.237 9.98 12.41 9.988 12.582 10.003L15.073 7.513C14.1099 7.15509 13.0905 6.97221 12.063 6.973C9.593 6.973 7.375 7.881 5.687 9.573C5.5 9.761 5.25 9.886 5 9.886C4.562 9.886 4 9.541 4 8.884C4 8.602 4.094 8.383 4.281 8.164C6.437 6.033 8.906 5 12.062 5H12.063Z"
      fill="white"
    />
  </Svg>
);

NoTelemetryDataIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default NoTelemetryDataIcon;
