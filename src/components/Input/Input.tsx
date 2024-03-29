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
      <Label id="label">
      <Heading id="heading">{title}</Heading>
      <InputComponent
        id="input"
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
        <Error id="error-message">
          {error}
        </Error>
      )}
    </InputWrapper>
  );
};