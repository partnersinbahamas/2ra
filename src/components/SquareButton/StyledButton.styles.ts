import styled from "styled-components";

const SquareButtonElement = styled.button`
  background-color: #eee;
  border: 3px solid #ddd;
  padding: 5px;
  min-width: 85px;
  min-height: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  color: #545454;
  cursor: pointer;

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