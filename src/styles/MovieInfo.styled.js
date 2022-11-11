import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  padding: 20px;
`;

export const MovieInfoContainer = styled.div`
  margin-left: 30px;
`;

export const GenersList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 20px;
  padding: 0px;
`;

export const GenersListItem = styled.li`
  text-align: center;
  margin-right: 20px;
  font-weight: 500;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: orange;
  border: 1px solid black;
  > a {
    text-decoration: none;
  }
`;

export const Info = styled.p`
  font-weight: 500;
  font-size: 20px;
`;
