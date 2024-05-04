import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { Error, InputComponent, InputWrapper, Label, Heading } from './Input.styles';
import styles from './Input.module.scss';
import { TStile } from '../utils/types/types';

export interface TProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  stile?: TStile;
  disabled?: boolean;
}

export const Input: React.FC<TProps> = ({
  title,
  value,
  onChange,
  error,
  stile,
  disabled,
  ...props
}) => {
  const { className, ...inputProps } = props;
  return (
    <InputWrapper className={classNames(className, stile && styles[stile])}>
      <Label data-name="label">
        <Heading data-name="heading">{title}</Heading>
        <InputComponent
          data-name="input"
          data-error={!!error}
          value={value}
          {...inputProps}
          disabled={disabled}
          onChange={onChange}
          className={classNames({ error }, { [styles[`${className}-error`]]: error })}
        />
      </Label>
      {error && <Error data-name="error-message">{error}</Error>}
    </InputWrapper>
  );
};
