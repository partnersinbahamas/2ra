import React, { InputHTMLAttributes, useCallback } from 'react';
import classNames from 'classnames';
import { Error, InputComponent, InputWrapper, Label, Heading } from './Input.styles';
import styles from './Input.module.scss';
import { TStile } from '../utils/types/types';

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
  stile = 'mute',
  disabled,
  ...props
}) => {
  const { className, ...inputProps } = props;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (onChange) onChange(event);
      if (onChangeValue) onChangeValue(value);
    },
    [onChange, onChangeValue],
  );

  return (
    <InputWrapper className={classNames(className, stile && styles[stile])}>
      <Label stile={stile} data-name="label" className={`${className}-label`}>
        <Heading stile={stile} data-name="heading" className={`${className}-heading`}>
          {title}
        </Heading>
        <InputComponent
          stile={stile}
          data-name="input"
          data-error={!!error}
          value={value}
          {...inputProps}
          disabled={disabled}
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
