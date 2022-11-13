import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TrendMovieList = styled.ul`
  display: grid;
  justify-content: center;
  max-width: calc(100vw - 50px);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 22px;
  padding: 0px;
  list-style: none;
  margin: 0 auto;
  margin-top: 30px;
`;

export const MoviesCard = styled.li`
  border: 1px solid gray;
  border-radius: 4px;
  text-align: center;
  padding: 10px 0px;
  font-weight: 500;
  font-size: 20px;
  background-color: #f0f4f5;
  box-shadow: 0px 0px 25px 1px rgba(242, 205, 39, 1);
  > a {
    text-decoration: none;
  }
`;

export const AdditonalInfoList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-bottom: 30px;
  list-style: none;
`;

export const AdditonalInfoItem = styled.li`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  width: 100px;
  margin-right: 20px;
  background-color: orange;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: white;
    
`;
