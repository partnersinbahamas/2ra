import React, { InputHTMLAttributes }  from "react";
import classNames from "classnames";
import { Error, InputComponent, InputWrapper, Label, Heading } from "./Input.styles";
import styles from './Input.module.scss';

export interface TProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  error?: string,
  stile?: 'primary', 
};

export const Input: React.FC<TProps> = ({
  title,
  value,
  onChange,
  error,
  stile,
  ...props
}) => {
  const { className, ...inputProps } = props;
  return (
    <InputWrapper className={
      classNames(
        props.className,
        stile && styles[stile]
      )}
    >
      <Label data-name="label">
      <Heading data-name="heading">{title}</Heading>
      <InputComponent
        data-name="input"
        value={value}
        {...inputProps}
        onChange={onChange}
        className={classNames(
          { error },
          { [styles[`${stile}-error`]]: error },
          { [styles[`${props.className}-error`]]: error },
        )}
      />
      </Label>
      {error && (
        <Error data-name="error-message">
          {error}
        </Error>
      )}
    </InputWrapper>
  );
};