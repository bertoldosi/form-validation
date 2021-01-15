import styled, { css } from 'styled-components';

interface ErrorsProps {
  isErrors: boolean;
}

export const Container = styled.div<ErrorsProps>`
  div {
    display: flex;
    flex-direction: column;
    span {
      color: red;
    }
    input {
      margin-top: 8px;
      height: 30px;

      ${(props) =>
        props.isErrors &&
        css`
          border: 1px solid red;
        `};
    }
  }
`;
