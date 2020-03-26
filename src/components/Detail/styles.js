import styled from 'styled-components';

export const Container = styled.section`
  /* background-color: #07090a; */
  width: 100%;
  max-width: 700px;
  width: 100%;
  color: #fff;

  .backHome {
    text-align: center;
    margin-bottom: 50px;

    button {
      background-color: transparent;
      border: 0;
      color: #5d8ac1;
      font-size: 3rem;
      cursor: pointer;
    }
  }
`;

export const Person = styled.div`
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #222;

  .eye {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    background-color: ${props => props.eyeColor};
  }

  > p {
    font-size: 2rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    > span {
      margin-left: 10px;
      font-weight: 400;
    }
  }
`;

export const List = styled.div`
  h2 {
    margin-bottom: 20px;
  }

  .starship {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #222;

    > p {
      font-size: 2rem;
      font-weight: 300;
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      > span {
        margin-left: 10px;
        font-weight: 400;
      }
    }

    &:last-of-type {
      border-bottom: 0;
    }
  }
`;
