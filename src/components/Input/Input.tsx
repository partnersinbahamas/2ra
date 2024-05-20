import React, { InputHTMLAttributes, useCallback } from 'react';
import classNames from 'classnames';

import { TStile } from '../utils/types/types';
import defaultProps from '../utils/variables/defaultProps';
import { Error, InputComponent, InputWrapper, Label, Heading } from './Input.styles';
import styles from './Input.module.scss';
import { useIDS } from '../../providers/IDSProvider';
import usePrime from '../../hooks/usePrime';
import useModuleExtention from '../../hooks/useModuleExtention';

export interface TProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeValue?: (value: string) => void;
  error?: string;
  stile?: TStile;
  disabled?: boolean;
  className?: any
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
  const { stylesExtention } = useIDS();
  const moduleExtention = useModuleExtention(
    stylesExtention as TStylesExtension,
  ).moduleExtentionState;
  const prime = usePrime(stile).primeState;

  const label = title ? `${title}-label` : 'label';

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (onChange) onChange(event);
      if (onChangeValue) onChangeValue(value);
    },
    [onChange, onChangeValue],
  );

  const classes = {
    wrapper: className && moduleExtention ? className['wrapper'] : className,
    label: className && moduleExtention ? className['label'] : `${className}-label`,
    heading: className && moduleExtention ? className['heading'] : `${className}-heading`,
    input: className && moduleExtention ? className['input'] : `${className}-input`,
    'error-message':
      className && moduleExtention ? className['error-message'] : `${className}-error-message`,
  };

  return (
    <InputWrapper
      disabled={disabled}
      className={classNames(prime && styles[stile], classes.wrapper)}
    >
      <Label
        aria-label={label}
        stile={stile}
        disabled={disabled}
        className={classNames(prime && styles['label'], classes.label)}
      >
        <Heading
          stile={stile}
          disabled={disabled}
          className={classNames(prime && styles['heading'], classes.heading)}
        >
          {title}
        </Heading>
        <InputComponent
          {...props}
          error={error?.length ? error : undefined}
          stile={stile}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          className={classNames({ error }, prime && styles['input'], classes.input)}
        />
      </Label>
      {error && (
        <Error className={classNames(prime && styles['error-message'], classes['error-message'])}>
          {error}
        </Error>
      )}
    </InputWrapper>
  );
};
