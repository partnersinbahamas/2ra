import React, { InputHTMLAttributes, useCallback } from 'react';
import classNames from 'classnames';

import { TStile } from '../utils/types/types';
import defaultProps from '../utils/variables/defaultProps';
import { Error, InputComponent, InputWrapper, Label, Heading } from './Input.styles';
import styles from './Input.module.scss';

export interface TProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeValue?: (value: string) => void;
  error?: string;
  stile?: TStile;
  disabled?: boolean;
  className?: any;
}

export const Input: React.FC<TProps> = ({
  title,
  value,
  onChange,
  onChangeValue,
  error,
  stile = defaultProps.stile,
  disabled,
  className,
  ...props
}) => {
  // const { className, ...inputProps } = props;
  const label = title ? `${title}-label` : 'label';

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (onChange) onChange(event);
      if (onChangeValue) onChangeValue(value);
    },
    [onChange, onChangeValue],
  );

  // console.log(styles, className['label']);

  const primed = stile === 'primary';

  return (
    <InputWrapper disabled={disabled} className={classNames(styles[stile], className)}>
      <Label
        data-name="label"
        aria-label={label}
        // stile={stile}
        disabled={disabled}
        className={classNames(
          primed && styles['label'],
          className && `${className['input-label']} ${className}-label`,
        )}
      >
        <Heading
          data-name="heading"
          // stile={stile}
          disabled={disabled}
          className={classNames(
            primed && styles['heading'],
            className && `${className['heading']} ${className}-heading`,
          )}
        >
          {title}
        </Heading>
        <InputComponent
          data-name="input"
          error={error?.length ? error : undefined}
          stile={stile}
          value={value}
          disabled={disabled}
          {...props}
          onChange={handleChange}
          className={classNames(
            { error },
            className && (className['input'], `${className}-input`),
            primed && styles['input'],
          )}
        />
      </Label>
      {error && (
        <Error
          data-name="error-message"
          className={classNames(
            className && (className['error-message'], `${className}-error-message`),
            primed && styles['error-message'],
          )}
        >
          {error}
        </Error>
      )}
    </InputWrapper>
  );
};
