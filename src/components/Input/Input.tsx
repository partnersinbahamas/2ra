import React, { InputHTMLAttributes }  from "react";
import classNames from "classnames";
import { Error, InputComponent, InputWrapper, Label } from "./Input.styles";

export interface TProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  error?: string,
};
export const Input: React.FC<TProps> = ({
  title,
  value,
  onChange,
  error,
  ...props
}) => {
  return (
    <InputWrapper>
      <Label>
        {title}
      <InputComponent
        value={value}
        onChange={onChange}
        className={classNames({ error })}
        {...props}
      />
      </Label>
      {error && (
        <Error>
          {error}
        </Error>  
      )}
    </InputWrapper>
  );
};