import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  padding: 1rem;
`;

export const StyledNavLink = styled(NavLink)`
  color: #212529;
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1.2rem;
  &.active {
    font-weight: bold;
  }
`;
