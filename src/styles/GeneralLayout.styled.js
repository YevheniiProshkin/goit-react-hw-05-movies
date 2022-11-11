import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 20px 40px;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: underline;
  color: black;
  &.active {
    color: white;
    background-color: #184857;
  }
`;
