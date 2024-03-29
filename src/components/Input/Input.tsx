import React, { InputHTMLAttributes }  from "react";
import classNames from "classnames";
import { Error, InputComponent, InputWrapper, Label } from "./Input.styles";
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
    <InputWrapper id="input" className={`
      ${props.className},
      ${ stile && styles[stile]}
    `}>
      <Label id="label">
      <h3 style={{margin: 0}} id="heading">{title}</h3>
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
        <Error id="error">
          {error}
        </Error>
      )}
    </InputWrapper>
  );
};