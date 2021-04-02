import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  form {
    width: 70vw;
    height: 100vh;

    margin-top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;

    input {
      width: 500px;
      margin-bottom: 10px;
      padding: 1.2rem;
      border-radius: 5px;
      border: 0;
    }

    div {
      margin-top: 20px;

      button {
        width: 15rem;
        height: 40px;
        margin-top: 2rem;
        border: 0;
        border-radius: 5px;
      }
    }
  }
`;
