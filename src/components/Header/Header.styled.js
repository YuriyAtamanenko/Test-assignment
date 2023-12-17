import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: #212529;
`;

export const Navigation = styled.nav`
  width: 1184px;
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  padding: 30px 0px;
  font-size: 24px;

  color: #8f8f8f;

  &.active {
    color: orange;
    filter: drop-shadow(0 0 5px rgba(77, 191, 234, 0.8));
  }

  &:hover {
    color: #408ec6;
  }
`;
