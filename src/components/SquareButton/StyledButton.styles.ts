import styled from "styled-components";
import { TProps } from './SquareButton';

const SquareButtonElement = styled.button<TProps>`
  background-color: #eee;
  border: 3px solid #ddd;
  padding: 5px;
  min-width: 85px;
  min-height: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  color: #545454;
  cursor: pointer;
  border-radius: ${({radius}) => radius ? `${radius}px` : '0'};

  &:hover {
    background-color: #ddd;
  };

  &:active {
    background-color: #ccc;
  };

  &.disabled {
    color: #ccc;
    background-color: #eee;
    border: 3px solid #e4e3e3;
    cursor: not-allowed;
  };
`;

export default SquareButtonElement;