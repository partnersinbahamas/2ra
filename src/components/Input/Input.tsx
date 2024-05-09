import React, { InputHTMLAttributes, useCallback } from 'react';
import classNames from 'classnames';
import { Error, InputComponent, InputWrapper, Label, Heading } from './Input.styles';
import styles from './Input.module.scss';
import { TStile } from '../utils/types/types';
import defaultProps from '../utils/variables/defaultProps';

export interface TProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeValue?: (value: string) => void;
  error?: string;
  stile?: TStile;
  disabled?: boolean;
}

export const Input: React.FC<TProps> = ({
  title,
  value,
  onChange,
  onChangeValue,
  error,
  stile = defaultProps.stile,
  disabled,
  ...props
}) => {
  const { className, ...inputProps } = props;
  const label = title ? `${title}-label` : 'label';

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (onChange) onChange(event);
      if (onChangeValue) onChangeValue(value);
    },
    [onChange, onChangeValue],
  );

  return (
    <InputWrapper disabled={disabled} className={classNames(styles[stile], className)}>
      <Label
        data-name="label"
        aria-label={label}
        stile={stile}
        disabled={disabled}
        className={`${className}-label`}
      >
        <Heading data-name="heading" stile={stile} className={`${className}-heading`}>
          {title}
        </Heading>
        <InputComponent
          data-name="input"
          data-error={!!error}
          stile={stile}
          value={value}
          disabled={disabled}
          {...inputProps}
          onChange={handleChange}
          className={classNames({ error }, { [`${className}-error`]: error }, `${className}-input`)}
        />
      </Label>
      {error && (
        <Error data-name="error-message" className={`${className}-error-message`}>
          {error}
        </Error>
      )}
    </InputWrapper>
  );
};
