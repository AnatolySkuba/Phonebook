import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 10px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;

  &.active {
    composes: link;
    color: brown;
  }
  
    &:hover {
  text-decoration: underline;
`;

export const Div = styled.div`
  display: flex;
  padding-right: 20px;
`;
