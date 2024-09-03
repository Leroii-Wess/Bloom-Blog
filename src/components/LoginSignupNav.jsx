import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
  padding: 2rem 20rem;
  margin-top: 7%;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: #32474a; //  #62787b, #32474a

  &:hover {
    color: #62787b; // #465b64
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #d83162;
    border-bottom: 1px solid #d83162;
  }
`;

function Nav() {
  return (
    <Div>
      <StyledNavLink to="login">Login</StyledNavLink>
      <StyledNavLink to="signup">Sign Up</StyledNavLink>
    </Div>
  );
}

export default Nav;
