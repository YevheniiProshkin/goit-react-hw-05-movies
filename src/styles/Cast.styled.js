import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  justify-content: center;
  max-width: calc(100vw - 50px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  padding: 0px;
  list-style: none;
  margin: 0 auto;
  margin-top: 30px;
`;

export const CastItem = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  padding: 20px 0px;
  background-color: #f0f4f5;
  > a {
    text-decoration: none;
  }
`;
