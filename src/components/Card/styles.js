import styled from 'styled-components';

export const Card = styled.div`
  background-color: #151617;
  color: #fff;
  border-radius: 6px;
  margin-bottom: 30px;
  min-width: 300px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  h3 {
    margin-bottom: 20px;
  }

  button {
    width: 100%;
    border-radius: 4px;
    border: 0;
    height: 40px;
    background-color: #fff350;
    color: #000;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
